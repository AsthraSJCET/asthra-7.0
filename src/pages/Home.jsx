import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Intro } from "../components/extra";
import Footer from "../components/Footer";
import MainTabs from "../components/MainTabs";
import Navbar from "../components/Navbar";
import SpreadCard from "../components/SpreadCard";
import { useCookies } from 'react-cookie'
import "../stylesheets/index.css";


function Home() {

  const [cookies, setCookie] = useCookies(['introViewed'])

  return (
    <>
      {cookies.introViewed && cookies.introViewed !== null ? <></> : <Intro />
      }
      <Navbar />
      <div className="px-5 lg:px-20 py-5 max-w-8xl justify-center bg-black">
        <MainTabs />
        <Outlet />
        <SpreadCard />
      </div>
      <Footer />
    </>
  );
}
export { Home };