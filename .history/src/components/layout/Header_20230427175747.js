import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header flex items-center justify-center gap-x-5 py-10 text-white mb-5">
      <span className="text-primary">Home</span>
      <span>Movie</span>
    </header>
  );
};

export default Header;
