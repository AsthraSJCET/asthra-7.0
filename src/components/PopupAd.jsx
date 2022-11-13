import React from 'react'

export default function PopupAd() {
  return (
    <div class="font-spaceGrotesk  z-50 fixed top-0 left-0 right-0 bottom-0 flex items-center w-full h-full p-4 bg-black bg-opacity-90 overflow-y-auto">
  <div class="max-w-md w-full mx-auto bg-stones-900 bg-[#1f1f1f] rounded-xl overflow-visible">
    <div class="max-w-sm mx-auto -mt-12 pb-4 px-1 text-center">
      <div class="inline-flex items-center justify-center w-24 h-24 mb-5 bg-gray-600 rounded-full">
        <svg viewBox="0 0 175 203" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M174.881 151.94L87.4792 202.402L0.077859 151.94L0.0778664 51.018L87.4792 0.556809L174.881 51.018L174.881 151.94Z" fill="url(#paint0_radial_488_38352)"/>
<defs>
<radialGradient id="paint0_radial_488_38352" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(87.4792 101.479) rotate(-157.188) scale(121.411)">
<stop stop-color="#9EFF00"/>
<stop offset="1" stop-color="#D9D9D9"/>
</radialGradient>
</defs>
</svg>

      </div>
      <h4 class="text-4xl text-gray-100 font-semibold mb-3 text-left tracking-tight">Get all-access with AsthraPass.</h4>
      <p class="text-gray-300 font-regular text-left">With AsthraPass, you can now get access to all events (excluding workshops) for just ₹ 300! Hurry up now to save 20% on the deal!</p>
    </div>
    
    <div className="px-8 pb-8">
        <a href="#" className="text-center transition-all duration-300 hover:-translate-y-2 rounded font-spaceGrotesk text-1xl w-full inline-block py-4 bg-[#ccff00] text-black font-medium">Get your AsthraPass</a>

        </div>
                </div>
  
  
</div>
  )
}


