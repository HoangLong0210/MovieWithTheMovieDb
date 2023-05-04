import { Fragment } from "react";
import { NavLink } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <header className="header flex items-center justify-center gap-x-5 py-10 text-white mb-5">
        <NavLink className="text-primary">Home</NavLink>
        <NavLink>Movie</NavLink>
      </header>
      <section className="banner h-[500px] page-container mb-20">
        <div className="w-full h-full rounded-lg relative">
          <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg"></div>
          <img
            src="https://pic0.iqiyipic.com/image/20211206/f2/2e/a_100421840_m_601_en_m1_1013_638.jpg"
            alt=""
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute left-5 bottom-5 w-full text-white">
            <h2 className="font-bold text-3xl mb-5">One Piece - VUA HAI TAC</h2>
            <div className="flex items-center gap-x-3 mb-8">
              <span className="py-2 px-4 border border-white rounded-md">
                Phieu luu
              </span>
              <span className="py-2 px-4 border border-white rounded-md">
                Phieu luu
              </span>
              <span className="py-2 px-4 border border-white rounded-md">
                Phieu luu
              </span>
            </div>
            <button className="py-3 px-6 rounded-lg text-white font-medium bg-primary">
              Watch Now
            </button>
          </div>
        </div>
      </section>
      <section className="movie-layout page-container-fluid pb-10 text-white">
        <h2 className="capitalize text-white mb-8 text-3xl font-bold">
          NOW PLAYING
        </h2>
        <div className="movie-list grid grid-cols-4 gap-4">
          <div className="movie-card rounded-lg p-3 bg-slate-800">
            <img
              src=""
              alt=""
              className="w-full h-[300px] object-cover rounded-lg mb-5"
            />
            <h3 className="text-white text-xl font-bold mb-3">
              One piece: Dao Hai Tac
            </h3>
            <div className="flex items-center justify-between text-sm opacity-50 mb-10">
              <span>2017</span>
              <span>7.4</span>
            </div>
            <button className="py-3 px-6 rounded-lg capitalize bg-primary">
              WATCH NOW
            </button>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default App;
