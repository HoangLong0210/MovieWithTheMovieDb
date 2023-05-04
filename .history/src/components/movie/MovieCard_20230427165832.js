import React from "react";

const MovieCard = (data) => {
  console.log(" MovieCard ~ data:", data);
  return (
    <div className="movie-card rounded-lg p-3 bg-slate-800">
      <img
        src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
        alt=""
        className="w-full h-[300px] object-cover rounded-lg mb-5"
      />
      <h3 className="text-white text-xl font-bold mb-3">{data.title}</h3>
      <div className="flex items-center justify-between text-sm opacity-50 mb-10">
        <span>{data.release_date}</span>
        <span>{data.vote_average}</span>
      </div>
      <button className="py-3 px-6 rounded-lg capitalize bg-primary w-full">
        WATCH NOW
      </button>
    </div>
  );
};

export default MovieCard;
