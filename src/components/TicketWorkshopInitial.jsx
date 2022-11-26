import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function TicketWorkshopInitial({ data, user_data }) {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  return (
    <div className="max-w-lg" onContextMenu={(e) => e.preventDefault()}>
      <div className="bg-[#CCFF00] rounded-t-lg w-full lg:mr-40 pb-10 lg:pb-0">
        <div className="pl-10 pr-10 pt-10">
          <h4 className="font-medium font-spaceGrotesk text-sm lg:text-lg text-[#323232] uppercase">
            {data.event_type} <i className="text-xs"> {data.code} </i>
          </h4>
          <h2 className="font-bold font-spaceGrotesk text-3xl lg:text-4xl">
            {data.name}
          </h2>
        </div>
        <div className="pl-10 pr-10 pt-5">
          <h4 className="font-spaceGrotesk font-medium text-sm lg:text-lg text-[#323232]">
            VENUE
          </h4>
          <h2 className="font-medium font-spaceGrotesk text-2xl lg:text-2xl tracking-tight">
            {data.venue}
          </h2>
        </div>
        <div className="pl-10 pr-10 pt-5 pb-5">
          <h4 className="font-spaceGrotesk text-sm lg:text-lg text-[#323232] font-medium">
            DATE AND TIME
          </h4>
          <h2 className="font-medium font-spaceGrotesk text-2xl mb-0 lg:text-2xl">
            {data.date}, &nbsp;
            {data.time}
          </h2>
          <h2 className="font-medium font-spaceGrotesk mt-0 text-md lg:text-2xl">
            {" "}
          </h2>
        </div>
      </div>
      {data.event_price === 1 ? (
        <div className="w-full bg-zinc-800 rounded-b-lg pb-8 lg:mr-40">
          <div className="ml-8 mr-8">
            <h2 className="text-4xl font-spaceGrotesk text-white font-medium pb-2 pt-8 max-w-sm tracking-tight">
              You can register{" "}
              <span className="text-red-500"> on the spot </span>
              for this event.
            </h2>
            <p className="pr-8 pb-4 text-gray-300">
              *This event is not included with
              <NavLink
                to={"/"}
                className="text-blue-300 hover:text-blue-500 font-bold"
                href="#"
              >
                {" "}
                AsthraPass
              </NavLink>
            </p>
            <button className="text-center  rounded font-spaceGrotesk text-1xl w-full inline-block py-4 disabled bg-zinc-700 text-gray-500 font-medium">
              Register
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="w-full bg-zinc-800 rounded-b-lg pb-8 lg:mr-40">
            <h2 className="text-4xl font-spaceGrotesk text-white font-medium pl-8 pt-8 max-w-sm tracking-tight">
              Grab your seats <br /> for ₹{data.event_price}
            </h2>
            <p className="pl-8 pr-8 pb-4 text-gray-300">
              *This event is not included with
              <NavLink
                to={"/"}
                className="text-blue-300 hover:text-blue-500 font-bold"
                href="#"
              >
                {" "}
                AsthraPass
              </NavLink>
            </p>

            <div className="ml-8 mr-8">
              {data.active === 1 ? (
                <>
                  {data.event_seat !== 0 &&
                  data.event_sold >= data.event_seat ? (
                    <button className="text-center transition-all duration-300 hover:-translate-y-2 rounded font-spaceGrotesk text-1xl w-full inline-block py-4 bg-red-800 text-white font-medium">
                      Registration Closed
                    </button>
                  ) : (
                    <NavLink
                      to={isAuthenticated ? `/register/${data.code}` : null}
                      className="text-center transition-all duration-300 hover:-translate-y-2 rounded font-spaceGrotesk text-1xl w-full inline-block py-4 bg-white text-black font-medium"
                      onClick={() => {
                        if (!isAuthenticated) {
                          loginWithRedirect({
                            redirect_uri: window.location.href,
                          });
                          console.log(window.location.href);
                        }
                      }}
                    >
                      Get your ticket
                    </NavLink>
                  )}
                </>
              ) : (
                <button className="text-center transition-all duration-300 hover:-translate-y-2 rounded font-spaceGrotesk text-1xl w-full inline-block py-4 bg-white text-black font-medium">
                  Registration Closed{" "}
                </button>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default TicketWorkshopInitial;
