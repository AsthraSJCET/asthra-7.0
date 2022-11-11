import React from "react";
import { NavLink } from "react-router-dom";

function NavbarDropdown() {
  return (
    <div className="h-screen w-screen top-0 left-0 right-0 grid grid-rows-3 lg:text-5xl py-20 bg-[#CCFF00] text-2xl font-spaceGrotesk font-bold">
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

export default NavbarDropdown;