import { useParams } from "react-router-dom";
import React, { useEffect, useState, useContext } from "react";
import { publicAPI } from "../etc/api";
import TicketAsthraPassInitial from "../components/TicketAsthraPassInitial"
import { useCookies } from 'react-cookie'
import { ChevronDoubleRightIcon } from '@heroicons/react/24/solid'
import { AsthraContext } from "../etc/context";
import Loader from "../lib/Loader";
import TicketWorkshopInitial from "../components/TicketWorkshopInitial";
import Ticket from "../components/Ticket";
import { ContactInfo } from "../components/rajat/contact";
import ScrollToTop from "../lib/ScrollToTop";
import { Helmet } from "react-helmet";


const Capture = () => {
  let [loading, setLoading] = useState(true);
  let [error, setError] = useState(false);
  let [data, setData] = useState([]);
  const context_ = useContext(AsthraContext);
  const { code } = useParams();
  const [cookies, setCookie] = useCookies(['introViewed']);

  useEffect(() => {
    setCookie('introViewed', true);
    console.log(cookies);
    publicAPI.get(`/event/${code}`)
      .then((response) => {
        let temp_data = response.data
        temp_data['event_code'] = temp_data.code;
        if (temp_data.event_price === 0) {
          temp_data['code'] = "ASTHRA_PASS"
        }
        setData(temp_data);
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
  const tickets = context_.tickets !== null ? Object.values(context_.tickets).map(a => { return a.event_code }) : [];
  return (
    <>
      {loading ? <div className="h-screen text-white">Loading... <Loader /> </div> : <>{
        error ? <div className="text-white">An error occured</div> : <>
          <ScrollToTop />
          <Helmet>
            <title>{data.name} | Asthra 7.0</title>
          </Helmet>
          <div className="p-5 lg:pl-20 lg:pr-20 pt-8 mx-auto bg-black">
            <div className="lg:pl-20 lg:pr-20">
              <div className="flex justify-between flex-row">
                <h1 className={"lg:text-5xl text-3xl font-spaceGrotesk text-white font-bold pb-4 tracking-tight"}>
                  {data.name} {data.active ? "" : ` (Registration closed)`}
                </h1>

              </div>
              <hr className="bg-white mb-4" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-6">
              <div id="block1" className="md:col-span-3">
                <div className="lg:px-20 py-2 font-spaceGrotesk text-white">
                  <div className="mb-4">
                    {/* {data.event_price !== 0 ? <> */}
                      Event Code : {data.event_code} <br />
                    {/* </> : null} */}
                    {/* <NavLink to={(data.event_price !== 0 ? `/register/${code}` : `/register/ASTHRA_PASS`)} className="font-bold p-4 text-black bg-[#CCFF00]">
                      {(data.event_price !== 0 ? "Register Now" : "Free with Asthra Pass")}
                    </NavLink>&nbsp; */}
                    {data.event_seat !== 0 && data.event_price !== 0 ? <>
                      Seats left :&nbsp;
                      <span className=" text-[#CCFF00] text-xl font-bold">{String(parseInt(data.event_seat) - parseInt(data.event_sold))}</span>
                    </> : null}
                  </div>
                </div>
                <div className="w-full lg:pl-20 lg:pr-20  pt-4 font-spaceGrotesk text-white">
                  <img className="inline"
                    src={`/event-images/${data.event_code}.png`}
                    alt=""
                  />
                </div>
                <div className="w-full lg:pl-20 pb-4 lg:pr-20 font-spaceGrotesk text-lime-400">
                  {data.event_price_pool !== 0 &&
                    <p className="text-md font-spaceGrotesk">
                      Prizes worth&nbsp;₹
                      {
                        data.event_price_pool}
                    </p>
                  }
                </div>
                <div className="w-full lg:pl-20 lg:pr-20  py-4 font-spaceGrotesk text-white">
                  {/* <h3 className="font-bold font-mono text-2xl pb-6">DESCRIPTION</h3> */}
                  <p className=" pr-4 text-white font-spaceGrotesk text-xl tracking-tight font-semibold">
                    {data.desc}
                  </p>
                </div>
                {data.rules.length > 4 &&
                  <div className="lg:pl-20  py-4 font-spaceGrotesk text-white">
                    <h3 className="font-bold font-mono text-2xl pb-6">RULES</h3>
                    <div className="pl-4 pr-4 text-white font-spaceGrotesk text-sm tracking-normal font-semibold">
                      {rules.map((rules, key) => {
                        if (rules !== null) {
                          return (
                            <div key={key} className="flex flex-row" ><ChevronDoubleRightIcon className="m-1 h-3"></ChevronDoubleRightIcon><p key={key} className="mb-1">{rules} </p></div>
                          )
                        } else {
                          return (null)
                        }
                      })}
                    </div>
                  </div>
                }
                <div className="lg:px-20 py-4 font-spaceGrotesk text-white">
                  <h3 className="font-bold font-mono text-2xl pb-2">CONTACT</h3>

                  <div className="pr-4">
                    <ContactInfo data={data} />
                  </div>
                </div>
              </div>
              <div id="block2" className="md:col-span-3 pt-8">
                <div className="w-full flex items-center justify-center">
                  {tickets.includes(data.code) ?
                    <>
                      <Ticket data={data} user_data={context_} /></> :
                    <> {
                      data.event_price === 0 ?
                        <TicketAsthraPassInitial data={data} user_data={context_} />
                        :
                        <TicketWorkshopInitial data={data} user_data={context_} />
                    }</>}
                </div>
              </div>

            </div>
            <div>
            </div>

          </div>
        </>}
      </>
      }
    </>
  );
};

export default Capture;
