// import "./styles.css";
import { Link } from "react-router-dom";
// import { ContactInfo } from "./rajat/contact";
export default function Footer() {
  return (
    <div>


      <div className="bg-zinc-900 ">

        <footer className="container mx-auto px-3 text-white flex justify-center  pb-5 flex-col lg:flex-row gap-1 lg:gap-3">

          <a href="tel:+917306266971">
            <div>
              <div className="contact-container mt-3 transition-all duration-300 flex  bg-zinc-800 px-5 py-5 rounded-md hover:bg-white hover:text-black">
                <div className="contact-icon px-3 pb-2 pt-2 border-white/20 border-solid border-2 rounded-xl mr-3 " style={{ borderRadius: "500px" }}>
                  <i className="fa fa-phone" aria-hidden="true"></i>
                </div>
                <div className="contact">
                  <p></p>
                  <p className=" text-md font-semibold font-spaceGrotesk">Abin Soji (Student Co-ordinator)</p>
                  <div className="  pr-2  flex  flex-row">
                    <p className="text-sm font-spaceGrotesk">7306266971 &nbsp;</p>

                  </div>
                </div>
              </div>
            </div>
          </a>

          <a href="tel:+919447227844">
            <div>
              <div className="contact-container mt-3 transition-all duration-300 flex   bg-zinc-800 px-5 py-5 rounded-md hover:bg-white hover:text-black">
                <div className="contact-icon px-3 pb-2 pt-2 border-white/20 border-solid border-2 rounded-xl mr-3 " style={{ borderRadius: "500px" }}>
                  <i className="fa fa-phone" aria-hidden="true"></i>
                </div>
                <div className="contact">
                  <p></p>
                  <p className=" text-md font-semibold font-spaceGrotesk">Prof. Nidheesh (Faculty Co-ordinator)</p>
                  <div className="  pr-2  flex  flex-row">
                    <p className="text-sm font-spaceGrotesk">9447227844 &nbsp;</p>

                  </div>
                </div>
              </div>
            </div>
          </a>
          <a href="tel:+919656800223">

            <div>
              <div className="contact-container mt-3 transition-all duration-300 flex  bg-zinc-800 px-5 py-5 rounded-md hover:bg-white hover:text-black">
                <div className="contact-icon px-3 pb-2 pt-2 border-white/20 border-solid border-2 rounded-xl mr-3 " style={{ borderRadius: "500px" }}>
                  <i className="fa fa-phone" aria-hidden="true"></i>
                </div>
                <div className="contact">
                  <p></p>
                  <p className=" text-md font-semibold font-spaceGrotesk">Prof. Kishore (Faculty Co-ordinator)</p>
                  <div className="  pr-2  flex  flex-row">
                    <p className="text-sm font-spaceGrotesk">9656800223 &nbsp;</p>

                  </div>
                </div>
              </div>
            </div>
          </a>
          <a href="tel:+919645072186">
            <div>
              <div className="contact-container mt-3 transition-all duration-300 flex  bg-zinc-800 px-5 py-5 rounded-md hover:bg-white hover:text-black">
                <div className="contact-icon px-3 pb-2 pt-2 border-white/20 border-solid border-2 rounded-xl mr-3 " style={{ borderRadius: "500px" }}>
                  <i className="fa fa-phone" aria-hidden="true"></i>
                </div>
                <div className="contact">
                  <p></p>
                  <p className=" text-md font-semibold font-spaceGrotesk">Rajat Mathew (Technical Support)</p>
                  <div className="  pr-2  flex  flex-row">
                    <p className="text-sm font-spaceGrotesk">9645072186 &nbsp;</p>

                  </div>
                </div>
              </div>
            </div>
          </a>
        </footer>
      </div>

      <footer className="bg-[#1b1b1b] font-spaceGrotesk">
        <div className="mx-auto p-5 pt-10">
          <div className="grid grid-cols-1 lg:grid-cols-6">

            <div className="lg:col-span-2 w-full p-8">
              <img className="max-w-full" src="https://res.cloudinary.com/djzshuwo1/image/upload/v1668420358/Frame_83_d7g5la.png" alt="" />
              <p className="text-white text-center">St.Joseph’s College of Engineering and Technology, Palai,<br/>
Choondacherry P.O, Palai, Kottayam 686 579, Kerala,India.</p>
<div className="mt-3 flex item-center justify-center w-full">
  <a className="bg-lime-400 hover:bg-lime-500 text-white font-bold py-2 px-4 rounded" rel="noreferrer" target="_blank" href="https://goo.gl/maps/kWNNHwpCXR9dBMp76" ><i className="fa fa-arrows"></i> Direction</a>
</div>

            </div>

            <div className="lg:col-span-1 p-10">
              <ul className="text-white/70 text-left">
                <h4 className="text-xl font-bold text-white">LINKS</h4>
                <li><Link className="text-xl transition-all duration-300 hover:text-teal-500" to="/about">ABOUT</Link></li>
                <li><Link className="text-xl transition-all duration-300 hover:text-teal-500" to="/competitions">COMPETITIONS</Link></li>
                <li><Link className="text-xl transition-all duration-300 hover:text-teal-500" to="/events">EVENTS</Link></li>
                <li><Link className="text-xl transition-all duration-300 hover:text-teal-500" to="/expo">EXHIBITIONS</Link></li>
                <li><Link className="text-xl transition-all duration-300 hover:text-teal-500" to="/workshops">WORKSHOPS</Link></li>
                {/* <li><Link className="text-xl transition-all duration-300 hover:text-teal-500" to="/patron">SPONSORSHIPS</Link></li> */}
                <li><Link className="text-xl transition-all duration-300 hover:text-teal-500" to="/team">TEAM</Link></li>
                <li><Link className="text-xl transition-all duration-300 hover:text-teal-500" to="/contact">CONTACT</Link></li>
              </ul>
            </div>

            <div className="lg:col-span-3 p-10 md:pb-5">
              <h4 className="text-xl font-bold text-white">VISION</h4>
              <p className="text-lg text-gray-300">Developing into a world-class, pace-setting institute of Engineering and Technology with distinct identity and character, meeting the goals and aspirations of the society.</p>
              <h4 className="mt-5 text-xl font-bold text-white">MISSION</h4>
              <ul className="text-lg text-gray-300">
                <li>To maintain a conducive infrastrucutre and learning environment for world-class education.</li>
                <li>To nurture a team of dedicated, competent and research-oriented faculty.</li>
                <li>To develop students with moral and ethical values, for their successful career by offering variety of programmes and services</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-full h-0.5 bg-gray-300/20 container mx-auto"></div>

        <div className="flex justify-center gap-5 py-10">
          <a href="https://instagram.com/asthra_sjcet">
            <i className="fa-brands fa-instagram text-3xl text-white transition-all duration-300 hover:text-teal-500"></i>
          </a>

          <a href="https://www.facebook.com/asthra.sjcet/">
            <i className="fa-brands fa-facebook text-3xl text-white transition-all duration-300 hover:text-teal-500"></i>
          </a>

          <a href="https://www.youtube.com/watch?v=Un7VDHwZIrI">
            <i className="fa-brands fa-youtube text-3xl text-white transition-all duration-300 hover:text-teal-500"></i>
          </a>


        </div>

        <div className="bg-teal-900">
          <p className="py-5 text-center text-white"> Made with 💗  by <a href="/team" className="font-bold text-blue-300 hover:text-blue-600">Team Asthra</a></p>
        </div>

      </footer>


    </div>
  );
}

