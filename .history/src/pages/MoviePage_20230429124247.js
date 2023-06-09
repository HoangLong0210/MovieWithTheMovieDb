import React, { useState } from "react";
import { apiKey, fetcher } from "../config";
import useSWR from "swr";
import MovieCard from "../components/movie/MovieCard";

const MoviePage = () => {
  const [search, setSearch] = useState("");
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`,
    fetcher
  );
  const movie = data?.results || [];
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className="py-10 page-container">
      <div className="flex mb-10">
        <div className="flex-1">
          <input
            type="text"
            className="w-full p-4 bg-slate-800 text-white rounded-lg outline-none "
            placeholder="Seach..."
            onChange={handleSearch}
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
