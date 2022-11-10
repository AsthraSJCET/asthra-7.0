import React from "react";
function RegisterForm() {
  return (
    <form>
      <div className="w-full hoverflow-scroll h-screen p-4 flex items-center justify-center">
        <div className="bg-gray-900 py-6 px-10 sm:max-w-md w-full ">
          <div className="grid grid-cols-2">
            <div
              className="sm:text-3xl text-2xl font-spaceGrotesk font-bold text-white mb-12"
              onClick={() => {}}
            >
              REGISTRATION
            </div>
          </div>
          <div className="">
            <div>
              <input
                type="text"
                className="focus:outline-none border-b w-full bg-gray-900 text-white border-gray-500 font-spaceGrotesk placeholder-gray-500"
                placeholder="NAME"
              />
            </div>
            <div>
              <input
                type="email"
                className="focus:outline-none border-b w-full pb-2 bg-gray-900 text-white border-gray-500 font-spaceGrotesk placeholder-gray-500 my-8"
                placeholder="COLLEGE"
              />
            </div>
            <div>
              <input
                type="text"
                className="focus:outline-none border-b w-full pb-2 bg-gray-900 text-white border-gray-500 font-spaceGrotesk placeholder-gray-500 mb-8"
                placeholder="PHONE NO."
              />
            </div>
            <div>
              <input
                type="phone"
                className="focus:outline-none border-b w-full pb-2 bg-gray-900 text-white border-gray-500 font-spaceGrotesk placeholder-gray-500 mb-8"
                placeholder="EMAIL"
              />
            </div>
            <div className="my-6 flex justify-center">
              <button className="p-3 px-24 lg:px-36 w-100 bg-lime-600 text-black text-lg font-bold font-spaceGrotesk">
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default RegisterForm;
