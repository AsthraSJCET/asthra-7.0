import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import HomeCard from "../components/HomeCard";
import MainTabs from "../components/MainTabs";
import SpreadCard from "../components/SpreadCard";
import { publicAPI } from "../etc/api";
import "../stylesheets/index.css";

function Home() {
  return (
    <>
      <div className="px-5 lg:px-20 py-5 bg-black">
        <MainTabs />
        <Outlet />
        <SpreadCard />
      </div>
      <Footer />
    </>
  );
}

function Events(props) {
  let [data, setData] = useState([
    { eventName: "BUILDING BLOCKS", dateTime: "Dec2,9AM" },
    { eventName: "BUILDING BLOCKS", dateTime: "Dec2,10AM" },
    { eventName: "BUILDING BLOCKS", dateTime: "Dec2,9AM" },
    { eventName: "BUILDING BLOCKS", dateTime: "Dec2,10AM" },
  ]);
  useEffect(() => {
    publicAPI
      .get(`/event/${props.eventType}`)
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
            eventName={data.eventName}
            dateTime={data.dateTime}
          />
        );
      })}
    </div>
  );
}
export { Home, Events };
