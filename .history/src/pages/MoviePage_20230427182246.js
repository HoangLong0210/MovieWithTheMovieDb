import React from "react";
import { fetcher } from "../config";
import useSWR from "swr";
import MovieCard from "../components/movie/MovieCard";

const MoviePage = () => {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/popular?api_key=a58d8f2dcc2e162008480323ba82d932`,
    fetcher
  );
  const movie = data?.results || [];
  return (
    <div className="py-10">
      <div className="flex">
        <div className="flex-1">
          <input type="text" className="w-full" placeholder="Seach..." />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-10">
        {movie.length > 0 &&
          movie.map((item) => (
            <MovieCard key={item.id} data={item}></MovieCard>
          ))}
      </div>
    </div>
  );
};

export default MoviePage;
