import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import MovieCard from "./MovieCard";

const MovieList = () => {
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
