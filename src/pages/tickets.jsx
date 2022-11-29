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
import { exportComponentAsPNG } from "react-component-export-image";
import Loader from "../lib/Loader";

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
    this.componentRef = React.createRef();
    this.load_data = this.load_data.bind(this);
    this.state = {
      tickets: [],
      loading: false,
    };
  }

  updateState(value) {
    this.setState({ loading: value });
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
          // Authorization: "mohammedyasim.edkm@gmail.com",
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
      <div className="flex flex-wrap justify-center gap-10">
        {this.state.tickets.map((ticket) => {
          console.log(ticket);
          return this.state.loading ? (
            <div>
              <Loader />
            </div>
          ) : (
            <div className="">
              <div ref={this.componentRef}>
                <div
                  className="bg-[#CCFF00] rounded-t-lg lg:w-96 md:w-96 w-80 pt-12"
                  style={{ border: "none" }}
                ></div>
                <div
                  className="hex-wrapper lg:w-96 md:w-96 w-80 z-0 grid px-4 pb-2"
                  style={{ border: "none" }}
                >
                  <div
                    className="hex z-10 rounded-md shadow-xl"
                    style={{
                      background: `url('${this.context.user.picture}')`,
                      backgroundSize: "100%",
                    }}
                  ></div>
                </div>
                <div className="lg:w-96 md:w-96 w-80 p-4 bg-zinc-800 border-none">
                  <h2 className="text-[#CCFF00] font-extrabold font-spaceGrotesk text-xl lg:text-xl">
                    {ticket.event_code} #{ticket.id}
                    <span className="text-zinc-400">
                      &nbsp;{ticket.u_id.slice(0, 4)}
                    </span>
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
                  <div className="flex justify-between">
                    <div className="h-20">
                      <img
                        alt="logo"
                        src="https://res.cloudinary.com/djzshuwo1/image/upload/v1668420358/Frame_83_d7g5la.png"
                      />
                    </div>
                    <div className="bg-white flex items-center justify-center p-1">
                      <QRCode
                        value={ticket.u_id}
                        size={75}
                        level="L"
                        className=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="mt-3 text-center transition-all duration-300 hover:-translate-y-2 rounded font-spaceGrotesk text-1xl  inline-block py-4 bg-white font-medium lg:w-96 md:w-96 w-80"
                onClick={async () => {
                  this.updateState(true);
                  return exportComponentAsPNG(this.componentRef, {
                    fileName: `${ticket.id}_${ticket.event_name}`,
                  }).then(() => {
                    this.updateState(false);
                    console.log(this.state.loading);
                  });
                }}
              >
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
      <div className="container m-auto p-5">
        {/* <h2 className="text-2-lg text-white">Your Tickets</h2> */}
        <AllTickets />
      </div>
    </>
  );
}

export default MyTickets;
