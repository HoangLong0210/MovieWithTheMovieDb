import React, { Fragment } from "react";
import MovieList from "../components/movie/MovieList";

const HomePage = () => {
  return (
    <Fragment>
      <section className="movie-layout page-container-fluid pb-10 text-white">
        <h2 className="capitalize text-white mb-8 text-3xl font-bold">
          NOW PLAYING
        </h2>
        <MovieList></MovieList>
      </section>
      <section className="movie-layout page-container-fluid pb-10 text-white">
        <h2 className="capitalize text-white mb-8 text-3xl font-bold">
          POPULAR
        </h2>
        <MovieList type="popular"></MovieList>
      </section>
      <section className="movie-layout page-container-fluid pb-10 text-white">
        <h2 className="capitalize text-white mb-8 text-3xl font-bold">
          TOP RATED
        </h2>
        <MovieList type="top_rated"></MovieList>
      </section>
    </Fragment>
  );
};

export default HomePage;
