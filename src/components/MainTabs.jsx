import React from "react";
import { NavLink, useLocation } from "react-router-dom";

function MainTabs() {
  let { pathname } = useLocation();

  return (
    <div className="sticky z-10 inset-x-0 top-0 bg-black">
      <div className="flex z-10 flex-row justify-start whitespace-nowrap overflow-auto scrollbar-hide mx-0">
        <NavLink
          to="/workshops"
          className={({ isActive }) =>
            isActive || pathname === "/"
              ? "text-white font-spaceGrotesk font-bold text-4xl lg:text-5xl lg:mx-10 mr-5 my-4 cursor-pointer"
              : "text-zinc-400 font-spaceGrotesk font-bold text-4xl lg:text-5xl lg:mx-10 mr-5 my-4 cursor-pointer"
          }
          end
        >
          WORKSHOPS
        </NavLink>
        <NavLink
          to="/events"
          className={({ isActive }) =>
            isActive
              ? "text-white font-spaceGrotesk font-bold text-4xl lg:text-5xl mx-5 lg:mx-10 my-4 cursor-pointer"
              : "text-zinc-400 font-spaceGrotesk font-bold text-4xl lg:text-5xl lg:mx-10 mx-5 my-4 cursor-pointer"
          }
        >
          EVENTS
        </NavLink>
        <NavLink
          to="/competitions"
          className={({ isActive }) =>
            isActive
              ? "text-white font-spaceGrotesk font-bold text-4xl lg:text-5xl lg:mx-10 mx-5 my-4 cursor-pointer"
              : "text-zinc-400 font-spaceGrotesk font-bold text-4xl lg:text-5xl lg:mx-10 mx-5 my-4 cursor-pointer"
          }
        >
          COMPETITIONS
        </NavLink>
      </div>
      <div className="lg:mx-10">
        <hr />
      </div>
    </div>
  );
}

export default MainTabs;
