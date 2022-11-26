// import { useState, useEffect } from "react";
// // import { AsthraContext } from "../etc/context";
// import { publicAPI } from "../etc/api";
// // import Ticket from "../components/Ticket"
// import Loader from "../lib/Loader";

import React from "react";
import { publicAPI } from "../etc/api";
import ScrollToTop from "../lib/ScrollToTop";
import QRCode from "react-qr-code";
import "../stylesheets/tickets.css";
import { AsthraContext } from "../etc/context";

// function MyTickets() {
//     let [data, setData] = useState([]);
//     let [loading, setLoading] = useState(true);
//     let [error, setError] = useState(false);
//     // const context_ = useContext(AsthraContext);
//     console.log(error, loading)

//     useEffect(() => {
//         setLoading(true)
//         publicAPI
//             .get(`/events/workshop`)
//             .then((response) => {
//                 setData(response.data);
//                 setLoading(false)
//                 console.log(data);
//             })
//             .catch((e) => {
//                 setLoading(false)
//                 setError(e)
//                 console.log(e);
//             });

//     }, [data,setData,setError,setLoading]);

//     return (
//         <>
//             {loading ? <div className="text-white">Loading...<Loader /> </div> : <>{
//                 error ? <div className="text-white">An error occured</div> :
//                     <h1>Hello Avaliable 25th Nov</h1>
//             }
//             </>
//             }

//         </>
//     )
// }

class AllTickets extends React.Component {
    static contextType = AsthraContext;
    constructor(props) {
        super(props);
        this.load_data = this.load_data.bind(this);
        this.state = {
            tickets: [],
        };
    }
    componentDidMount() {
        if (this.context.isAuthenticated) {
            this.load_data();
        }
    }
    load_data = () => {
        publicAPI
            .get("/my-ticket", {
                headers: {
                    // 'Authorization': 'mohammedyasim.edkm@gmail.com',
                    Authorization: this.context.user.email,
                    "Cache-Control": "no-cache",
                    Pragma: "no-cache",
                    Expires: "0",
                },
            })
            .then((response) => {
                this.setState({ tickets: response.data });
            })
            .catch((e) => {
                console.log(e);
            });
    };

    render() {
        return (
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                {this.state.tickets.map((ticket) => {
                    console.log(ticket);
                    return (
                        <div className="grid lg:justify-items-center">
                            {JSON.stringify(ticket)}
                            {
                                <>
                                    <div className="bg-[#CCFF00] rounded-t-lg lg:w-96 w-80 pt-20"></div>
                                    <div className="hex-wrapper lg:w-96 w-80 z-0 grid justify-center">
                                        <div className="hex z-10" style={{ background: `url('${this.context.user.picture}')`,backgroundSize:'100%' }}></div>
                                    </div>
                                    <div className="lg:w-96 w-80 p-4 bg-zinc-800">
                                        <h2 className="text-[#CCFF00] font-extrabold font-spaceGrotesk text-xl lg:text-xl">
                                            {ticket.event_code} #{ticket.id}
                                        </h2>
                                        <div className="grid justify-start">
                                            <h2 className="text-white font-medium font-spaceGrotesk text-3xl lg:text-4xl">
                                                {ticket.name}
                                            </h2>
                                        </div>
                                        <div className="grid justify-start">
                                            <h4 className="pb-20 pt-2 text-zinc-500 font-medium font-spaceGrotesk text-xl">
                                                {ticket.college}
                                            </h4>
                                        </div>
                                        <h4 className="text-zinc-500 font-semibold font-spaceGrotesk text-2xl pb-2">
                                            {ticket.event_name}
                                        </h4>
                                        <div className="grid grid-rows-1 grid-cols-2 pb-5">
                                            <div className="grid justify-items-start">
                                                <img
                                                    alt="logo"
                                                    src="images/asthra_logo_white.svg"
                                                    className="h-14"
                                                />
                                            </div>
                                            <div className="grid justify-items-end">
                                                <QRCode value={ticket.u_id} size={75} level="L" />
                                            </div>
                                        </div>
                                        <h6 className="pb-1 text-white font-light">
                                            *A valid college ID card is mandatory.
                                        </h6>
                                    </div>
                                </>
                            }
                            <button className="mt-3 text-center transition-all duration-300 hover:-translate-y-2 rounded font-spaceGrotesk text-1xl w-80 inline-block py-4 bg-white font-medium lg:w-96">
                                Download
                            </button>
                        </div>
                    );
                })}
            </div>
        );
    }
}

function MyTickets() {
    return (
        <>
            <ScrollToTop />
            <div className="container m-auto p-5 overflow-hidden">
                {/* <h2 className="text-2-lg text-white">Your Tickets</h2> */}
                <AllTickets />
            </div>
        </>
    );
}

export default MyTickets;
