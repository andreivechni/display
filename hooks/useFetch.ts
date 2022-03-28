import React, { useState, useEffect, useCallback } from "react";
import countTotal from "../api/json-server/count";
import { BASE_URL } from "../constants";

type Data<T> = {
  data: Array<T> | null;
  loading: boolean;
  error: object | null;
  fetchMore: (page: number, limit: number) => void;
  isNextPageAvailable: boolean;
};

const useFetch = <T>(
  url: string,
  // page: number,
  limit: number,
  filter: string | null,
  method: string,
  body?: object
): Data<T> => {
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
      const response = await fetch(
        `${url}?_page=${page}&_limit=${limit}`,
        {
          method: "GET",
        }
      );

      const total = countTotal(response);
      const parsedResponse = await response.json();
      const merged = [...data, ...parsedResponse];

      if (merged.length === total) setIsNextPageAvailable(false);

      setData(merged);
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
