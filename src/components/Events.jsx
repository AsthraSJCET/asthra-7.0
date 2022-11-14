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

  return (
    <>
      {loading ? <div className="text-white">Loading...<Loader/> </div> : <>{
        error ? <div className="text-white">An error occured</div> :
          <motion.div 
          variants={container}
          initial="hidden"
          animate="visible" 
          className="bg-black grid grid-rows-2 items-stretch lg:grid-cols-3 home-cards-container">
            {data.map((data, key) => {
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
          </motion.div>
      }
      </>
      }
    </>
  );
}

export default Events;