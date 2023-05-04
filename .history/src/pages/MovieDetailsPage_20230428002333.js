import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import { apiKey, fetcher } from "../config";
import useSWR from "swr";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`,
    fetcher
  );
  if (!data) return null;

  return (
    <Fragment>
      <div className="w-full h-[600px] relative mb-10">
        <div className="absolute inset-0 bg-black bg-opacity-25"></div>
        <div
          className="w-fukk h-full  bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${data.poster_path})`,
          }}
        ></div>
      </div>
      <div className="w-full h-[400px] max-w-[400px] mx-auto -translate-y-2/4">
        <img
          src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
          alt=""
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
    </Fragment>
  );
};

export default MovieDetailsPage;
