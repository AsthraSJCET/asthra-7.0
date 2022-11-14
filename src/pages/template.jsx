import { Outlet, useLocation } from "react-router-dom";
import { useCookies } from 'react-cookie'
import { motion } from "framer-motion";
import { Intro } from "../components/extra";
import Footer from "../components/FooterFinal";
import Navbar from "../components/Navbar";
import MainTabs from "../components/MainTabs";
import Events from "../components/Events";
import { useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';

function IndexTemplate() {
  const search = useLocation().search;
  const backend = new URLSearchParams(search).get('backend');
  const [cookies] = useCookies(['introViewed']);
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
      {cookies.introViewed && cookies.introViewed !== null ? <></> : <Intro />}
      <Navbar />
      <motion.div
        key={pathname}
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