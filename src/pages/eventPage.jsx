import { NavLink, useParams } from "react-router-dom";
import React, { useEffect, useState, useContext } from "react";
import { publicAPI } from "../etc/api";
import TicketAsthraPassInitial from "../components/TicketAsthraPassInitial"
import { useCookies } from 'react-cookie'
import { ChevronDoubleRightIcon } from '@heroicons/react/24/solid'
import { AsthraContext } from "../etc/context";
import Loader from "../lib/Loader";


const Capture = () => {
  let [loading, setLoading] = useState(true);
  let [error, setError] = useState(false);
  let [data, setData] = useState([])
  const context_ = useContext(AsthraContext);
  const { code } = useParams()
  const [cookies, setCookie] = useCookies(['introViewed']);

  useEffect(() => {
    setCookie('introViewed', true);
    console.log(cookies);
    publicAPI.get(`/event/${code}`)
      .then((response) => {
        setData(response.data);
        setLoading(false)
      })
      .catch((e) => {
        setLoading(false);
        setError(e);
        console.log(e);
      });
  }, [code, setCookie, cookies]);
  const rules_formatted = String(data.rules);
  const rules = typeof rules_formatted === "string" ? rules_formatted.split(';') : ""
  return (
    <>
      {loading ? <div className="h-screen text-white">Loading... <Loader/> </div> : <>{
        error ? <div className="text-white">An error occured</div> :
          <div>
            <div className="max-w-screen lg:px-20 md:p-8">
              <div className="flex justify-between flex-row">
                <h1 className={"lg:text-5xl text-3xl font-spaceGrotesk text-white font-bold pb-4 tracking-tight"}>
                  {data.name} {data.active ? "" : ` (Registration closed)`}
                </h1>
                <p className="lg:text-5xl text-3xl font-spaceGrotesk text-[#CCFF00] font-bold pb-4 tracking-tight">
                  ₹{data.event_price}
                </p>
              </div>
              <hr className="bg-white mb-4" />
            </div>
            <div className="align-center grid lg:grid-cols-2 grid-rows">
              <div className="">
                <div className="lg:px-20 py-8 font-spaceGrotesk text-white">
                  <div className="mb-4">
                    <NavLink to={`/register/${code}`} className="font-bold p-4 text-black bg-[#CCFF00]">
                      {(data.event_price !== 0 ? "Register Now" : "Asthra Free Pass")}
                    </NavLink>
                  </div>
                  <p className="text-white mx-4 my-1 font-spaceGrotesk mb-3">
                    Seats left:&nbsp;
                    <span className=" text-[#CCFF00] text-xl font-bold">{String(parseInt(data.event_seat) - parseInt(data.event_sold))}</span>
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
                      <div key={key} className="flex flex-row"><ChevronDoubleRightIcon className="m-1 h-3"></ChevronDoubleRightIcon><p key={key} className="mb-1">{rules} </p></div>
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
              <div className="max-w-lg">
                <Ticket UserName={context_.isAuthenticated ? context_.user.name : ""} EventName={data.name} Date={data.date} Time={data.time} Venue={data.venue} />
              </div>
            </div>
          </div>}
      </>
      }
    </>
  );
};

export default Capture;
