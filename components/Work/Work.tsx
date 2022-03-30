import React, { useState, Dispatch, SetStateAction, useCallback } from "react";
import useFetch from "../../hooks/useFetch";
import Grid from "../../assets/img/work/grid.svg";
import List from "../../assets/img/work/list.svg";
import { BASE_URL, PROJECT_CATEGORIES } from "../../constants";
import cn from "classnames";
import Button from "../Shared/Button/Button";
import Heading from "../Shared/Heading/Heading";
import styles from "./Work.module.scss";

const AD_FETCH_LIMIT = 3;
const INITIAL_PAGE_SIZE = 9;

type Project = {
  id: number;
  category: string;
  previewUrl: string;
  description: string;
};

type HeaderProps = {
  setFilter: Dispatch<SetStateAction<string | null>>;
  view: string;
  setView: Dispatch<SetStateAction<string>>;
};

const Header = ({ setFilter, view, setView }: HeaderProps) => {
  return (
    <div className={styles.header}>
      <div className={styles.categories}>
        <span className={styles.filter} onClick={() => setFilter(null)}>
          {"all"}
          {" / "}
        </span>

        {PROJECT_CATEGORIES.map((category, i) => {
          const shouldAddDelimiter = i !== PROJECT_CATEGORIES.length - 1;
          return (
            <span
              key={category}
              className={styles.filter}
              onClick={() => setFilter(category)}
            >
              {category}
              {shouldAddDelimiter && " / "}
            </span>
          );
        })}
      </div>
      <div className={styles.controls}>
        <button
          className={cn(styles.button, {
            [styles.activeButton]: view === "grid",
          })}
          onClick={() => setView("grid")}
        >
          <Grid />
        </button>
        <button
          className={cn(styles.button, {
            [styles.activeButton]: view === "list",
          })}
          onClick={() => setView("list")}
        >
          <List />
        </button>
      </div>
    </div>
  );
};

const Work = () => {
  const [view, setView] = useState("grid");
  const [filter, setFilter] = useState<string | null>(null);
  const [page, setPage] = useState(AD_FETCH_LIMIT + 1);

  const limit =
    INITIAL_PAGE_SIZE + (page - AD_FETCH_LIMIT - 1) * AD_FETCH_LIMIT;

  const { data, loading, error, fetchMore, isNextPageAvailable } =
    useFetch<Project>(`${BASE_URL}/projects`, limit, filter, "GET");

  const handleNextPage = useCallback(() => {
    fetchMore(page, AD_FETCH_LIMIT);
    setPage((old) => old + 1);
  }, [fetchMore, page]);

  return (
    <div className={styles.root}>
      <Heading>Check Out What I can Do</Heading>
      <div className={styles.content}>
        <Header setFilter={setFilter} view={view} setView={setView}></Header>

        {error && <p>Error</p>}

        {data && data.length === 0 && <p>No results</p>}

        {data && data.length > 0 && (
          <div
            className={cn({
              [styles.grid]: view === "grid",
              [styles.list]: view === "list",
            })}
          >
            {data.map((item) => {
              return (
                <div key={item.id} className={styles.gridItem}>
                  <img src={item.previewUrl} alt="preview" />
                  <div
                    className={cn(styles.description, {
                      [styles.hidden]: view === "grid",
                    })}
                  >
                    {item.description}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {loading && <p>Loading...</p>}

        {/*
          Since infinite loading is a deprecated concept i've
          let myself to make a button-based pagination.
          More on that:
          https://medium.com/simple-human/7-reasons-why-infinite-scrolling-is-probably-a-bad-idea-a0139e13c96b
        */}

        {isNextPageAvailable && (
          <div className={styles.paginationControls}>
            <Button onClick={handleNextPage}>Load more</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Work;
