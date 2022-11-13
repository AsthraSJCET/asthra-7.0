import { NavLink } from "react-router-dom";

import { motion } from "framer-motion";

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

function HomeCard({ index, eventName, date, time, active, suspended }) {
  let event_date = new Date(date)
  const formattedDate = event_date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
  return (
    <motion.div variants={item}>
    <NavLink to={suspended === 0 ?`${index}`: "#"}>
      <div className="home-card flex justify-center h-full py-10 lg:px-10 ">
        <div className={"lg shadow-lg p-1 cursor-pointer duration-200 "  + (!suspended === 0 ? "bg-white/50 hover:scale-none": "bg-white hover:scale-none")}>
          {!suspended === 0? ( <div className="absolute bg-white/50 text-black p-2 ">
            Cancelled
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
    </motion.div>
  );
}

export default HomeCard;

// import { NavLink } from "react-router-dom";
 
// function HomeCard({ index, eventName, date, time }) {
//   let event_date = new Date(date)
//   const formattedDate = event_date.toLocaleDateString("en-GB", {
//     day: "numeric",
//     month: "long",
//     year: "numeric",
//   })
//   return (
//     <NavLink to={`${index}`}>
 
 
 
//       <div className="home-card flex justify-center duration-300 hover:scale-105 text-white">
//         <div className="lg shadow-lg hover:bg-stone-800 cursor-pointer">
//           <div className="bg-white relative">
//             <img className=""
//             src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
//             alt=""
//           />
//           <div className="circle h-24 w-24 bg-white/30 absolute top-1/2 left-1/2 img-hover-arrow flex justify-center items-center">
 
 
 
//           {/* <svg className="absolute top-1/2 left-1/2 arrow-hover h-12"  viewBox="0 0 21 21"  xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(3 2)"><circle cx="8.5" cy="8.5" r="8"/><path d="m9.5 11.5 3-3-3-3"/><path d="m8.5 4.5v8" transform="matrix(0 1 -1 0 17 0)"/></g></svg> */}
 
//           <svg className="absolute top-1/2 left-1/2 arrow-hover h-12"  viewBox="0 0 21 21"  xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(6 6)"><path d="m8.5 7.5v-7h-7"/><path d="m8.5.5-8 8"/></g></svg>
 
//           </div>
//           </div>
 
//           <div className="pt-3 pl-3">
//             <h1 className=" text-3xl font-bold mb-2 font-spaceGrotesk up">
//               {eventName}
//             </h1>
//             <h5 className=" font-semibold mb-4 font-spaceGrotesk">
//               {formattedDate}
//             </h5>
//             <h6 className=" font-semibold mb-4 font-spaceGrotesk">
//               {time}
//             </h6>
//           </div>
//         </div>
//       </div>
 
//     </NavLink>
//   );
// }
 
// export default HomeCard;