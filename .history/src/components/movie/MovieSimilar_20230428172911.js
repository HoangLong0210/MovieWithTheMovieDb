import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { apiKey, fetcher } from "../../config";

const MovieSimilar = () => {
  const { movieId } = useParams();
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}`,
    fetcher
  );
  if (!data) return null;
  console.log("🚀 ~ file: MovieSimilar.js:15 ~ MovieSimilar ~ data:", data);
  return <div></div>;
};

export default MovieSimilar;
