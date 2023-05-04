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
      <div className="w-full h-[500px] max-w-[800px] mx-auto -mt-[250px] relative z-10 pb-10">
        <img
          src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
          alt=""
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
      <h1 className="text-white text-center text-5xl font-black mb-10">
        {data.title}
      </h1>
      {data?.genres.length > 0 && (
        <div className="flex items-center justify-center gap-x-5 mb-10 text-white">
          {data.genres.map((item) => (
            <span
              key={item.id}
              className="py-2 px-4 border-primary text-primary border rounded-lg"
            >
              {item.name}
            </span>
          ))}
        </div>
      )}
      <p className="text-center text-sm leading-relaxed max-w-[600px] mx-auto text-white mb-10">
        {data.overview}
      </p>
      <MovieCredits></MovieCredits>
    </Fragment>
  );
};

function MovieCredits() {
  const { movieId } = useParams();
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`,
    fetcher
  );
  console.log("MovieCredits ~ data:", data.cast);
  if (!data) return null;
  return (
    <div>
      <h2 className="text-center text-3xl mb-10">CASTS</h2>
      <div className="grid grid-cols-4 gap-5">
        <div className="cast-item">
          <img
            src={`https://image.tmdb.org/t/p/original${data.cast?.poster_path}`}
            alt=""
            className="w-full h-[350px] object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default MovieDetailsPage;
