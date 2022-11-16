import { NavLink } from "react-router-dom";

import { motion } from "framer-motion";

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

function HomeCard({ index, data, eventName, date, time, active, suspended }) {
  let event_date = new Date(date)
  const formattedDate = event_date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
  return (
    <motion.div variants={item}>
    <NavLink to={suspended === 0 && (parseInt(data.event_seat) - parseInt(data.event_sold)) - 0 ?`${index}`: "#"} onContextMenu={(e)=> e.preventDefault()}>
      <div className="home-card h-full pt-5 pb-5 lg:pl-5 lg:pr-5 lg:w-auto w-full duration-300 hover:scale-105 text-white " style={{width:'88vw',maxWidth:'100%'}}>

        <div className={"shadow-lg hover:bg-zinc-900  cursor-pointer"  + (!suspended === 0 ? "bg-white/50 hover:scale-none": "bg-white hover:scale-none")}>
          {!suspended === 0?( <div className="absolute bg-white/50 text-black p-2 "> Cancelled </div>): <></>}
          <div className="bg-black relative">
            <img className="m-0 p-0 w-full"
            src={`/event-images/${data.code}.png`}
            alt=""
          />
          {data.event_price === 0 ?
          <div className="absolute bottom-0 right-0 bg-white/20 tracking-tight backdrop-blur-md px-4 py-1 bglime-400 font-spaceGrotesk">
          {/* {(data.code.substring(6,7) !== "W" ? "Included with AsthraPass" : "")} */} Included with AsthraPass
          </div>
          : <div className="absolute bottom-0 right-5 rounded-t-lg bg-black/50 tracking-tight backdrop-blur px-4 py-1 !text-bglime-400 font-spaceGrotesk">₹ {data.event_price}</div>}
          <div className="circle h-24 w-24 bg-lime-400/70 absolute top-1/2 left-1/2 img-hover-arrow flex justify-center items-center">
           <svg className="absolute top-1/2 left-1/2 arrow-hover h-12"  viewBox="0 0 21 21"  xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(6 6)"><path d="m8.5 7.5v-7h-7"/><path d="m8.5.5-8 8"/></g></svg> 
          </div>
          </div>
          <div className="p-5 lg:p-6">
            <h1 className="text-white text-2xl md:text-3xl uppercase font-bold mb-2 font-spaceGrotesk md:truncate ">
              {eventName}
            </h1>
            <h5 className="text-gray-300 font-medium text-lg mb-1 font-spaceGrotesk">
              {formattedDate}, {time}
            </h5>
            
            {/* <p className="font-sans">
              {(!active ? "Registrations open" : "Registration closed")}
            </p> */}


            {data.event_price_pool !== 0 && 
            <p className="text-gray-500 text-md font-spaceGrotesk">
              Prizes worth&nbsp;₹
              {
              data.event_price_pool}
            </p>
            }

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