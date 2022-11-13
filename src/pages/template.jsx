import { Outlet, useLocation } from "react-router-dom";
import { useCookies } from 'react-cookie'
import { motion } from "framer-motion";
import { Intro } from "../components/extra";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

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
        <div className="px-5 lg:px-20 py-5 max-w-8xl justify-center bg-black">
          <Outlet />
        </div>
      </motion.div>
      <Footer />
    </>
  );
}
export { IndexTemplate };