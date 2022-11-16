import { NavLink } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react";


function Intro() {
    return (
        <>
            <iframe title="asthra-intro-screen" id={"intro"} style={{
                width: '100%',
                height: '100vh',
                overflow: "hidden",
                overflowY: 'scroll'
            }} frameBorder="0" allowFullScreen sandbox="allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-presentation allow-same-origin allow-scripts allow-top-navigation allow-top-navigation-by-user-activation" src="/_intro"></iframe>
        </>
    )
}

function Hero() {

    let { loginWithRedirect, isAuthenticated, user } = useAuth0();
    return (<>
        <div className="hero w-full overflow-hidden bg-no-repeat" style={{ height: "80vh", backgroundRepeat: "no-repeat" }}>
            <div className="container ml-4 lg:ml-24  h-full flex flex-col justify-center align-center mx-auto">
                <div>
                    {isAuthenticated ?
                        <p className="text-white text-xs mb-2">Welcome, <b>{user.name} </b></p> : null}
                    <h1 className="text-6xl lg:text-8xl font-bold mb-8 text-white font-spaceGrotesk">THE FUTURE IS <br /> LOOKING</h1>
                    <div className="flex">
                        <a href="#mtabs" className="  px-8 py-5 mr-2 text-black font-bold font-spaceGrotesk bg-lime-400 hover:bg-zinc-900 hover:text-white transition-all duration-300">EXPLORE</a>
                        {/* <NavLink to="#about" className="  ">REGISTER</NavLink> */}

                        {!isAuthenticated ?
                            <NavLink onClick={() =>
                                loginWithRedirect({
                                    redirect_uri: window.location.href,
                                })
                            } className=" px-8 py-5 mr-2 text-white font-bold font-spaceGrotesk bg-zinc-600 hover:bg-zinc-900 hover:text-white transition-all duration-300">REGISTER</NavLink> : <>
                            </>}

                    </div>
                </div>
            </div>
        </div>

    </>)
}

function DaretoDance() {
    return (
        <>
            <h1 className="text-white font-spaceGrotesk font-medium text-2xl uppercase my-10">Featured events</h1>
            <div className="container mx-auto flex flex-col md:flex-col items-center lg:flex-row gap-5  justify-center">

                {/* <div className=" container mx-auto mb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full -mt-12 mx-4 lg:mx-24 flex justify-center"> */}
                <div className="relative max-w-sm overflow-hidden rounded-lg shadow-lg cursor-pointer transition-all duration-500 hover:-translate-y-5">
                    <img className="object-cover w-full " src="https://images.unsplash.com/photo-1621976360623-004223992275?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1128&q=80" alt="Flower and sky" />

                    <div className="absolute top-0 w-full h-full bg-gradient-to-b from-black/0 to-black hover:to-black/70 transition-all duration-900"></div>

                    <div className="absolute bottom-0 left-0 px-6 py-4">
                        <h4 className="mb-3 text-xl font-semibold tracking-tight text-white">Dare 2 Dance</h4>
                    </div>
                </div>

                <div className="relative max-w-sm overflow-hidden rounded-lg shadow-lg cursor-pointer transition-all duration-500 hover:-translate-y-5">
                    <img className="object-cover w-full " src="https://images.unsplash.com/photo-1621976360623-004223992275?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1128&q=80" alt="Flower and sky" />


                    <div className="absolute top-0 w-full h-full bg-gradient-to-b from-black/0 to-black hover:to-black/70 transition-all duration-900"></div>



                    <div className="absolute bottom-0 left-0 px-6 py-4">
                        <h4 className="mb-3 text-xl font-semibold tracking-tight text-white">Dare 2 Dance</h4>
                    </div>
                </div>

                <div className="relative max-w-sm overflow-hidden rounded-lg shadow-lg cursor-pointer transition-all duration-500 hover:-translate-y-5">
                    <img className="object-cover w-full " src="https://images.unsplash.com/photo-1621976360623-004223992275?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1128&q=80" alt="Flower and sky" />


                    <div className="absolute top-0 w-full h-full bg-gradient-to-b from-black/0 to-black hover:to-black/70 transition-all duration-900"></div>


                    <div className="absolute bottom-0 left-0 px-6 py-4">
                        <h4 className="mb-3 text-xl font-semibold tracking-tight text-white">Dare 2 Dance</h4>
                    </div>
                </div>


            </div>
        </>
    )
}

export { Intro, Hero, DaretoDance }