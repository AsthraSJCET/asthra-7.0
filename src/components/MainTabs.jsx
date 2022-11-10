import React from "react";
import { NavLink } from "react-router-dom";

function MainTabs() {
  return (
    <div className="sticky z-70 inset-x-0 top-0 backdrop-blur-xl bg-black/50 mb-5">
      <div className="flex flex-row justify-start whitespace-nowrap overflow-auto scrollbar-hide mx-0 lg:mx-10">
        <NavLink
          to="/workshops"
          className={({ isActive }) =>
            isActive
              ? "text-white font-spaceGrotesk font-bold text-4xl lg:text-5xl lg:mx-10 mr-5 my-8 cursor-pointer"
              : "text-zinc-400 font-spaceGrotesk font-bold text-4xl lg:text-5xl lg:mx-10 mr-5 my-8 cursor-pointer"
          }
        >
          WORKSHOPS
        </NavLink>
        <NavLink
          to="/events"
          className={({ isActive }) =>
            isActive
              ? "text-white font-spaceGrotesk font-bold text-4xl lg:text-5xl mx-5 lg:mx-10 my-8 cursor-pointer"
              : "text-zinc-400 font-spaceGrotesk font-bold text-4xl lg:text-5xl lg:mx-10 mx-5 my-8 cursor-pointer"
          }
        >
          EVENTS
        </NavLink>
        <NavLink
          to="/competitions"
          className={({ isActive }) =>
            isActive
              ? "text-white font-spaceGrotesk font-bold text-4xl lg:text-5xl lg:mx-10 mx-5 my-8 cursor-pointer"
              : "text-zinc-400 font-spaceGrotesk font-bold text-4xl lg:text-5xl lg:mx-10 mx-5 my-8 cursor-pointer"
          }
        >
          COMPETITIONS
        </NavLink>
      </div>
      <div className="lg:mx-20 lg:mb-20 mb-10">
        <hr />
      </div>
    </div>
  );
}

export default MainTabs;
