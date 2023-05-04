import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import MovieList from "./components/movie/MovieList";
import Banner from "./components/banner/Banner";
import "swiper/scss";

function App() {
  return (
    <Fragment>
      <Banner></Banner>
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
}

export default App;
