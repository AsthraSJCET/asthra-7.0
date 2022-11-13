import React from "react";

function TicketAsthraPassInitial({ UserName, EventName, Date, Time, Venue }) {
  return (
    <div className="mt-10 md:mt-0 max-w-3xl overflow-hidden">
      <div className="bg-[#CCFF00] rounded-t-lg lg:w-auto  lg:mr-40 pb-10 lg:pb-0">
        <div className="px-10 pt-10">
          <h4 className="font-medium font-spaceGrotesk text-sm lg:text-lg text-[#5c5c5c]">
            WORKSHOP
          </h4>
          <h1 className="font-bold font-spaceGrotesk text-3xl lg:text-4xl">
            {EventName}
          </h1>
        </div>
        
          <div className="px-10 pt-5">
            <h4 className="font-spaceGrotesk font-medium text-sm lg:text-lg text-[#5c5c5c]">VENUE</h4>
            <h1 className="font-medium font-spaceGrotesk text-2xl lg:text-2xl tracking-tight">
              {Venue}
            </h1>
          </div>
          <div className="px-10 pt-5 pb-5">
            <h4 className="font-spaceGrotesk text-sm lg:text-lg text-[#5c5c5c] font-medium">
              DATE AND TIME
            </h4>
            <h1 className="font-medium font-spaceGrotesk text-2xl mb-0 lg:text-2xl">
              {Date}, &nbsp;
              {Time}
            </h1>
            
            <h1 className="font-medium font-spaceGrotesk mt-0 text-md lg:text-2xl"> </h1>
          </div>
        
        {/* <div className="px-10 pt-5 pb-5">
          <h4 className="font-spaceGrotesk text-sm lg:text-lg font-medium text-[#5c5c5c]">NAME</h4>
          <h1 className="font-medium font-spaceGrotesk text-2xl lg:text-2xl">
            {UserName}
            Mohammed Yasim
          </h1>
        </div> */}
      </div>
      <div className="bg-zinc-800 rounded-b-lg pb-8 lg:mr-40">
        {/* <div className="px-10 pt-10 grid grid-cols-2">
          <div className="grid justify-items-start">
            <img alt="" src="/images/asthra-logo.svg" className="lg:h-20 h-12" />
          </div>
          <div className="grid justify-items-end">
            <img alt="" src="/images/asthra.svg" className="lg:h-20 h-14" />
          </div>
        </div> */}
<svg className="px-8 pt-8" width="120" viewBox="0 0 175 203" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M174.881 151.94L87.4792 202.402L0.077859 151.94L0.0778664 51.018L87.4792 0.556809L174.881 51.018L174.881 151.94Z" fill="url(#paint0_radial_488_38352)"/>
<defs>
<radialGradient id="paint0_radial_488_38352" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(87.4792 101.479) rotate(-157.188) scale(121.411)">
<stop stop-color="#9EFF00"/>
<stop offset="1" stop-color="#D9D9D9"/>
</radialGradient>
</defs>
</svg>
<h1 className="text-4xl font-spaceGrotesk text-white font-medium pl-8 pt-4 max-w-sm tracking-tight">Get all-access with AsthraPass!</h1>
<p className="px-8 pt-2 pb-4 text-gray-300 text-md">With AsthraPass, you can now get access to all events (excluding workshops) for just ₹ 300! Hurry up now to save 20% on the deal!</p>
        <p className="px-8 pb-4 text-gray-300">*This event  is included with 
            <a className="text-blue-300 hover:text-blue-500 font-bold" href="#"> AsthraPass</a>
        </p>
        
        <div className="mx-8">
        <a href="#" className="text-center transition-all duration-300 hover:-translate-y-2 rounded font-spaceGrotesk text-1xl w-full inline-block py-4 bg-white text-black font-medium">Get your AsthraPass</a>

        </div>
      </div>
    </div>
  );
}

export default TicketAsthraPassInitial;
