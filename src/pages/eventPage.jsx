import { useAuth0 } from "@auth0/auth0-react";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import React, { useEffect, useState } from "react";
import { publicAPI } from "../etc/api";
import RegisterForm from "../components/RegisterForm";
import Ticket from "../components/Ticket"
import { useCookies } from 'react-cookie'
import Hidden from "../components/hiddenForm"



const Capture = () => {
  const { user, isAuthenticated, loginWithRedirect } = useAuth0();
  const [data, setData] = useState([])
  const [postData, setPostData] = useState({})
  const [isRegistered, setRegistered] = useState(true)
  const search = useLocation().search;
  const code = new URLSearchParams(search).get("c");

  const [cookies, setCookie] = useCookies(['introViewed'])


  useEffect(() => {
    console.log("Loaded, viewed")
    setCookie('introViewed', true)
  })


  useEffect(() => {
    if (isAuthenticated) {
      // console.log(user)
      var _data = JSON.stringify({
        "email": user.email
      });
      var config = {
        method: 'post',
        url: '/get-user',
        headers: {
          'Content-Type': 'application/json'
        },
        data: _data
      };

      publicAPI(config)
        .then(function (response) {
          let resp = response.data
          // console.log(resp)
          if (resp.college === null && resp.phone === null) {
            setRegistered(false)
            console.log(resp)
          }
          else if (resp.college !== null && resp.phone !== null) {
            setRegistered(true)
            setPostData(resp)
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, [isAuthenticated, user])

  useEffect(() => {
    publicAPI
      .get(`/event/${code}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [code]);


  const rules_formatted = String(data.rules);
  const rules = typeof rules_formatted === "string" ? rules_formatted.split(';') : ""


  return (
    <>
      <Navbar />
      {isRegistered ? <></> : <RegisterForm />}
      <div className="bg-black w-screen px-5 pt-10 lg:px-20 lg:pb-28 pb-5">
        <div>
          <div className="max-w-screen lg:px-20 md:p-8">
            <h1 className={"text-5xl font-spaceGrotesk text-white font-bold pb-4 tracking-tight"}>
              {data.name} {data.active ? "" : ` (Registration closed)`}
            </h1>
            <hr className="bg-white mb-4" />
          </div>
          <div className="grid lg:grid-cols-2 grid-rows">
            <div className="">
              <div className="lg:px-20 py-4 font-spaceGrotesk text-white">
                <Hidden name={postData.name} college={postData.college} phone={postData.phone} email={postData.phone} price={data.event_price} code={code} />

                <p className="text-white mx-4 my-1 font-spaceGrotesk  mb-3">
                  Seats left:&nbsp;
                  <span className=" text-[#CCFF00] text-xl font-bold">{data.event_seat - data.event_sold}</span>
                </p>
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
                <div className="px-4 text-white font-spaceGrotesk text-sm tracking-normal font-semibold max-w-xl">
                  {rules.map((rules, key) => (
                    <p key={key}>{key + 1}. {rules} </p>
                  ))}
                </div>
              </div>
              <div className="lg:px-20 py-4 font-spaceGrotesk text-white">
                <h3 className="font-bold font-mono text-2xl pb-6">CONTACT</h3>
                {/* <p className="px-4 text-white font-spaceGrotesk text-sm tracking-normal font-semibold max-w-xl">
            </p> */}
                <div className="px-4">

                  <p className=" text-md font-semibold font-spaceGrotesk">{data.cordinator1_name}</p>
                  <div className=" px-2 flex text-white/60 flex-row"><p className="text-sm font-spaceGrotesk">{data.cordinator1_contact} &nbsp;</p>
                    <p className="text-sm pb-1 font-spaceGrotesk">{data.cordinator1_email}</p></div>

                  <p className=" text-md font-semibold font-spaceGrotesk">{data.cordinator2_name}</p>
                  <div className=" px-2 flex text-white/60 flex-row"><p className="text-sm font-spaceGrotesk">{data.cordinator2_contact} &nbsp;</p>
                    <p className="text-sm pb-1 font-spaceGrotesk">{data.cordinator2_email}</p></div>

                  <p className=" text-md font-semibold font-spaceGrotesk">{data.cordinator3_name}</p>
                  <div className=" px-2 flex text-white/60 flex-row"><p className="text-sm font-spaceGrotesk">{data.cordinator3_contact} &nbsp;</p>
                    <p className="text-sm pb-1 font-spaceGrotesk">{data.cordinator3_email}</p></div>
                </div>
              </div>
            </div>
            <Ticket UserName={isAuthenticated ? user.name : ""} EventName={data.name} Date={data.date} Time={data.time} Venue={data.venue} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Capture;
