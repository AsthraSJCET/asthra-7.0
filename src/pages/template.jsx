import { Outlet, useLocation } from "react-router-dom";
import { useCookies } from 'react-cookie'
import { motion } from "framer-motion";
import { Intro } from "../components/extra";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import MainTabs from "../components/MainTabs";
import Events from "../components/Events";

function IndexTemplate() {
  const [cookies] = useCookies(['introViewed']);
  const { pathname } = useLocation();
  return (
    <>
      {cookies.introViewed && cookies.introViewed !== null ? <></> : <Intro />
      }
      {/* <Loader/> */}
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
export { IndexTemplate,ListPageTemplate };