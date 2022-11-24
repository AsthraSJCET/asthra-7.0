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

function AllEvents(props) {
  let [data, setData] = useState([]);
  let [loading, setLoading] = useState(true);
  let [error, setError] = useState(false);

  // let [typefilter, setTypefilter] = useState('');
  let [deptfilter, setDeptfilter] = useState('');


  useEffect(() => {
    setLoading(true)
    publicAPI
      .get(`event_list`)
      .then((response) => {
        setData(response.data);
        setLoading(false)
      })
      .catch((e) => {
        setLoading(false)
        setError(e)
      });

  }, [props.eventType]);

  // const changeTypeFilter = (e) => { setTypefilter(e.target.value) };
  const changeDeptFilter = (e) => { setDeptfilter(e.target.value) };

  return (
    <>
      {loading ? <div className="text-white">Loading...<Loader /> </div> : <>{
        error ? <div className="text-white">An error occured</div> : <>
          <div className="flex p-1">
            {/* <select
           className="sticky top-20 inset-x-0 inset-y-0 w-full py-5 mb-5 lg:mx-5 bg-black/70 backdrop-blur-xl z-10 text-white focus:outline-0 border-0"
            value={typefilter} onChange={changeTypeFilter}>
            <option value="">ALL TYPE</option>
            <option value="workshop">WORKSHOPS</option>
            <option value="event">EVENTS</option>
            <option value="exhibition">EXPO</option>
            <option value="competition">COMPETITIONS</option>
          </select>
            */}
            <select
              className="sticky top-20 inset-x-0 inset-y-0 w-full py-5 mb-5 lg:mx-5 bg-black/70 backdrop-blur-xl z-10 text-white focus:outline-0 border-0"
              value={deptfilter} onChange={changeDeptFilter}>
              <option value="">ALL Departments Events</option>
              <option value="MEC">Mechaura - Mechanical Engineering </option>
              <option value="RAD">Radiance - Computer Science and Engineering
              </option>
              <option value="AAK">Aakrti - Civil Engineering
              </option>
              <option value="SPE">Spectra - Electronics and Communication Engineering
              </option>
              <option value="EME">Emerge - Electrical and Electronics Engineering
              </option>
              <option value="YAN">Yanthrika - Applied Electronics and Instrumentation
              </option>
              <option value="AZT">Aztec Allure - Artificial Intelligence and Data Science
              </option>
              <option value="CRE">Pandora - Electronics and Computer Science
              </option>
              <option value="TRI">Trilok - Master of Business Administration
              </option>
              <option value="FEN">Fenstra - Master of Computer Applications
              </option>
              <option value="GEN">General
              </option>
              <option value="INF">Informal
              </option>
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
            })
              // .filter(event => {
              //   if (typefilter !== '') {
              //     return event.event_type === typefilter
              //   }
              //   return event
              // })
              .map((data, key) => {
                return (
                  <HomeCard
                    key={key}
                    data={data}
                    index={`/${data.event_type}/${data.code}`}
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

export default AllEvents;