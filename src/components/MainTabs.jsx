import React from "react";
import { NavLink, useLocation } from "react-router-dom";

function MainTabs() {
  let { pathname } = useLocation();

  return (
    <div id="mtabs" className="sticky z-10 inset-x-0 top-0 bg-black">
      <div className="flex z-10 flex-row justify-start whitespace-nowrap overflow-auto scrollbar-hide mx-0">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive || pathname === "/"
              ? "text-lime-400 font-spaceGrotesk font-bold text-4xl lg:text-5xl lg:mx-10 mr-5 my-4 cursor-pointer"
              : "text-zinc-400 font-spaceGrotesk font-bold text-4xl lg:text-5xl lg:mx-10 mr-5 my-4 cursor-pointer"
          }
          end
        >
          ALL
        </NavLink>
        <NavLink
          to="/workshops"
          className={({ isActive }) =>
            isActive
              ? "text-lime-400 font-spaceGrotesk font-bold text-4xl lg:text-5xl lg:mx-10 mr-5 my-4 cursor-pointer"
              : "text-zinc-400 font-spaceGrotesk font-bold text-4xl lg:text-5xl lg:mx-10 mr-5 my-4 cursor-pointer"
          }
          end
        >
          WORKSHOPS
        </NavLink>
        <NavLink
          to="/competitions"
          className={({ isActive }) =>
            isActive
              ? "text-lime-400 font-spaceGrotesk font-bold text-4xl lg:text-5xl lg:mx-10 mr-8 my-4 cursor-pointer"
              : "text-zinc-400 font-spaceGrotesk font-bold text-4xl lg:text-5xl lg:mx-10 mr-8 my-4 cursor-pointer"
          }
        >
          COMPETITIONS
        </NavLink>
        <NavLink
          to="/expo"
          className={({ isActive }) =>
            isActive
              ? "text-lime-400 font-spaceGrotesk font-bold text-4xl lg:text-5xl lg:mx-10 mr-8 my-4 cursor-pointer"
              : "text-zinc-400 font-spaceGrotesk font-bold text-4xl lg:text-5xl lg:mx-10 mr-8 my-4 cursor-pointer"
          }
        >
          EXPO
        </NavLink>
        <NavLink
          to="/events"
          className={({ isActive }) =>
            isActive
              ? "text-lime-400 font-spaceGrotesk font-bold text-4xl lg:text-5xl mr-8 lg:mx-10 my-4 cursor-pointer"
              : "text-zinc-400 font-spaceGrotesk font-bold text-4xl lg:text-5xl lg:mx-10 mr-8 my-4 cursor-pointer"
          }
        >
          EVENTS
        </NavLink>
      </div>
      <div className="lg:mx-10">
        
        <div className="w-full bg-gray-100/20 h-0.5"></div>
      </div>
    </div>
  );
}

export default MainTabs;
