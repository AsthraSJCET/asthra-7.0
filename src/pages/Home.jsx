import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import MainTabs from "../components/MainTabs";
import Navbar from "../components/Navbar";
import RegisterForm from "../components/RegisterForm";
import SpreadCard from "../components/SpreadCard";
import "../stylesheets/index.css";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import LoginButton from "../components/loginButton";
import LogoutButton from "../components/logoutButton";


function Home() {
  return (
    <>      
    {/* <LoginButton/>
    <LogoutButton/> */}
      <Navbar />
      <div className="px-5 lg:px-20 py-5 bg-black">
        {/* <RegisterForm /> */}
        <MainTabs />
        <Outlet />
        <SpreadCard />
        {/* <RegisterForm visible={visible} close= /> */}
      </div>
      <Footer />
    </>
  );
}
export { Home };
