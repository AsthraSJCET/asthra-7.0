import React, { useEffect, useState } from "react";
import { Home } from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Capture from "./pages/eventPage";
import Events from "./components/Events";
import Profile from "./components/profile";
import { useAuth0 } from "@auth0/auth0-react";
import {Helmet} from 'react-helmet'
import axios from "axios";
import {publicAPI} from "./etc/api"


function App() {
  const { isLoading, error } = useAuth0();
  const [data, setData] = useState([])
  const [Loading, setLoading] = useState(true)
  let eventDetails = [
    {
      name: "CAPTURE THE FLAG",
      description:
        "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publi",
      rules:
        "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley ",
      contact: "PHONE NO AND EMAIL HERE",
    },
    {
      name: "CAPTURE THE FLAG",
      description:
        "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publi",
      rules:
        "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley ",
      contact: "PHONE NO AND EMAIL HERE",
    },
  ];
  // let data = null
  
      publicAPI.get("/events/event").then(resp=>{
        console.log(resp.data[0]);
        // data = resp.data
        setLoading(false)
        setData(resp.data)
      }).catch(err=>{
        console.log(err)
      })
      return (
        {isLoading ? (<li className="nav-item">
                <NavLink
                  className="flex items-center py-3 px-12 bg-[#CCFF00] justify-left uppercase font-bold leading-snug text-black hover:opacity-75"
                >
                  <i className="text-lg leading-lg opacity-75"></i>
                  <span className="">MY WORKSHOPS</span>
                </NavLink>
              </li>) : (<></>)}
      )
  
        
  
}

export default App;
