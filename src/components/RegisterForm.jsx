import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuth0, User } from "@auth0/auth0-react";
import { useLocation } from "react-router-dom";
import { publicAPI } from "../etc/api";
import { useNavigate } from "react-router-dom"

function RegisterForm({ price }) {
  let navigate = useNavigate();
  const search = useLocation().search;
  const [postData, setPostData] = useState({})
  const url = new URLSearchParams(search)
  const code = url.get('c')
  const { user, isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    console.log("Loading")
  }

  useEffect(() => {
    if (isAuthenticated) {
      var _data = JSON.stringify({
        "email": user.email
      });
      var config = {
        method: 'post',
        url: '/get-user',
        headers: {
          'Content-Type': 'application/json'
        },
        data: _data
      };
  
      publicAPI(config)
        .then(function (response) {
          let resp = response.data
          setPostData(resp)
        })
        .catch(function (error) {
          console.log(error);
        });
      document.getElementById("name").value = user.name
      document.getElementById('email').value = user.email
      document.getElementById('phone').value = postData.phone
      document.getElementById('college').value = postData.college
    }
  })

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   if (isAuthenticated) {

  //     let data = {
  //       email: event.target.email.value,
  //       college: event.target.college.value,
  //       phone: event.target.phone.value,
  //       name: event.target.phone.value
  //     }
  //     publicAPI({
  //       method: 'post',
  //       url: `/register/${code}`,
  //       data: data,
  //     }).then(resp => {
  //       console.log(resp)
  //     }).catch(err => {
  //       console.log(err)
  //     });
  //   } else {
  //     console.log("No session")
  //   }
  // }
  return (
    <form action={`https://asthra.azba.in/_api/register/${code}`} method={"post"}>
      <div className="w-full hoverflow-scroll h-screen p-4 flex items-center justify-center">
        <div className="bg-gray-900 py-10 px-10 sm:max-w-md w-full ">
          <div className="grid grid-cols-2">
            <div
              className="sm:text-3xl text-2xl font-spaceGrotesk font-bold text-white mb-12"
              onClick={() => { }}
            >
              REGISTRATION
            </div>
          </div>
          <div className="">
            <div>
              <input
                id="name"
                type="text"
                name="name"
                className="focus:outline-none border-b w-full bg-gray-900 text-white border-gray-500 font-spaceGrotesk placeholder-gray-500"
                placeholder="NAME"
                readOnly={true}
              />
            </div>
            <div>
              <input
                id="college"
                type="text"
                name="college"
                className="focus:outline-none border-b w-full pb-2 bg-gray-900 text-white border-gray-500 font-spaceGrotesk placeholder-gray-500 my-8"
                placeholder="COLLEGE"
              />
            </div>
            <div>
              <input
                id="phone"
                type="phone"
                name="phone"
                className="focus:outline-none border-b w-full pb-2 bg-gray-900 text-white border-gray-500 font-spaceGrotesk placeholder-gray-500 mb-8"
                placeholder="PHONE NO."
              />
            </div>
            <div>
              <input
                id="email"
                type="email"
                name="email"
                className="focus:outline-none border-b w-full pb-2 bg-gray-900 text-white border-gray-500 font-spaceGrotesk placeholder-gray-500 mb-8"
                placeholder="EMAIL"
                readOnly={true}
              />
            </div>
            <div className="my-6 flex justify-center">
              <button type='submit' className="p-3 px-8 lg:px-12 w-full bg-[#CCFF00] text-black text-lg font-bold font-spaceGrotesk">
                Continue to Pay ₹{price}
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default RegisterForm;