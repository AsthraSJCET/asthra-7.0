// import "./styles.css";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div>
      <footer className="bg-zinc-900 font-spaceGrotesk">
        <div className="mx-auto p-5 pt-10">
          <div className="grid grid-cols-1 lg:grid-cols-6">

            <div className="lg:col-span-2 w-full p-8">
              <img className="max-w-full" src="https://res.cloudinary.com/djzshuwo1/image/upload/v1668420358/Frame_83_d7g5la.png" alt="" />
              <p className="text-white">Asthra is the annual technical festival of St. Joseph's College of Engineering and Technology, Palai. With an annual footfall of more than 5,000 visitors and participants, Asthra is one of the biggest inter-college fests in Kerala. Asthra will keep you engrossed in a plethora of professional shows, competitions, lectures and workshops that have a lot to offer to everybody.</p>
            </div>

            <div className="lg:col-span-1 p-10">
              <ul className="text-white/70 text-left">
                <h4 className="text-xl font-bold text-white">LINKS</h4>
                <li><Link className="text-xl hover:text-gray-300" to="/about">ABOUT</Link></li>
                <li><Link className="text-xl hover:text-gray-300" to="/competitions">COMPETITIONS</Link></li>
                <li><Link className="text-xl hover:text-gray-300" to="/events">EVENTS</Link></li>
                <li><Link className="text-xl hover:text-gray-300" to="/expo">EXHIBITIONS</Link></li>
                <li><Link className="text-xl hover:text-gray-300" to="/workshops">WORKSHOPS</Link></li>
                <li><Link className="text-xl hover:text-gray-300" to="/patron">SPONSORSHIPS</Link></li>
                <li><Link className="text-xl hover:text-gray-300" to="/team">TEAM</Link></li>
                <li><Link className="text-xl hover:text-gray-300" to="/contact">CONTACT</Link></li>
              </ul>
            </div>

            <div className="lg:col-span-3 p-10 md:pb-5">
              <h4 className="text-xl font-bold text-white">VISION</h4>
              <p className="text-lg text-gray-300">Developing into a world-className, pace-setting institute of Engineering and Technology with distinct identity and character, meeting the goals and aspirations of the society.</p>
              <h4 className="mt-5 text-xl font-bold text-white">MISSION</h4>
              <ul className="text-lg text-gray-300">
                <li>To maintain a conducive infrastrucutre and learning environment for world-className education.</li>
                <li>To nurture a team of dedicated, competent and research-oriented faculty.</li>
                <li>To develop students with moral and ethical values, for their successful career by offering variety of programmes and services</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-3 py-5">
          <a href="https://instagram.com/asthra_sjcet">
            <i className="fa-brands fa-instagram text-xl text-white transition-all duration-300 hover:text-teal-500"></i>
          </a>

          <a href="https://instagram.com/asthra_sjcet">
            <i className="fa-brands fa-facebook text-xl text-white transition-all duration-300 hover:text-teal-500"></i>
          </a>

          <a href="https://instagram.com/asthra_sjcet">
            <i className="fa-brands fa-youtube text-xl text-white transition-all duration-300 hover:text-teal-500"></i>
          </a>

          <a href="https://instagram.com/asthra_sjcet">
            <i className="fa-brands fa-linkedin text-xl text-white transition-all duration-300 hover:text-teal-500"></i>
          </a>
        </div>

        <div className="bg-teal-900">
          <p className="py-3 text-center text-white"> Made with 💗  by <a href="/" className="font-bold text-blue-300 hover:text-black">Team Asthra</a></p>
        </div>

      </footer>


    </div>
  );
}

