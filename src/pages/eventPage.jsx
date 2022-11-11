import { useAuth0 } from "@auth0/auth0-react";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import React, { useEffect, useState } from "react";
import { publicAPI } from "../etc/api";



const Capture = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const search = useLocation().search;
  const code = new URLSearchParams(search).get('c');

  useEffect(() => {
    publicAPI
      .get(`/event/${code}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const rules_formatted = data.rules;
  const rules = typeof rules_formatted === "string" ? rules_formatted.split(';') : ""


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
            <p className="px-4 text-white font-spaceGrotesk text-sm tracking-normal font-semibold max-w-xl">
              {data.desc}
            </p>
          </div>
          <div className="lg:px-20 py-4 font-spaceGrotesk text-white">
            <h3 className="font-bold font-mono text-2xl pb-6">RULES</h3>
            {/* <p className="text-white font-spaceGrotesk text-sm tracking-normal font-semibold max-w-xl">
              {data.rules}
            </p> */}
            <ul className="px-4 text-white font-spaceGrotesk text-sm tracking-normal font-semibold max-w-xl">
              {rules.map((rules, key) => (
                <li key={key}>{rules} </li>
              ))}
            </ul>
          </div>
          <div className="lg:px-20 py-4 font-spaceGrotesk text-white">
            <h3 className="font-bold font-mono text-2xl pb-6">CONTACT</h3>
            {/* <p className="px-4 text-white font-spaceGrotesk text-sm tracking-normal font-semibold max-w-xl">
            </p> */}
            <ul className="px-8" style={{ listStyleType: 'decimal' }}>
            <li>
            <p className=" text-md font-spaceGrotesk">{data.cordinator1_name}</p>
            <div className=" px-2 flex flex-row"><p className="text-sm font-spaceGrotesk">{data.cordinator1_contact} &nbsp;</p>
              <p  className="text-sm font-spaceGrotesk">{data.cordinator1_email}</p></div>
            </li>
            <li>
            <p className=" text-md font-spaceGrotesk">{data.cordinator2_name}</p>
            <div className=" px-2 flex flex-row"><p className="text-sm font-spaceGrotesk">{data.cordinator2_contact} &nbsp;</p>
              <p  className="text-sm font-spaceGrotesk">{data.cordinator2_email}</p></div>
            </li>
            <li>
            <p className=" text-md font-spaceGrotesk">{data.cordinator3_name}</p>
            <div className=" px-2 flex flex-row"><p className="text-sm font-spaceGrotesk">{data.cordinator3_contact} &nbsp;</p>
              <p  className="text-sm font-spaceGrotesk">{data.cordinator3_email}</p></div>
            </li>
            </ul>


          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Capture;