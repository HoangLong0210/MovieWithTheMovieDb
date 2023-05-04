import React from "react";

const MovieCard = ({ data }) => {
  return (
    <div className="movie-card flex flex-col rounded-lg p-3 bg-slate-800 select-none text-white h-full">
      <img
        src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
        alt=""
        className="w-full h-[300px] object-cover rounded-lg mb-5"
      />
      <div className="flex flex-col flex-1">
        <h3 className="text-white text-xl font-bold mb-3">{data.title}</h3>
        <div className="flex items-center justify-between text-sm opacity-50 mb-10">
          <span>{new Date(data.release_date).getFullYear()}</span>
          <span>{data.vote_average}</span>
        </div>
        <button className="py-3 px-6 rounded-lg capitalize bg-primary w-full mt-auto">
          WATCH NOW
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
