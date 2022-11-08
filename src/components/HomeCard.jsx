import React, { useState } from "react";
import { Navigate } from "react-router-dom";

function HomeCard({ index, eventName, dateTime }) {
  const [navigate, setNavigate] = useState(false);

  if (navigate == true) return <Navigate to={`/workshops/${index}`} />;
  return (
    <div
      className="flex justify-center py-10 lg:px-10"
      onClick={() => {
        setNavigate(true);
      }}
    >
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
  );
}

export default HomeCard;
