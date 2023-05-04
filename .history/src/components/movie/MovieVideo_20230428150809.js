import React from "react";
import { useParams } from "react-router-dom";
import { apiKey, fetcher } from "../../config";
import useSWR from "swr";

const MovieVideo = () => {
  const { movieId } = useParams();
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`,
    fetcher
  );
  console.log("🚀 ~ file: MovieCredits.js:9 ~ MovieCredits ~ data:", data);
  if (!data) return null;
  const { cast } = data;
  if (!cast || cast.length <= 0) return null;
  return <div></div>;
};

export default MovieVideo;
