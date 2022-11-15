import { Outlet, useLocation } from "react-router-dom";
import { useCookies } from 'react-cookie'
import { motion } from "framer-motion";
import { Intro } from "../components/extra";
import Footer from "../components/FooterFinal";
import Navbar from "../components/Navbar";
import MainTabs from "../components/MainTabs";
import Events from "../components/Events";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import ScrollToTop from "../lib/ScrollToTop";

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
      <ScrollToTop />
      {cookies.introViewed && cookies.introViewed !== null ? <></> : <>{intro ? <Intro /> : null}</>}
      <Navbar />
      <motion.div onclid
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
    <div className="p-5 lg:pl-20 lg:pr-20 pt-8 mx-auto bg-black">
      <MainTabs /><Events eventType={page} />
    </div>)
}
export { IndexTemplate, ListPageTemplate };