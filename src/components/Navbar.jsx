import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link, NavLink } from "react-router-dom";
import { Bars2Icon, XMarkIcon, UserCircleIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  let { isAuthenticated, logout, loginWithRedirect } = useAuth0();
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  let trigger = () => {
    setNavbarOpen(false);
  };

  return (
    <>
      <div className=" m-auto">
        <nav className="flex p-4 pb-0">
          <div className="grow">
            <Link
              to={"/"}
            >
              <img
                alt="Asthra 7.0"
                src="https://res.cloudinary.com/djzshuwo1/image/upload/v1668420358/Frame_83_d7g5la.png"
                className="h-24 lg:h-32"
              />
            </Link>
          </div>
          <div className="flex-shink flex">
            {isAuthenticated ?
              <div>
                <Link className="text-white p-3 cursor-pointer rounded outline-none focus:outline-none" to="/profile">
                  <UserCircleIcon className="h-7 text-white" /></Link>
              </div>
              : ""}
            <div >
              <button
                className={"text-sm px-4 py-2 leading-none rounded text-white border-white  mt-4 lg:mt-0" +
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
        </nav>
      </div>
      <div
        className={
          "fixed p-4 z-40 top-0 left-0 right-0 transition h-screen flex flex-grow justify-left items-center bg-[#CCFF00]" +
          (navbarOpen ? " " : " hidden")
        }
        id="example-navbar-danger"
      >
        <div className="relative w-full h-full flex items-center">
          <div className="absolute top-5 right-5">
            <button
              className={"text-sm px-4 py-2 leading-none rounded text-white border-white mt-4 lg:mt-0" +
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
          <ul className="flex flex-col md:text-4xl text-2xl font-spaceGrotesk">
            {isAuthenticated ? (
              <li className="nav-item">
                <NavLink
                  to="/tickets"
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
                to="/events"
              >
                <i className="text-lg leading-lg opacity-75"></i>
                <span className="">EVENTS</span>
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
            {/* <li className="nav-item">
              <NavLink
                onClick={trigger}
                className="flex items-center py-3 px-12 bg-[#CCFF00] justify-left uppercase font-bold leading-snug text-black hover:opacity-75"
                to="/ambassadors"
              >
                <i className="text-lg leading-lg opacity-75"></i>
                <span className="">CAMPUS AMBASSADORS</span>
              </NavLink>
            </li> */}
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
                      redirect_uri: window.location.href,
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
    </>
  );
}
