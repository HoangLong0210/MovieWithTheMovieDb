import React from "react";
import { fetcher } from "../../config";
import useSWR from "swr";
import { Swiper, SwiperSlide } from "swiper/react";
import BannerItem from "./BannerItem";

const Banner = () => {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=a58d8f2dcc2e162008480323ba82d932`,
    fetcher
  );
  const movie = data?.results || [];

  return (
    <section className="banner h-[500px] page-container mb-20">
      <BannerItem></BannerItem>
    </section>
  );
};

export default Banner;
