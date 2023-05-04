import { Fragment } from "react";
import { NavLink } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <header className="header flex items-center justify-center gap-x-5 py-10 text-white">
        <NavLink>Home</NavLink>
        <NavLink>Movie</NavLink>
      </header>
    </Fragment>
  );
}

export default App;
