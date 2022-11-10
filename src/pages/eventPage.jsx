import { useAuth0 } from "@auth0/auth0-react";
import {useLocation} from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import React, { useEffect, useState } from "react";
import { publicAPI } from "../etc/api";



const Capture = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const search = useLocation().search;
  const code = new URLSearchParams(search).get('c');
  console.log(code);
  useEffect(() => {
    // console.log(props.eventType)
    publicAPI
      .get(`/event/${code}`)
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <>
      <Navbar />
      <div className="bg-black w-screen px-5 pt-10 lg:px-20 lg:pb-28 pb-5">
        <div>
          <div className="max-w-screen lg:px-20 md:p-8">
            <h1 className="text-5xl font-spaceGrotesk text-white font-bold pb-4 tracking-tight">
              {data.name}
            </h1>
            <hr className="pt-2 pb-5"></hr>
          </div>
          <div className="lg:px-20 py-4 font-spaceGrotesk text-white">
            <h3 className="font-bold font-mono text-2xl pb-6">DESCRIPTION</h3>
            <p className="text-white font-spaceGrotesk text-sm tracking-normal font-semibold max-w-xl">
              {data.desc}
            </p>
          </div>
          <div className="lg:px-20 py-4 font-spaceGrotesk text-white">
            <h3 className="font-bold font-mono text-2xl pb-6">RULES</h3>
            <p className="text-white font-spaceGrotesk text-sm tracking-normal font-semibold max-w-xl">
              {data.rules}
            </p>
          </div>
          <div className="lg:px-20 py-4 font-spaceGrotesk text-white">
            <h3 className="font-bold font-mono text-2xl pb-6">CONTACT</h3>
            <p className="text-white font-spaceGrotesk text-sm tracking-normal font-semibold max-w-xl">
              {data.cordinator1_contact}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Capture;