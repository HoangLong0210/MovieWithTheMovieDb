import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../button/Button";
import { tmdbAPI } from "../../config";
import LoadingSkeleton from "../loading/LoadingSkeleton";

const MovieCard = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div className="movie-card flex flex-col rounded-lg p-3 bg-slate-800 select-none text-white h-full">
      <img
        src={tmdbAPI.imageOriginal(data.poster_path)}
        alt=""
        className="w-full h-[300px] object-cover rounded-lg mb-5"
      />
      <div className="flex flex-col flex-1">
        <h3 className="text-white text-xl font-bold mb-3">{data.title}</h3>
        <div className="flex items-center justify-between text-sm opacity-50 mb-10">
          <span>{new Date(data.release_date).getFullYear()}</span>
          <span>{data.vote_average}</span>
        </div>
        <Button onClick={() => navigate(`/movie/${data.id}`)}>WATCH NOW</Button>
      </div>
    </div>
  );
};

const MovieCardSkeleton = () => {
  return (
    <div className="movie-card flex flex-col rounded-lg p-3 bg-slate-800 select-none text-white h-full">
      <img
        src={tmdbAPI.imageOriginal(data.poster_path)}
        alt=""
        className="w-full h-[300px] object-cover rounded-lg mb-5"
      />
      <LoadingSkeleton></LoadingSkeleton>
      <div className="flex flex-col flex-1">
        <h3 className="text-white text-xl font-bold mb-3">{data.title}</h3>
        <div className="flex items-center justify-between text-sm opacity-50 mb-10">
          <span>{new Date(data.release_date).getFullYear()}</span>
          <span>{data.vote_average}</span>
        </div>
        <Button onClick={() => navigate(`/movie/${data.id}`)}>WATCH NOW</Button>
      </div>
    </div>
  );
};

export default MovieCard;
