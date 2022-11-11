import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from "react-router-dom";


export default function Navbar() {
  let { isAuthenticated, user, logout, loginWithRedirect } = useAuth0();
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="z-1000 flex flex-wrap items-center justify-between px-2 pt-5 lg:pt-10 bg-black">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between">
            <NavLink
              className="font-bold leading-relaxed inline-flex mr-4 py-2 whitespace-nowrap uppercase text-2xl text-white"
              to={"/"}
            >
              <img src="/images/asthra-logo.svg" className="h-10" />

            </NavLink>
            <div className="inline-flex">
              <p className="text-white p-3 font-spaceGrotesk font-bold">{isAuthenticated ? user.given_name : ""}</p>
              <button
                className={"text-white p-3 z-50 cursor-pointer text-xl leading-none border border-solid border-transparent rounded block outline-none focus:outline-none" + (navbarOpen ? "bg-black" : "bg-transparent")}
                type="button"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke={navbarOpen ? "black" : "white"}
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M8 12h16M8"
                  />
                </svg>
              </button>
            </div>

          </div>
          <div
            className={
              "fixed p-4 z-40 top-0 left-0 right-0 transition h-screen flex flex-grow justify-left items-center bg-[#CCFF00]" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col md:text-4xl text-2xl font-spaceGrotesk">
              {isAuthenticated ? (<li className="nav-item">
                <NavLink
                  className="flex items-center py-3 px-12 bg-[#CCFF00] justify-left uppercase font-bold leading-snug text-black hover:opacity-75"
                >
                  <i className="text-lg leading-lg opacity-75"></i>
                  <span className="">MY WORKSHOPS</span>
                </NavLink>
              </li>) : (<></>)}
              <li className="nav-item">
                <NavLink
                  className="py-3 px-12 flex items-center uppercase font-bold leading-snug text-black justify-left hover:opacity-75"
                  to="/about"
                >
                  <i className="fab text-lg leading-lg opacity-75"></i>
                  <span className="">About</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="flex items-center py-3 px-12 bg-[#CCFF00] justify-left uppercase font-bold leading-snug text-black hover:opacity-75"
                  to="/workshops"
                >
                  <i className="text-lg leading-lg opacity-75"></i>
                  <span className="">WORKSHOPS</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="flex items-center py-3 px-12 bg-[#CCFF00] justify-left uppercase font-bold leading-snug text-black hover:opacity-75"
                  to="/talks"
                >
                  <i className="text-lg leading-lg opacity-75"></i>
                  <span className="">TALKS</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="flex items-center py-3 px-12 bg-[#CCFF00] justify-left uppercase font-bold leading-snug text-black hover:opacity-75"
                  to="/competitions"
                >
                  <i className="text-lg leading-lg opacity-75"></i>
                  <span className="">COMPETITIONS</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="flex items-center py-3 px-12 bg-[#CCFF00] justify-left uppercase font-bold leading-snug text-black hover:opacity-75"
                  to="/ambassadors"
                >
                  <i className="text-lg leading-lg opacity-75"></i>
                  <span className="">CAMPUS AMBASSADORS</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="flex items-center py-3 px-12 bg-[#CCFF00] justify-left uppercase font-bold leading-snug text-black hover:opacity-75"
                  to="contact"
                >
                  <i className="text-lg leading-lg opacity-75"></i>
                  <span className="">CONTACT SUPPORT</span>
                </NavLink>
              </li>
              {isAuthenticated ? (<li className="nav-item">
                <NavLink
                  className="flex items-center py-3 px-12 bg-[#CCFF00] justify-left uppercase font-bold leading-snug text-black hover:opacity-75"
                  onClick={() => logout()}
                >
                  <i className="text-lg leading-lg opacity-75"></i>
                  <span className="">LOG OUT</span>
                </NavLink>
              </li>) : (<li className="nav-item">
                <NavLink
                  className="flex items-center py-3 px-12 bg-[#CCFF00] justify-left uppercase font-bold leading-snug text-black hover:opacity-75"
                  onClick={() => loginWithRedirect()}
                >
                  <i className="text-lg leading-lg opacity-75"></i>
                  <span className="">SIGN IN</span>
                </NavLink>
              </li>)}

            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
