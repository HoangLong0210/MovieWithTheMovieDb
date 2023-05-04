import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import MovieCard from "./MovieCard";
import useSWR from "swr";
import { fetcher } from "../../config";

const MovieList = () => {
  const [movie, setMovie] = useState([]);
  const { data, error } = useSWR(
    "https://api.themoviedb.org/3/movie/now_playing?api_key=a58d8f2dcc2e162008480323ba82d932",
    fetcher
  );
  useEffect(() => {
    if (data && data.results) {
      setMovie(data.results);
    }
  }, [data]);
  console.log(movie);
  return (
    <div className="movie-list grid grid-cols-4 gap-4">
      {movie.length > 0 &&
        movie.map((item) => (
          <Swiper grabCursor={true} spaceBetween={40} slidesPerView={"auto"}>
            <SwiperSlide>
              <MovieCard key={item.id}></MovieCard>
            </SwiperSlide>
          </Swiper>
        ))}
    </div>
  );
};

export default MovieList;
