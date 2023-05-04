import React from "react";
import Button from "../button/Button";
import { useNavigate } from "react-router-dom";

const BannerItem = ({ data }) => {
  const navigate = useNavigate();
  console.log("🚀 ~ file: BannerItem.js:4 ~ BannerItem ~ data:", data);
  return (
    <div className="w-full h-full rounded-lg relative">
      <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg"></div>
      <img
        src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
        alt=""
        className="w-full h-full object-cover rounded-lg"
      />
      <div className="absolute left-5 bottom-5 w-full text-white">
        <h2 className="font-bold text-3xl mb-5">{data.title}</h2>
        <div className="flex items-center gap-x-3 mb-8">
          {data?.genre_ids.length > 0 &&
            data.genre_ids.map((item) => (
              <span
                className="py-2 px-4 border border-white rounded-md"
                key={item.id}
              >
                Adventure
              </span>
            ))}
        </div>
        <Button>WATCH NOW</Button>
        <button className="py-3 px-6 rounded-lg text-white font-medium bg-primary">
          Watch Now
        </button>
      </div>
    </div>
  );
};

export default BannerItem;
