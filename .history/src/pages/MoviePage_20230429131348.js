import React, { useEffect, useState } from "react";
import { apiKey, fetcher } from "../config";
import useSWR from "swr";
import MovieCard from "../components/movie/MovieCard";
import useDebounce from "../hooks/useDebounce";

const MoviePage = () => {
  const [search, setSearch] = useState("");
  const [url, setUrl] = useState(
    `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
  );
  const debounceValue = useDebounce(search, 1500);
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const { data, error } = useSWR(url, fetcher);
  const loading = !data && !error;
  const movie = data?.results || [];

  useEffect(() => {
    if (debounceValue) {
      setUrl(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${debounceValue}`
      );
    } else {
      setUrl(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`);
    }
  }, [debounceValue]);

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
      {loading && (
        <div className="w-10 h-10 rounded-full border-4 border-primary border-t-transparent border-t-4 mx-auto animate-spin"></div>
      )}
      <div className="grid grid-cols-4 gap-10">
        {!loading &&
          movie.length > 0 &&
          movie.map((item) => (
            <MovieCard key={item.id} data={item}></MovieCard>
          ))}
      </div>
      <div className="flex items-center justify-center">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </span>
        <span>1</span>
        <span>1</span>
        <span>1</span>
        <span>1</span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default MoviePage;
