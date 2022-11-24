// import { useState, useEffect } from "react";
// // import { AsthraContext } from "../etc/context";
// import { publicAPI } from "../etc/api";
// // import Ticket from "../components/Ticket"
// import Loader from "../lib/Loader";

import React from "react"
import { publicAPI } from "../etc/api";
import ScrollToTop from "../lib/ScrollToTop"

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
    constructor(props) {
        super(props);
        this.load_data = this.load_data.bind(this);
        this.state = {
            tickets: []
        }
    }
    componentDidMount(){
        this.load_data();
    }
    load_data = () => {
        publicAPI.get('/my-ticket', {
            headers: {
                // 'Authorization': this.props.data.user.email,
                'Authorization': 'mohammedyasim.edkm@gmail.com',
                'Cache-Control': 'no-cache',
                'Pragma': 'no-cache',
                'Expires': '0',
            }
        }).then(response => {
            this.setState({ tickets: response.data })
        }).catch(e => {
            console.log(e);
        })
    }
    render() {
        return (<>
            {this.state.tickets.map((ticket) => { 
                return (<>
                {JSON.stringify(ticket)}
                {/* //PASS THIS Data */}
                </>)
                 })}
        </>)
    }
}


function MyTickets() {
    return (<>
        <ScrollToTop />
        <div className="container m-auto p-5">
            <h2 className="text-2-lg text-white">Your Tickets</h2>
            <AllTickets />
        </div>
    </>)
}

export default MyTickets