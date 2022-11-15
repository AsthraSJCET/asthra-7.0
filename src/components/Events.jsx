import React, { useEffect, useState } from "react";
import { publicAPI } from "../etc/api";
import HomeCard from "../components/HomeCard";
import { motion } from "framer-motion";
import Loader from "../lib/Loader";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1
    }
  }
};

function Events(props) {
  let [data, setData] = useState([]);
  let [loading, setLoading] = useState(true);
  let [error, setError] = useState(false);

  let [deptfilter, setDeptfilter] = useState('');

  useEffect(() => {
    setLoading(true)
    publicAPI
      .get(`/events/${props.eventType}`)
      .then((response) => {
        setData(response.data);
        setLoading(false)
      })
      .catch((e) => {
        setLoading(false)
        setError(e)
        console.log(e);
      });

  }, [props.eventType]);

  const changeDeptFilter = (e) => { setDeptfilter(e.target.value) };
  return (
    <>
      {loading ? <div className="text-white">Loading...<Loader /> </div> : <>{
        error ? <div className="text-white">An error occured</div> :
          <>
            <div className="flex p-1">
              <select value={deptfilter} onChange={changeDeptFilter}
                className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">ALL Departments Events</option>
                <option value="MEC">Mechaura</option>
                <option value="RAD">Radiance </option>
                <option value="AAK">Aakrti</option>
                <option value="SPE">Spectra </option>
                <option value="EME">Emerge</option>
                <option value="YAN">Yanthrika</option>
                <option value="AZT">Aztec Allure</option>
                <option value="CRE">Creedorian </option>
                <option value="TRI">Trilok</option>
                <option value="FEN">Fenstra</option>
              </select>
            </div>
            <motion.div
              variants={container}
              initial="hidden"
              animate="visible"
              className="bg-black grid grid-rows-2 items-stretch lg:grid-cols-3 home-cards-container">
              {data.filter(event => {
                if (deptfilter !== '') {
                  return event.code.substring(3, 6) === deptfilter
                }
                return event
              }).map((data, key) => {
                return (
                  <HomeCard
                    key={key}
                    data={data}
                    index={`/${props.eventType}/${data.code}`}
                    eventName={data.name}
                    date={data.date_time}
                    time={data.time}
                    active={data.status}
                    suspended={data.suspended}
                  />
                );
              })}
            </motion.div></>
      }
      </>
      }
    </>
  );
}

export default Events;