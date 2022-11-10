import React from "react";
import { NavLink } from "react-router-dom";

function SpreadCard() {
  return (
    <div className="mb-10 py-10 lg:mx-10 bg-fuchsia-300 grid grid-cols-1 lg:grid-cols-2">
      <h1 className="text-5xl font-bold font-spaceGrotesk pb-5 px-5 lg:pl-10">
        SPREAD <br />
        THE WORD!
      </h1>
      <div className="grid grid-rows-1">
        <h4 className="w-100 px-5 lg:pr-10 text-xl font-spaceGrotesk">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam odit
          asperiores dolores nulla recusandae sequi molestias. Rem eaque ipsam,
          totam molestias assumenda consequuntur debitis aspernatur quaerat quae
          quas ipsum, excepturi dolore nulla error, atque blanditiis unde ipsa
          voluptates veniam? Non deleniti animi iusto. Quia corrupti neque iure
          doloremque non. Assumenda!
        </h4>
        <NavLink
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          className="hover:text-white pt-5 px-5 lg:pr-10 text-2xl font-bold font-spaceGrotesk"
        >
          LEARN MORE
        </NavLink>
      </div>
    </div>
  );
}

export default SpreadCard;
