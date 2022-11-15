

export default function AsthraPassBanner() {
  return (
    <div>
        <div className="flex flex-col md:flex-row bg-[#1D1D1D] p-8 font-spaceGrotesk">
    <div className="svg-img pb-4 ">
      <svg width="80" viewBox="0 0 315 363" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M314.501 272.174L157.573 362.777L0.64448 272.174L0.644501 90.9692L157.573 0.366638L314.501 90.9692L314.501 272.174Z" fill="url(#paint0_radial_429_335)" />
        <defs>
          <radialGradient id="paint0_radial_429_335" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(157.573 181.572) rotate(-157.188) scale(217.992)">
            <stop stop-color="#9EFF00" />
            <stop offset="1" stop-color="#D9D9D9" />
          </radialGradient>
        </defs>
      </svg>
    </div>
    <div className="lg:pl-10 ">
      <h1 className="text-white font-bold text-3xl tracking-tight">Get all-access with AsthraPass!</h1>
      <p className="text-gray-300 font-regular text-p mb-2">With AsthraPass, you can now get access to all department events and competitions (excluding workshops) for just ₹ 300! <br /> Hurry up before the deal ends!</p>
      <a href="/register/ASTHRA_PASS" className="text-lime-400 hover:text-lime-600 font-bold mt-6">GET YOUR ASTHRAPASS NOW
        

      </a>
    </div>
  </div>
    </div>
  )
}
