import React, { useEffect, useState } from "react";
import { publicAPI } from "../etc/api";
import HomeCard from "../components/HomeCard";

function Events(props) {
  let [data, setData] = useState([
    { eventName: "BUILDING BLOCKS", dateTime: "Dec2,9AM" },
    { eventName: "BUILDING BLOCKS", dateTime: "Dec2,10AM" },
    { eventName: "BUILDING BLOCKS", dateTime: "Dec2,9AM" },
    { eventName: "BUILDING BLOCKS", dateTime: "Dec2,10AM" },
  ]);


  useEffect(() => {
    publicAPI
      .get(`/events/${props.eventType}`)
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [props.eventType]);
  return (
    <div className="bg-black grid grid-rows-2 lg:grid-cols-3">
      {data.map((data, key) => {
        return (
          <HomeCard
            key={key}
            index={`/${props.eventType}?c=${data.code}`}
            eventName={data.name}
            date={data.date_time}
            time={data.time}
            active={data.active}
          />
        );
      })}
    </div>
  );
}

export default Events;