// import { ContactInfo } from "../components/rajat/contact";
// import Team from "./team";

import ScrollToTop from "../lib/ScrollToTop";

function Contact() {
  return (
    <>
    <ScrollToTop/>
    <div className="container my-32 mx-auto  text-white font-spaceGrotesk tracking-tight">


<div className="flex flex-col lg:flex-row gap-5 mx-4">
<div className="contact-f-half  sm:w-full md:w-1/2">
        <h1 className="text-2xl font-bold text-white">Core Student Co-ordinators</h1>
    
    <a href="tel:+917306266971">

<div>
  <div className="contact-container mt-3 transition-all duration-300 flex   bg-zinc-800 px-5 py-5 rounded-md hover:bg-white hover:text-black">
    <div className="contact-icon px-6 py-5 border-white/20 border-solid border-2 rounded-xl mr-3 " style={{ borderRadius: "500px" }}>
      <i className="fa fa-phone" aria-hidden="true"></i>
    </div>
    <div className="contact">
      <p></p>
      <p className=" text-md font-semibold font-spaceGrotesk">Abin Soji</p>
      <div className="  pr-2  flex  flex-row">
        <p className="text-sm font-spaceGrotesk">7306266971 &nbsp;</p>

      </div>
    </div>
  </div>
</div>
</a>



<a href="tel:+917034429615">

<div>
  <div className="contact-container mt-3 transition-all duration-300 flex   bg-zinc-800 px-5 py-5 rounded-md hover:bg-white hover:text-black">
    <div className="contact-icon px-6 py-5 border-white/20 border-solid border-2 rounded-xl mr-3 " style={{ borderRadius: "500px" }}>
      <i className="fa fa-phone" aria-hidden="true"></i>
    </div>
    <div className="contact">
      <p></p>
      <p className=" text-md font-semibold font-spaceGrotesk">Albin James</p>
      <div className="  pr-2  flex  flex-row">
        <p className="text-sm font-spaceGrotesk">7034429615 &nbsp;</p>

      </div>
    </div>
  </div>
</div>
</a>


</div>





<div className="contact-f-half sm:w-full md:w-1/2">
<h1 className="text-2xl font-bold text-white">Core Faculty Co-ordinators</h1>
    


    <a href="tel:+91447227844">

<div>
  <div className="contact-container mt-3 transition-all duration-300 flex   bg-zinc-800 px-5 py-5 rounded-md hover:bg-white hover:text-black">
    <div className="contact-icon px-6 py-5 border-white/20 border-solid border-2 rounded-xl mr-3 " style={{ borderRadius: "500px" }}>
      <i className="fa fa-phone" aria-hidden="true"></i>
    </div>
    <div className="contact">
      <p></p>
      <p className=" text-md font-semibold font-spaceGrotesk">Prof. Nidhish Mathew</p>
      <div className="  pr-2  flex  flex-row">
        <p className="text-sm font-spaceGrotesk">9447227844 &nbsp;</p>

      </div>
    </div>
  </div>
</div>
</a>



<a href="tel:+919656800223">

<div>
  <div className="contact-container mt-3 transition-all duration-300 flex   bg-zinc-800 px-5 py-5 rounded-md hover:bg-white hover:text-black">
    <div className="contact-icon px-6 py-5 border-white/20 border-solid border-2 rounded-xl mr-3 " style={{ borderRadius: "500px" }}>
      <i className="fa fa-phone" aria-hidden="true"></i>
    </div>
    <div className="contact">
      <p></p>
      <p className=" text-md font-semibold font-spaceGrotesk">Prof. Kishore Sebastian</p>
      <div className="  pr-2  flex  flex-row">
        <p className="text-sm font-spaceGrotesk">9656800223 &nbsp;</p>

      </div>
    </div>
  </div>
</div>
</a>



</div>
</div>


<div className="mx-4 mt-10">


<h1 className="text-2xl mb-2 -bold tracking-tight">Address</h1>
<div className="bg-zinc-800 rounded-md text-lg tracking-tight font-medium px-10 py-7">
St.Joseph’s College of Engineering and Technology, <br />
Choondacherry P.O, <br />
Palai, Kottayam 686 579, <br />
Kerala,India.
</div>
</div>

</div>





    </>
  );
}
export default Contact;
