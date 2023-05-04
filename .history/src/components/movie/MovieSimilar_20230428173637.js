import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { apiKey, fetcher } from "../../config";

const MovieSimilar = () => {
  const { movieId } = useParams();
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${apiKey}`,
    fetcher
  );
  console.log("🚀 ~ file: MovieSimilar.js:9 ~ MovieSimilar ~ data:", data);
  if (!data) return null;
  const { results } = data;
  if (!results || results.length <= 0) return null;
  return (
    <div className="py-10">
      <h2 className="text-center text-3xl mb-5">SIMILAR</h2>
      <div className="grid grid-cols-6 gap-3">
        {/* {results.map((item) => (
          <MovieList></MovieList>
        ))} */}
      </div>
    </div>
  );
};

export default MovieSimilar;
