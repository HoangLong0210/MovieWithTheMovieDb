import { Fragment } from "react";
import MovieList from "./components/movie/MovieList";
import Banner from "./components/banner/Banner";
import "swiper/scss";
import Header from "./components/layout/Header";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Fragment>
      <Header></Header>
      <Banner></Banner>
      <HomePage></HomePage>
    </Fragment>
  );
}

export default App;
