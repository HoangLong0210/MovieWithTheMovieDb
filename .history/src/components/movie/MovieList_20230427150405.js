import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import MovieCard from "./MovieCard";
import useSWR from "swr";
import { fetcher } from "../../config";

const MovieList = () => {
  const [movie, setMovie] = useState([]);
  console.log("🚀 ~ file: MovieList.js:10 ~ MovieList ~ movie:", movie);
  const { data, error } = useSWR(
    "https://api.themoviedb.org/3/movie/now_playing?api_key=a58d8f2dcc2e162008480323ba82d932",
    fetcher
  );
  useEffect(() => {
    setMovie(data.results);
  }, [data.results]);
  return (
    <div className="movie-list grid grid-cols-4 gap-4">
      <Swiper grabCursor={true} spaceBetween={40} slidesPerView={"auto"}>
        <SwiperSlide>
          <MovieCard></MovieCard>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MovieList;
