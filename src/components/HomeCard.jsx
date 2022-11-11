import { NavLink } from "react-router-dom";

function HomeCard({ index, eventName, date, time, active }) {
  let event_date = new Date(date)
  const formattedDate = event_date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
  return (
    <NavLink to={`${index}`}>
      <div className="flex justify-center py-10 lg:px-10 duration-700 hover:scale-105">
        <div className="lg shadow-lg bg-gradient-to-br from-blue-500 via-violet-500  to-green-400 p-1 cursor-pointer">
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
              {(active ? "active": "registration closed")}
            </p>

          </div>
        </div>
      </div>
    </NavLink>
  );
}

export default HomeCard;