import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");
function RegisterForm() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  return (
    <div className="w-full hoverflow-scroll h-screen p-4 flex items-center justify-center">
      <div className="bg-gray-900 py-6 px-10 sm:max-w-md w-full ">
        <div className="grid grid-cols-2">
          <div
            className="sm:text-3xl text-2xl font-spaceGrotesk font-bold text-white mb-12"
            onClick={() => {}}
          >
            REGISTRATION
          </div>

          <button
            type="button"
            className="pl-24 h-7 inline-flex items-center justify-start text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">Close menu</span>
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
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
  );
}

export default RegisterForm;
