import React from "react";
import { NavLink } from "react-router-dom";

function TicketWorkshopInitial({ data, user_data }) {
  return (
    <div className="max-w-lg">
      <div className="bg-[#CCFF00] rounded-t-lg w-full lg:mr-40 pb-10 lg:pb-0">
        <div className="pl-10 pr-10 pt-10">
          <h4 className="font-medium font-spaceGrotesk text-sm lg:text-lg text-[#5c5c5c] uppercase">
            {data.event_type}
          </h4>
          <h1 className="font-bold font-spaceGrotesk text-3xl lg:text-4xl">
            {data.name}
          </h1>
        </div>
        <div className="pl-10 pr-10 pt-5">
          <h4 className="font-spaceGrotesk font-medium text-sm lg:text-lg text-[#5c5c5c]">VENUE</h4>
          <h1 className="font-medium font-spaceGrotesk text-2xl lg:text-2xl tracking-tight">
            {data.venue}
          </h1>
        </div>
        <div className="pl-10 pr-10 pt-5 pb-5">
          <h4 className="font-spaceGrotesk text-sm lg:text-lg text-[#5c5c5c] font-medium">
            DATE AND TIME
          </h4>
          <h1 className="font-medium font-spaceGrotesk text-2xl mb-0 lg:text-2xl">
            {data.date}, &nbsp;
            {data.time}
          </h1>

          <h1 className="font-medium font-spaceGrotesk mt-0 text-md lg:text-2xl"> </h1>
        </div>
      </div>
      <div className="w-full bg-zinc-800 rounded-b-lg pb-8 lg:mr-40">
        <h1 className="text-4xl font-spaceGrotesk text-white font-medium pl-8 pt-8 max-w-sm tracking-tight">Grab your seats <br /> for ₹{data.event_price}</h1>
        <p className="pl-8 pr-8 pb-4 text-gray-300">*This event is not included with
          <NavLink to={'/'} className="text-blue-300 hover:text-blue-500 font-bold" href="#"> AsthraPass</NavLink>
        </p>

        <div className="ml-8 mr-8">
          <NavLink to={`/register/${data.code}`} className="text-center transition-all duration-300 hover:-translate-y-2 rounded font-spaceGrotesk text-1xl w-full inline-block py-4 bg-white text-black font-medium">Get your ticket
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default TicketWorkshopInitial;
