import React from "react";

export default function Navbar({ fixed }) {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <>
            <nav className="w-screen relative flex flex-wrap items-center justify-between px-2 py-6 bg-black">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between">
                        <a
                            className="text-sm font-bold leading-relaxed inline-flex mr-4 py-2 whitespace-nowrap uppercase text-white"
                            href="#"
                        >
                            ASTHRA
                        </a>
                        <button
                            className="text-white z-10 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke={(navbarOpen? "black": "white")}
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>

                        </button>
                    </div>
                    <div
                        className={
                            "fixed p-4 top-0 left-0 right-0 transition h-screen flex flex-grow justify-left items-center bg-[#CCFF00]" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                        <ul className="flex flex-col md:text-4xl text-2xl font-spaceGrotesk">
                            {/* <li className="nav-item inline-flex">
                                <a
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                    href="#pablo"
                                >
                                    <i className="text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Share</span>
                                </a>
                            </li> */}
                            <li className="nav-item">
                                <a
                                    className="py-3 px-12 flex items-center uppercase font-bold leading-snug text-black justify-left hover:opacity-75"
                                    href="#"
                                >
                                    <i className="fab text-lg leading-lg opacity-75"></i><span className="ml-2">About</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="flex items-center py-3 px-12 bg-[#CCFF00] justify-left uppercase font-bold leading-snug text-black hover:opacity-75"
                                    href="#"
                                >
                                    <i className="text-lg leading-lg opacity-75"></i><span className="">SIGN IN</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="flex items-center py-3 px-12 bg-[#CCFF00] justify-left uppercase font-bold leading-snug text-black hover:opacity-75"
                                    href="#"
                                >
                                    <i className="text-lg leading-lg opacity-75"></i><span className="">WORKSHOPS</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="flex items-center py-3 px-12 bg-[#CCFF00] justify-left uppercase font-bold leading-snug text-black hover:opacity-75"
                                    href="#"
                                >
                                    <i className="text-lg leading-lg opacity-75"></i><span className="">TALKS</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="flex items-center py-3 px-12 bg-[#CCFF00] justify-left uppercase font-bold leading-snug text-black hover:opacity-75"
                                    href="#"
                                >
                                    <i className="text-lg leading-lg opacity-75"></i><span className="">COMPETITIONS</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="flex items-center py-3 px-12 bg-[#CCFF00] justify-left uppercase font-bold leading-snug text-black hover:opacity-75"
                                    href="#"
                                >
                                    <i className="text-lg leading-lg opacity-75"></i><span className="">CAMPUS AMBASSADORS</span>
                                </a>
                            </li>

                            <li className="nav-item">
                                <a
                                    className="flex items-center py-3 px-12 bg-[#CCFF00] justify-left uppercase font-bold leading-snug text-black hover:opacity-75"
                                    href="#"
                                >
                                    <i className="text-lg leading-lg opacity-75"></i><span className="">SIGN UP</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="flex items-center py-3 px-12 bg-[#CCFF00] justify-left uppercase font-bold leading-snug text-black hover:opacity-75"
                                    href="#"
                                >
                                    <i className="text-lg leading-lg opacity-75"></i><span className="">CONTACT SUPPORT</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}