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
    <div className="py-10 page-container">
      <div className="flex">
        <div className="flex-1 hover:border-primary">
          <input
            type="text"
            className="w-full p-4 bg-transparent"
            placeholder="Seach..."
          />
        </div>
        <button className="p-4 text-white bg-primary  rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
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
