// import { ContactInfo } from "../components/rajat/contact";
// import Team from "./team";

import ScrollToTop from "../lib/ScrollToTop";

function Contact() {
  return (
    <>
      <ScrollToTop />
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
        <div className="mx-4 mt-10">
          <iframe title="Map" className="bg-zinc-800 rounded-md w-full h-96" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3932.458478967004!2d76.72617135333483!3d9.72717485230427!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc8944aaebb3ba492!2sSt.+Joseph's+College+of+Engineering+and+Technology%2C+Palai!5e0!3m2!1sen!2sin!4v1513403141725"></iframe>
        </div>
        <div className="mx-4 mt-10">
          
        </div>

      </div>





    </>
  );
}
export default Contact;
