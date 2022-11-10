import { NavLink } from "react-router-dom";

function HomeCard({ index, eventName, date, time }) {
  return (
    <NavLink to={`${index}`}>
      <div className="flex justify-center py-10 lg:px-10 duration-700 hover:scale-105">
        <div className="lg shadow-lg bg-[#CCFF00] p-1 cursor-pointer">
          <img className=""
            src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
            alt=""
          />
          <div className="p-6">
            <h1 className="text-black text-3xl font-bold mb-2 font-spaceGrotesk">
              {eventName}
            </h1>
            <h5 className="text-black font-semibold mb-4 font-spaceGrotesk">
              {date}
            </h5>
            <h6 className="text-black font-semibold mb-4 font-spaceGrotesk">
              {date}
            </h6>
          </div>
        </div>
      </div>
    </NavLink>
  );
}

export default HomeCard;