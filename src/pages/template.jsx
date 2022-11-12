import { Outlet } from "react-router-dom";
import { Intro } from "../components/extra";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useCookies } from 'react-cookie'
// import Loader from "../components/loader";


function IndexTemplate() {
  const [cookies, setCookie] = useCookies(['introViewed'])
  return (
    <>
      {cookies.introViewed && cookies.introViewed !== null ? <></> : <Intro />
      }
      {/* <Loader/> */}
      <Navbar />
      <div className="px-5 lg:px-20 py-5 max-w-8xl justify-center bg-black">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
export { IndexTemplate };