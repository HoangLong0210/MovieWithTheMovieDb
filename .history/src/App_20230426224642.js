import { Fragment } from "react";
import { NavLink } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <header className="header flex items-center justify-center gap-x-5 py-10 text-white mb-10">
        <NavLink className="text-primary">Home</NavLink>
        <NavLink>Movie</NavLink>
      </header>
      <section className="banner h-[300px] page-container">
        <div className="w-full h-full rounded-lg relative">
          <img
            src="https://pic0.iqiyipic.com/image/20211206/f2/2e/a_100421840_m_601_en_m1_1013_638.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </section>
    </Fragment>
  );
}

export default App;
