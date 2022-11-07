import React from "react";
import { Outlet } from "react-router-dom";
import HomeCard from "../components/HomeCard";
import MainCard from "../components/MainCard";
import MainTabs from "../components/MainTabs";
import "../stylesheets/index.css";

function Home() {
  return (
    <div className="px-5 lg:px-20 py-5 bg-black">
      <MainTabs />
      <Outlet />
    </div>
  );
}

const jsonData = {
  workshop: [
    { eventName: "BUILDING BLOCKS", dateTime: "Dec2,9AM" },
    { eventName: "BUILDING BLOCKS", dateTime: "Dec2,10AM" },
    { eventName: "BUILDING BLOCKS", dateTime: "Dec2,9AM" },
    { eventName: "BUILDING BLOCKS", dateTime: "Dec2,10AM" },
  ],
  competitions: [
    { eventName: "C1", dateTime: "Dec2,9AM" },
    { eventName: "C2", dateTime: "Dec2,10AM" },
    { eventName: "C3", dateTime: "Dec2,9AM" },
    { eventName: "C4", dateTime: "Dec2,10AM" },
  ],
};

function Events(eventType) {
  return (
    <div className="bg-black grid grid-rows-4 lg:grid-cols-2">
      {Object.entries(jsonData.workshop).map((data, key) => {
        return (
          <HomeCard
            key={key}
            eventName={data[1].eventName}
            dateTime={data[1].dateTime}
          />
        );
      })}
    </div>
  );
}
export { Home, Events };
