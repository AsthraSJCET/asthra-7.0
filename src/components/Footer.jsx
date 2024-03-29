import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="px-5 lg:px-20 pt-20 pb-10 bg-gray-900 grid grid-cols-1 lg:grid-cols-4">
      <h4 className="px-5 text-lg text-zinc-400 font-bold font-spaceGrotesk pb-5 lg:pl-10">
      Asthra is the annual technical festival of SJCET Palai. With an annual footfall of more than 5,000 visitors and participants, Asthra is one of the biggest inter-college fests in Kerala. Asthra will keep you engrossed in a plethora of professional shows, competitions, lectures and workshops that have a lot to offer to everybody.
      </h4>
      <div className="px-5 pt-5 pb-5 lg:pt-0 cursor-pointer text-white grid grid-cols-1 lg:justify-items-end">
        <NavLink className="hover:text-lime-400 text-lg font-bold font-spaceGrotesk">
          asthra@sjcetpalai.ac.in
        </NavLink>
        <NavLink className="hover:text-lime-400 text-lg font-bold font-spaceGrotesk">
          94342823987
        </NavLink>
      </div>
      <div className="px-5 pt-5 text-white lg:pt-0 grid grid-cols-1 cursor-pointer lg:justify-items-end">
        <NavLink
          href=""
          className="hover:text-lime-400 text-lg font-bold font-spaceGrotesk lg:pr-20"
        >
          INSTAGRAM
        </NavLink>
        <NavLink
          href=""
          className="hover:text-lime-400 text-lg font-bold font-spaceGrotesk lg:pr-20"
        >
          TWITTER
        </NavLink>
        <NavLink
          href=""
          className="hover:text-lime-400 text-lg font-bold font-spaceGrotesk lg:pr-20"
        >
          FACEBOOK
        </NavLink>
      </div>
      <div className="px-5 text-white grid grid-cols-1 cursor-pointer lg:justify-items-end">
        <NavLink
          href="/workshops"
          className="hover:text-lime-400 text-lg font-bold font-spaceGrotesk lg:pr-20"
        >
          WORKSHOPS
        </NavLink>
        <NavLink
          href="./competitions"
          className="hover:text-lime-400 text-lg font-bold font-spaceGrotesk lg:pr-20"
        >
          COMPETITIONS
        </NavLink>
        <NavLink
          href="./talks"
          className="hover:text-lime-400 text-lg font-bold font-spaceGrotesk lg:pr-20"
        >
          TALKS
        </NavLink>
      </div>
    </footer>
  );
}

export default Footer;
