import React, { useState, useEffect, useCallback } from "react";
import countTotal from "../api/json-server/count";

const defaultOptions = {
  limit: "",
  filter: "",
  body: {},
};

type Data<T> = {
  data: Array<T> | null;
  loading: boolean;
  error: object | null;
  fetchMore: (page: number, limit: number) => void;
  isNextPageAvailable: boolean;
};

type FetchOptions = {
  limit?: number | undefined;
  filter?: string | null | undefined;
  body?: object | undefined;
};

const useFetch = <T>(
  url: string,
  // page: number,
  method: string,
  options?: FetchOptions
): Data<T> => {
  const { limit, filter, body } = options ? options : defaultOptions;

  const stringifiedBody = body ? JSON.stringify(body) : null;

  const [data, setData] = useState<Array<T> | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isNextPageAvailable, setIsNextPageAvailable] = useState(true);

  useEffect(() => {
    setLoading(true);

    let updatedUrl = url.concat(`?_limit=${limit}`);

    if (filter) {
      updatedUrl = updatedUrl.concat(`&category_like=${filter}`);
    }

    fetch(updatedUrl, {
      method,
      body: stringifiedBody,
    })
      .then((response) => {
        if (!response.ok) throw new Error("Something went wrong");

        const total = countTotal(response);
        const parsedResponse = response.json();

        return Promise.all([parsedResponse, total]);
      })
      .then((parsedResponse) => {
        const [data, total] = parsedResponse;

        if (data.length === total) setIsNextPageAvailable(false);
        else setIsNextPageAvailable(true);

        return data;
      })
      .then((data) => {
        return setData(data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => setLoading(false));
  }, [body, filter, limit, method, stringifiedBody, url]);

  const fetchMore = useCallback(
    async (page: number, limit: number) => {
      if (!data) return [];
      setLoading(true);
      const response = await fetch(`${url}?_page=${page}&_limit=${limit}`, {
        method: "GET",
      });

      const total = countTotal(response);
      const parsedResponse = await response.json();
      const merged = [...data, ...parsedResponse];

      if (merged.length === total) setIsNextPageAvailable(false);

      setData(merged);
      setLoading(false);
    },
    [data, url]
  );

  return {
    data: data,
    loading: loading,
    error: error,
    fetchMore,
    isNextPageAvailable,
  };
};

export default useFetch;
