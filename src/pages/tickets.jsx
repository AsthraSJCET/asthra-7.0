import { useState, useContext, useEffect } from "react";
import { AsthraContext } from "../etc/context";
import { publicAPI } from "../etc/api";
import Ticket from "../components/Ticket"
import Loader from "../lib/Loader";

function MyTickets() {
    let [data, setData] = useState([]);
    let [loading, setLoading] = useState(true);
    let [error, setError] = useState(false);
    const context_ = useContext(AsthraContext);
    console.log(error, loading)


    useEffect(() => {
        setLoading(true)
        publicAPI
            .get(`/events/workshop`)
            .then((response) => {
                setData(response.data);
                setLoading(false)
            })
            .catch((e) => {
                setLoading(false)
                setError(e)
                console.log(e);
            });

    }, []);

    return (
        <>
            {loading ? <div className="text-white">Loading...<Loader /> </div> : <>{
                error ? <div className="text-white">An error occured</div> :
                    <div className="grid grid-cols-2 align-center">
                        {data.map((data, key) => {
                            return (<div className="m-8 max-w-md"><Ticket data={data} user_data={context_} /></div>)
                        })}
                    </div>}
            </>
            }

        </>
    )
}


export default MyTickets