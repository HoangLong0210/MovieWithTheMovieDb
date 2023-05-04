import { Fragment } from "react";
import Banner from "./components/banner/Banner";
import "swiper/scss";
import Header from "./components/layout/Header";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import Main from "./components/layout/Main";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route element={<Main></Main>}>
          <Route
            path="/"
            element={
              <>
                <Banner></Banner>
                <HomePage></HomePage>
              </>
            }
          ></Route>
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
