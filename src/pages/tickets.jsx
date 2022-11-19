// import { useState, useEffect } from "react";
// // import { AsthraContext } from "../etc/context";
// import { publicAPI } from "../etc/api";
// // import Ticket from "../components/Ticket"
// import Loader from "../lib/Loader";

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

function MyTickets() {
    return (<>
        <ScrollToTop />
        <div className="container m-auto">
            <h1 className="text-center text-white text-6xl mt-10 mb-20 p-6">Updated Soon!</h1>
            <h1 className="text-center text-white text-2xl mt-10 mb-20 p-6"> Ticket Will Generated on week Before the Event! </h1>
        </div>
    </>)
}

export default MyTickets