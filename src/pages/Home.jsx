import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import MainTabs from "../components/MainTabs";
import Navbar from "../components/Navbar";
import SpreadCard from "../components/SpreadCard";
import "../stylesheets/index.css";


function Home() {
  return (
    <>
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