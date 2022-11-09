import React, { useState } from "react";
import { Navigate, NavLink } from "react-router-dom";

function HomeCard({ index, eventName, dateTime }) {
  return (
    <NavLink to={`${index}`}>
      <div className="flex justify-center py-10 lg:px-10">
        <div className="lg shadow-lg bg-white cursor-pointer">
          <img
            src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
            alt=""
          />
          <div className="p-6">
            <h1 className="text-black text-3xl font-bold mb-2 font-mbf">
              {eventName}
            </h1>
            <h5 className="text-black font-semibold mb-4 font-spaceGrotesk">
              {dateTime}
            </h5>
          </div>
        </div>
      </div>
    </NavLink>
  );
}

export default HomeCard;
