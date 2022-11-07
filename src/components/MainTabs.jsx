import React from "react";
import { NavLink } from "react-router-dom";

function MainTabs() {
  return (
    <div className="flex flex-row justify-start py-2 whitespace-nowrap overflow-auto scrollbar-hide mx-0 lg:mx-20">
      <NavLink
        to="/workshops"
        className="text-white font-bold text-4xl lg:text-5xl mx-10 my-8 cursor-pointer"
      >
        WORKSHOPS
      </NavLink>
      <NavLink
        to="/competitions"
        className="text-zinc-400 font-bold text-4xl lg:text-5xl mx-10 my-8 cursor-pointer"
      >
        COMPETITIONS
      </NavLink>
      <NavLink
        to="/talks"
        className="text-zinc-400 font-bold text-4xl lg:text-5xl mx-10 my-8 cursor-pointer"
      >
        TALKS
      </NavLink>
      <NavLink
        to="/lectures"
        className="text-zinc-400 font-bold text-4xl lg:text-5xl mx-10 my-8 cursor-pointer"
      >
        LECTURES
      </NavLink>
    </div>
  );
}

export default MainTabs;
