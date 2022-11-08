import React from "react";
import { NavLink } from "react-router-dom";

function MainTabs() {
  return (
    <>
      <div className="flex flex-row justify-start py-2 whitespace-nowrap overflow-auto scrollbar-hide mx-0 lg:mx-20">
        <NavLink
          to="/workshops"
          className={({ isActive }) =>
            isActive
              ? "text-white font-spaceGrotesk font-bold text-4xl lg:text-5xl mx-10 my-8 cursor-pointer"
              : "text-zinc-400 font-spaceGrotesk font-bold text-4xl lg:text-5xl mx-10 my-8 cursor-pointer"
          }
        >
          WORKSHOPS
        </NavLink>
        <NavLink
          to="/competitions"
          className={({ isActive }) =>
            isActive
              ? "text-white font-spaceGrotesk font-bold text-4xl lg:text-5xl mx-10 my-8 cursor-pointer"
              : "text-zinc-400 font-spaceGrotesk font-bold text-4xl lg:text-5xl mx-10 my-8 cursor-pointer"
          }
        >
          COMPETITIONS
        </NavLink>
        <NavLink
          to="/talks"
          className={({ isActive }) =>
            isActive
              ? "text-white font-spaceGrotesk font-bold text-4xl lg:text-5xl mx-10 my-8 cursor-pointer"
              : "text-zinc-400 font-spaceGrotesk font-bold text-4xl lg:text-5xl mx-10 my-8 cursor-pointer"
          }
        >
          TALKS
        </NavLink>
        <NavLink
          to="/lectures"
          className={({ isActive }) =>
            isActive
              ? "text-white font-spaceGrotesk font-bold text-4xl lg:text-5xl mx-10 my-8 cursor-pointer"
              : "text-zinc-400 font-spaceGrotesk font-bold text-4xl lg:text-5xl mx-10 my-8 cursor-pointer"
          }
        >
          LECTURES
        </NavLink>
      </div>
      <div className="lg:mx-20 lg:mb-20 mb-10">
        <hr />
      </div>
    </>
  );
}

export default MainTabs;
