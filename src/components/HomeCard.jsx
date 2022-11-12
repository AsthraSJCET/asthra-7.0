import { NavLink } from "react-router-dom";

function HomeCard({ index, eventName, date, time, active, suspended }) {
  let event_date = new Date(date)
  const formattedDate = event_date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
  // console.log(suspended)
  return (
    <NavLink to={suspended === 0 ?`${index}`: "#"}>
      <div className="flex justify-center h-full py-10 lg:px-10 ">
        <div className={"lg shadow-lg p-1 cursor-pointer duration-200 "  + (!suspended === 0 ? "bg-white/50 hover:scale-none": "bg-white hover:scale-105")}>
          {!suspended === 0? ( <div className="absolute bg-white/50 text-black p-2 ">
            Suspended
          </div>): <></>}
         
          <img className=""
            src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
            alt=""
          />
          <div className="p-6">
            <h1 className="text-black text-3xl font-bold mb-2 font-spaceGrotesk">
              {eventName}
            </h1>
            <h5 className="text-black font-semibold mb-1 font-spaceGrotesk">
              {formattedDate}
            </h5>
            <h6 className="text-black font-semibold font-spaceGrotesk">
              {time}
            </h6>
            <p className="font-sans">
              {(!active ? "Registrations open" : "Registration closed")}
            </p>

          </div>
        </div>
      </div>
    </NavLink>
  );
}

export default HomeCard;