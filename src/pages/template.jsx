import { Outlet, useLocation } from "react-router-dom";
import { useCookies } from 'react-cookie'
import { motion } from "framer-motion";
import { Hero, Intro } from "../components/extra";
import Footer from "../components/FooterFinal";
import Navbar from "../components/Navbar";
import MainTabs from "../components/MainTabs";
import Events from "../components/Events";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
// import AsthraPassBanner from "../components/AsthraPassBanner";
// import ScrollToTop from "../lib/ScrollToTop";


function IndexTemplate() {
  const search = useLocation().search;
  const backend = new URLSearchParams(search).get('backend');
  const [intro, setIntro] = useState(true)
  const [cookies, setCookie] = useCookies(['introViewed']);
  const { pathname } = useLocation();
  useEffect(() => {
    if (backend && backend !== null) {
      toast.info(backend, {
        position: toast.POSITION.TOP_CENTER
      });
    }
  }, [backend])
  return (
    <>
      <ToastContainer autoClose={false} />
      {/* <ScrollToTop /> */}
      {cookies.introViewed && cookies.introViewed !== null ? <></> : <>{intro ? <Intro /> : null}</>}
      <Navbar />

      <motion.div
        key={pathname}
        onClick={() => {
          setIntro(false);
          setCookie('introViewed', true);
        }}
      >
        <Outlet />
      </motion.div>
      <Footer />
    </>
  );
}

function ListPageTemplate({ page }) {
  return (
    <><Hero />

      <div className="py-28">
        <div className="px-4 lg:px-64 sm:px-4 container mx-auto">

          <h1 className="text-white font-spaceGrotesk lg:text-2xl md:text-xl text-lg">Asthra - The national level technical fest of St. Joseph's College of Engineering and Technology, Palai, framed with a vision to explore the possibilities of tomorrow. With an annual footfall of more than 5,000+ visitors and participants, Asthra is one of the biggest inter-college fests in Kerala. With a plethora of professional shows, competitions, lectures, and workshops, Asthra will keep you engrossed in every way possible.
          </h1>
          <br />
          {/* <DaretoDance /> */}
        </div>
      </div>
      <MainTabs />
      <div className="container p-5 pt-0 mx-auto bg-black">
        <Events eventType={page} />
      </div></>)
}
export { IndexTemplate, ListPageTemplate };