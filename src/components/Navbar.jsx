import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="group-hover:text-white h-screen grid grid-cols-1 px-60 py-20 bg-lime-600 text-5xl font-spaceGrotesk font-bold">
      <NavLink to="/">HOME</NavLink>
      <NavLink to="/workshops">WORKSHOPS</NavLink>
      <NavLink to="/talks">TALKS</NavLink>
      <NavLink to="/competitions">COMPETITIONS</NavLink>
      <NavLink to="/ambassadors">CAMPUS AMBASSADORS</NavLink>
      <NavLink to="/signup">SIGN UP</NavLink>
      <NavLink to="/contact">CONTACT SUPPORT</NavLink>
    </div>
  );
}

export default Navbar;
