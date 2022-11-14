import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from "react-router-dom";
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  let { isAuthenticated, user, logout, loginWithRedirect } = useAuth0();
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  let trigger = () => {
    setNavbarOpen(false);
  };

  return (
    <>
      <nav
        id="navbarFocus"
        className="flex flex-wrap items-center justify-between px-2 pt-5 lg:pt-10 bg-black"
      >
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between">
            <NavLink
              className="font-bold leading-relaxed inline-flex mr-4 py-2 whitespace-nowrap uppercase text-2xl text-white"
              to={"/"}
            >
              <img
                alt="Asthra 7.0"
                src="https://res.cloudinary.com/djzshuwo1/image/upload/v1668420358/Frame_83_d7g5la.png"
                className="h-20"
              />
            </NavLink>
            <div className="inline-flex">
              <p className="text-white p-4 font-sans font-light">
                {isAuthenticated ? user.given_name : ""}
              </p>
              <button
                className={
                  "text-white p-3 z-50 cursor-pointer text-xl leading-none border border-solid border-transparent rounded block outline-none focus:outline-none" +
                  (navbarOpen ? "bg-black" : "bg-transparent")
                }
                type="button"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                {navbarOpen ? (
                  <XMarkIcon className="h-7 text-black"></XMarkIcon>
                ) : (
                  <Bars2Icon className="h-7 "></Bars2Icon>
                )}
              </button>
            </div>
          </div>
          <div
            className={
              "fixed p-4 z-40 top-0 left-0 right-0 transition h-screen flex flex-grow justify-left items-center bg-[#CCFF00]" +
              (navbarOpen ? " " : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col md:text-4xl text-2xl font-spaceGrotesk">
              {isAuthenticated ? (
                <li className="nav-item">
                  <NavLink
                    to={"/tickets"}
                    onClick={trigger}
                    className="flex items-center py-3 px-12 bg-[#CCFF00] justify-left uppercase font-bold leading-snug text-black hover:opacity-75"
                  >
                    <i className="text-lg leading-lg opacity-75"></i>
                    <span className="">MY TICKETS</span>
                  </NavLink>
                </li>
              ) : (
                <></>
              )}
              <li className="nav-item">
                <NavLink
                  onClick={trigger}
                  className="py-3 px-12 flex items-center uppercase font-bold leading-snug text-black justify-left hover:opacity-75"
                  to="/about"
                >
                  <i className="fab text-lg leading-lg opacity-75"></i>
                  <span className="">About</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  onClick={trigger}
                  className="flex items-center py-3 px-12 bg-[#CCFF00] justify-left uppercase font-bold leading-snug text-black hover:opacity-75"
                  to="/workshops"
                >
                  <i className="text-lg leading-lg opacity-75"></i>
                  <span className="">WORKSHOPS</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  onClick={trigger}
                  className="flex items-center py-3 px-12 bg-[#CCFF00] justify-left uppercase font-bold leading-snug text-black hover:opacity-75"
                  to="/talks"
                >
                  <i className="text-lg leading-lg opacity-75"></i>
                  <span className="">TALKS</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  onClick={trigger}
                  className="flex items-center py-3 px-12 bg-[#CCFF00] justify-left uppercase font-bold leading-snug text-black hover:opacity-75"
                  to="/competitions"
                >
                  <i className="text-lg leading-lg opacity-75"></i>
                  <span className="">COMPETITIONS</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  onClick={trigger}
                  className="flex items-center py-3 px-12 bg-[#CCFF00] justify-left uppercase font-bold leading-snug text-black hover:opacity-75"
                  to="/ambassadors"
                >
                  <i className="text-lg leading-lg opacity-75"></i>
                  <span className="">CAMPUS AMBASSADORS</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  onClick={trigger}
                  className="flex items-center py-3 px-12 bg-[#CCFF00] justify-left uppercase font-bold leading-snug text-black hover:opacity-75"
                  to="contact"
                >
                  <i className="text-lg leading-lg opacity-75"></i>
                  <span className="">CONTACT SUPPORT</span>
                </NavLink>
              </li>
              {isAuthenticated ? (
                <li className="nav-item">
                  <NavLink
                    className="flex items-center py-3 px-12 bg-[#CCFF00] justify-left uppercase font-bold leading-snug text-black hover:opacity-75"
                    onClick={() => logout()}
                  >
                    <i className="text-lg leading-lg opacity-75"></i>
                    <span className="">LOG OUT</span>
                  </NavLink>
                </li>
              ) : (
                <li className="nav-item">
                  <NavLink
                    className="flex items-center py-3 px-12 bg-[#CCFF00] justify-left uppercase font-bold leading-snug text-black hover:opacity-75"
                    onClick={() =>
                      loginWithRedirect({
                        authorizationParams: {
                          redirect_uri: window.location.href,
                        },
                      })
                    }
                  >
                    <i className="text-lg leading-lg opacity-75"></i>
                    <span className="">SIGN IN</span>
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
