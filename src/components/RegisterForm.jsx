import React, { useContext, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useParams } from "react-router-dom";
import { publicAPI } from "../etc/api";
import { AsthraContext } from "../etc/context";

function RegisterForm({ price }) {
  const [data, setData] = useState({
    email: '',
    college: "",
    phone: "",
    name: ""
  })
  let context = useContext(AsthraContext);
  let [loading, setLoading] = useState(true);
  let [error, setError] = useState(false);
  const { code } = useParams()
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();
  useEffect(() => {
    setLoading(true)
    let _data = JSON.stringify({
      "email": context.user.email
    });
    publicAPI.post("/get-user", _data)
      .then((response) => {
        setData(response.data);
        setLoading(false);
        setError(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
        console.log(error);
      });
  }, [context])

  if (isAuthenticated) {
    return (
      <>
        {loading || isLoading ? <div className="h-screen text-white">Loading...</div> : <>{
          error ? <div className="text-white">An error occured</div> :
            <form action={`https://asthra.azba.in/_api/register/${code}`} method={"post"} target="windowName" onSubmit={
              (e) => {
                window.open(e.target.action, e.target, '...attributes...');
                window.location.replace('/tickets'); return true;
              }}>
              <div className="w-full hoverflow-scroll h-screen p-4 flex items-center justify-center">
                <div className="bg-gray-900 py-10 px-10 sm:max-w-md w-full ">
                  <div className="grid grid-cols-2">
                    <div className="sm:text-3xl text-2xl font-spaceGrotesk font-bold text-white mb-12">
                      REGISTRATION
                    </div>
                  </div>
                  <div className="">
                    <div>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        defaultValue={data.name === null ? context.user.name : data.name}
                        className="focus:outline-none border-b w-full bg-gray-900 text-white border-gray-500 font-spaceGrotesk placeholder-gray-500"
                        placeholder="NAME"
                      />
                    </div>
                    <div>
                      <input
                        id="college"
                        type="text"
                        name="college"
                        defaultValue={data.college}
                        className="focus:outline-none border-b w-full pb-2 bg-gray-900 text-white border-gray-500 font-spaceGrotesk placeholder-gray-500 my-8"
                        placeholder="COLLEGE"
                      />
                    </div>
                    <div>
                      <input
                        id="phone"
                        type="phone"
                        name="phone"
                        defaultValue={data.phone}
                        className="focus:outline-none border-b w-full pb-2 bg-gray-900 text-white border-gray-500 font-spaceGrotesk placeholder-gray-500 mb-8"
                        placeholder="PHONE NO."
                      />
                    </div>
                    <div>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        defaultValue={context.user.email}
                        className="focus:outline-none border-b w-full pb-2 bg-gray-900 text-white border-gray-500 font-spaceGrotesk placeholder-gray-500 mb-8"
                        placeholder="EMAIL"
                        readOnly={true}
                      />
                    </div>
                    <div className="my-6 flex justify-center">
                      <button type='submit' className="p-3 px-8 lg:px-12 w-full bg-[#CCFF00] text-black text-lg font-bold font-spaceGrotesk">
                        Proceed to register
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
        }
        </>
        }
      </>

    );
  } else {
    return loginWithRedirect({
      authorizationParams: {
        redirect_uri: window.location.href
      }
    });
  }
}

export default RegisterForm;