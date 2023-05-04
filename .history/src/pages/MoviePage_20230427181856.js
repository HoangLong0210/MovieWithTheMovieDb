import React from "react";
import { fetcher } from "../config";
import useSWR from "swr";

const MoviePage = () => {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/latest?api_key=a58d8f2dcc2e162008480323ba82d932`,
    fetcher
  );
  const movie = data?.results || [];
  return <div className="py-10"></div>;
};

export default MoviePage;
