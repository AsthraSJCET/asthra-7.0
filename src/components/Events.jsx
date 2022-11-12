import React, { useEffect, useState } from "react";
import { publicAPI } from "../etc/api";
import HomeCard from "../components/HomeCard";


function Events(props) {
  let [data, setData] = useState([]);
  let [loading, setLoading] = useState(false);
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
      {loading ? <div className="text-white">Loading...</div> : <>{
        error ? <div className="text-white">An error occured</div> :
          <div className="bg-black grid grid-rows-2 items-stretch lg:grid-cols-3 home-cards-container">
            {data.map((data, key) => {
              return (
                <HomeCard
                  key={key}
                  index={`/${props.eventType}/${data.code}`}
                  eventName={data.name}
                  date={data.date_time}
                  time={data.time}
                  active={data.status}
                  suspended={data.suspended}
                />
              );
            })}
          </div>
      }
      </>
      }
    </>
  );
}

export default Events;