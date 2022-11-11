import React from "react";

function Ticket({ EventName, Date, Time }) {
  return (
    <div className="mt-10 lg:mt-0">
      <div className="bg-lime-500 rounded-t-lg w-96 lg:w-auto lg:h-96 lg:mr-40 pb-10 lg:pb-0">
        <div className="px-10 pt-10">
          <h4 className="font-bold font-spaceGrotesk text-sm lg:text-md">
            WORKSHOP
          </h4>
          <h1 className="font-bold font-spaceGrotesk text-md lg:text-4xl">
            {EventName}
          </h1>
        </div>
        <div className="grid grid-cols-2">
          <div className="px-10 pt-10">
            <h4 className="font-spaceGrotesk text-sm lg:text-md">VENUE</h4>
            <h1 className="font-bold font-spaceGrotesk text-md lg:text-2xl">
              SEMINAR HALL, SJC
            </h1>
          </div>
          <div className="px-10 pt-10">
            <h4 className="font-spaceGrotesk text-sm lg:text-md">
              DATE AND TIME
            </h4>
            <h1 className="font-bold font-spaceGrotesk text-md mb-0 lg:text-2xl">
              {Date} <br />
              {Time}
            </h1>
            <br />
            <h1 className="font-bold font-spaceGrotesk mt-0 text-md lg:text-2xl"></h1>
          </div>
        </div>
        <div className="px-10 pt-10">
          <h4 className="font-spaceGrotesk text-sm lg:text-md">NAME</h4>
          <h1 className="font-bold font-spaceGrotesk text-md lg:text-2xl">
            MOHAMMED YASIM
          </h1>
        </div>
      </div>
      <div className="bg-zinc-800 rounded-b-lg h-40 lg:mr-40">
        <div className="px-10 pt-10 grid grid-cols-2">
          <div className="grid justify-items-start">
            <img src="/images/asthra-logo.svg" className="lg:h-20 h-12" />
          </div>
          <div className="grid justify-items-end">
            <img src="/images/asthra.svg" className="lg:h-20 h-14" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ticket;
