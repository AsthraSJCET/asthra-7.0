import React from "react";

function HomeCard({ eventName, dateTime }) {
  return (
    <div className="flex justify-center py-10">
      <div className="lg shadow-lg bg-white cursor-pointer">
        <a href="">
          <img
            src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
            alt=""
          />
        </a>
        <div className="p-6">
          <h1 className="text-black text-3xl font-semibold mb-2">
            {eventName}
          </h1>
          <h5 className="text-black mb-4">{dateTime}</h5>
        </div>
      </div>
    </div>
  );
}

export default HomeCard;
