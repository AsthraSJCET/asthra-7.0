import { Helmet } from "react-helmet";
import Footer from "../components/FooterFinal";
import Navbar from "../components/Navbar";
import ScrollToTop from "../lib/ScrollToTop";

export default function Team() {
  let coordinators = [
    {
      name: "Dr. Binoy Baby",
      image: "/team-images/binoy.jpg",
      lin_url: "",
      desig: "Faculty Co-ordinator",
    },
    {
      name: "Prof. Kishore Sebastian ",
      image: "/team-images/kishore.jpg",
      lin_url: "",
      desig: "Faculty Co-ordinator",
    },
    {
      name: "Dr. Arun P",
      image: "/team-images/arun.jpg",
      lin_url: "",
      desig: "Faculty Co-ordinator",
    },
    {
      name: "Abin Soji",
      image: "/team-images/abin_soji.jpg",
      lin_url: "",
      desig: "Student Co-ordinator",
    },
    {
      name: "Albin James",
      image: "/team-images/albin.jpg",
      lin_url: "",
      desig: "Student Co-ordinator",
    },
  ];

  let team = [
    {
      name: "Prof. Sarju S",
      image:
        "https://media-exp1.licdn.com/dms/image/D5603AQE1E85euwIiIw/profile-displayphoto-shrink_800_800/0/1668587612953?e=1674086400&v=beta&t=EUaZVS_QckTv55a756m9eFftozTGe-Zju_zomSCe-pc",
      lin_url: "https://www.linkedin.com/in/sarju-s/",
      title: "Mentor",
      git_url:"",
      behance_url:"",
      stat:"100",
    },
    {
      name: "Mohammed Yasim",
      image:
        "https://media-exp1.licdn.com/dms/image/C5603AQFsU-r1054ACw/profile-displayphoto-shrink_800_800/0/1652080194719?e=1674086400&v=beta&t=ES2I4ALM7uv1ZRaMzEZSA-baPQQmoezZu_QKgkwKnTY",
      lin_url: "https://www.linkedin.com/in/mohammed-yasim/",
      title: "Lead Developer",
      git_url:"",
      behance_url:"",
      stat:"110",
    },
    {
      name: "Rajat Mathew",
      image:
        "https://media-exp1.licdn.com/dms/image/C5603AQG8df_hh53OFw/profile-displayphoto-shrink_800_800/0/1624566009452?e=1674086400&v=beta&t=kUIAm2HJXSOSLAOWngGAxF4krrFhiOVAXOkQeiZhQtI",
      lin_url: "https://www.linkedin.com/in/rajatmathew/",
      title: "UI & FrontEnd Developer",
      git_url:"",
      behance_url:"",
      stat:"110",
    },
    {
      name: "Reenphy George",
      image:
        "https://media-exp1.licdn.com/dms/image/D5603AQHQ3YUyYM80Cg/profile-displayphoto-shrink_800_800/0/1665377805280?e=1674086400&v=beta&t=y-a4EEKAyxEfOgggKiSac0SJEmwkZCYV284fSBBsJuc",
      lin_url: "https://www.linkedin.com/in/reenphygeorge/",
      title: "FrontEnd Developer",
      git_url:"",
      behance_url:"",
      stat:"110",
    },
    {
      name: "Vishnu Nair",
      image:
        "https://media-exp1.licdn.com/dms/image/D5603AQGovWCSw1gvIw/profile-displayphoto-shrink_800_800/0/1666280429840?e=1674086400&v=beta&t=MWCA5fVveGQmuSDXnLUw6WNWY_8rtOJFKTs-wUER4cA",
      lin_url: "https://www.linkedin.com/in/vishnu-nair-p/",
      title: "Developer",
      git_url:"",
      behance_url:"",
      stat:"110",
    },
    {
      name: "Jovit Mathew",
      image:"team-images/jovit.jpg",
      lin_url: "https://www.linkedin.com/in/jovit-mathew-844590205/",
      title: "Developer",
      git_url:"",
      behance_url:"",
      stat:"110",
    },
    {
      name: "Goutham Sreeram",
      image: "/team-images/Gautham.png",
      lin_url: "https://www.github.com/Friggin-sphinx",
      title: "Developer",
      git_url:"",
      behance_url:"",
      stat:"010",
    },
    {
      name: "Tomin Joy",
      image: "/team-images/tomin.png",
      lin_url: "https://www.github.com/Tomin-Joy",
      title: "Developer",
      git_url:"",
      behance_url:"",
      stat:"110",
    },
  ];
  let mainT=[
    {
        name: "Sebin Mathew",
        title: "Volunteer lead",
        image: "main-cordt/Sebin.JPG",
        git_url: "",
        lin_url: "",
        behance_url: "",
    },
    {
        "name": "Amal Joe Paulose",
        title: "Registration desk",
        image: "main-cordt/AmalJoePaulose.jpg",
        git_url: "",
        lin_url: "",
        behance_url: "",
    },
    {
        "name": "Sreelekshmi Madhu",
        title: "Registration desk",
        image: "main-cordt/dummy.jpg",
        git_url: "",
        lin_url: "",
        behance_url: "",
    },
    {
        "name": "Chris Sebastian",
        title: "Informal Event",
        image: "main-cordt/Chris Sebastian.jpg",
        git_url: "",
        lin_url: "",
        behance_url: "",
    },
    {
        "name": "Hridhya Harikuttan",
        title: "Informal Event",
        image: "main-cordt/Hridhya.jpg",
        git_url: "",
        lin_url: "",
        behance_url: "",
    },
    {
        "name": "Anand Krishna",
        title: "Media lead",
        image: "main-cordt/Anand Krishna.jpg",
        git_url: "",
        lin_url: "",
        behance_url: "",
    },
    {
        "name": "Anju Merin Mathew",
        title: "Media lead",
        image: "main-cordt/Anju Merin.jpg",
        git_url: "",
        lin_url: "",
        behance_url: "",
    },
    {
        "name": "Rahul Suredran",
        title: "Design lead",
        image: "main-cordt/dummy.jpg",
        git_url: "",
        lin_url: "",
        behance_url: "",
    },
    {
        "name": "Anto Sebastian",
        title: "Design lead",
        image: "main-cordt/Anto Sebastian.jpg",
        git_url: "",
        lin_url: "",
        behance_url: "",
    },
    {
        "name": "Aivin Thambi",
        title: "Program lead",
        image: "main-cordt/Aivin.jpg",
        git_url: "",
        lin_url: "",
        behance_url: "",
    },
    {
        "name": "Anand Baby John",
        title: "Program lead",
        image: "main-cordt/Anand Baby.jpg",
        git_url: "",
        lin_url: "",
        behance_url: "",
    },
    {
        "name": "Jeevan Ghosh Shaji",
        title: "Stall Arrangement",
        image: "main-cordt/Jeevan Ghosh.jpg",
        git_url: "",
        lin_url: "",
        behance_url: "",
    },
    {
        "name": "Alan Tom Vincent",
        title: "Hospitality lead",
        image: "main-cordt/Alan Vincent.jpg",
        git_url: "",
        lin_url: "",
        behance_url: "",
    },
    {
        "name": "K J Raina",
        title: "Hospitality lead",
        image: "main-cordt/K J Raina.jpg",
        git_url: "",
        lin_url: "",
        behance_url: "",
    },
    {
        "name": "Anna Thomas",
        title: "Sponsorship",
        image: "main-cordt/anna.jpg",
        git_url: "",
        lin_url: "",
        behance_url: "",
    },
    {
        "name": "Justin Jiby Varghese",
        title: "General event",
        image: "main-cordt/dummy.jpg",
        git_url: "",
        lin_url: "",
        behance_url: "",
    },
    {
        "name": "Arun Alex",
        title: "Marketing and Publicity",
        image: "main-cordt/Arun.jpg",
        git_url: "",
        lin_url: "",
        behance_url: "",
    },
    {
        "name": "Rosna Joy",
        title: "Campus Ambassodor",
        image: "main-cordt/Rosna Joy.jpg",
        git_url: "",
        lin_url: "",
        behance_url: "",
    },
    {
        "name": "Zinz Criz Xavier",
        title: "Campus Ambassodor",
        image: "main-cordt/Zinz.png",
        git_url: "",
        lin_url: "",
        behance_url: "",
    },
    // {
    //     "name": "Mohammed Yasim",
    //     title: "Lead Developer",
    //     image: "main-cordt/dummy.jpg",
    //     git_url: "",
    //     lin_url: "",
    //     behance_url: "",
    // },
    // {
    //     "name": "Rajat Mathew",
    //     title: "Website and Online Event",
    //     image: "main-cordt/dummy.jpg",
    //     git_url: "",
    //     lin_url: "",
    //     behance_url: "",
    // },
    {
        "name": "Adarsh Ajith",
        title: "General Arrangement",
        image: "main-cordt/Adarsh Ajith.jpg",
        git_url: "",
        lin_url: "",
        behance_url: "",
    },
    {
        "name": "Noel Thomas",
        title: "Documentation ",
        image: "main-cordt/Noel Thomas.jpg",
        git_url: "",
        lin_url: "",
        behance_url: "",
    },
    {
        "name": "Anupama Moncy Thomas ",
        title: "Documentation ",
        image: "main-cordt/Anupama Moncy.jpg",
        git_url: "",
        lin_url: "",
        behance_url: "",
    },
    {
        "name": "Joel Jo Thomas",
        title: "Finance Lead",
        image: "main-cordt/Joel Jo.jpg",
        git_url: "",
        lin_url: "",
        behance_url: "",
    }
];
let dept=[
  {
      title: "AD",
      name: "Alan Anto",
      image: "dept-cortd/Alan Anto.jpg",
      lin_url:"",
  },
  {
      title: "AD",
      name: "Aleena Roy ",
      image: "dept-cortd/ALEENA ROY.jpg",
      lin_url:"",
  },
  {
      title: "CE",
      name: "Abhijith E S ",
      image: "dept-cortd/ABHIJITH E S.jpg",
      lin_url:"",
  },
  {
      title: "CE",
      name: "Amal Mathew",
      image: "dept-cortd/AMAL MATHEW.jpg",
      lin_url:"",
  },
  {
      title: "CSE",
      name: "Nikhil J Medackal ",
      image: "dept-cortd/NIKHIL J MEDACKAL.jpg",
      lin_url:"",
  },
  {
      title: "CSE",
      name: "Reethu Joseph",
      image: "dept-cortd/Reethu Joseph.jpg",
      lin_url:"",
  },
  {
      title: "ECE",
      name: "Esther Thankam Mathew",
      image: "dept-cortd/esther.jpg",
      lin_url:"",
  },
  {
      title: "ECE",
      name: "Joel varghese",
      image: "dept-cortd/TGOD TAZZ.jpg",
      lin_url:"",
  },
  {
      title: "ECS",
      name: "Abimanyu J",
      image: "dept-cortd/Abimanyu J.jpg",
      lin_url:"",
  },
  {
      title: "ECS",
      name: "Niya Biju Lukose ",
      image: "dept-cortd/Niya Biju Lukose.jpg",
      lin_url:"",
  },
  {
      title: "EEE",
      name: "S C SWATHIN SIVA",
      image: "dept-cortd/SWATHIN SIVA.jpg",
      lin_url:"",
  },
  {
      title: "EEE",
      name: "Saya Fathima Sibu ",
      image: "dept-cortd/SAYA FATHIMA.jpg",
      lin_url:"",
  },
  {
      title: "EI",
      name: "Ananthan S",
      image: "dept-cortd/ANANTHAN S.jpg",
      lin_url:"",
  },
  {
      title: "EI",
      name: "Diya Jose",
      image: "dept-cortd/DIYA JOSE.jpg",
      lin_url:"",
  },
  {
      title: "ME",
      name: "Thanseel Ahammed Saif",
      image: "dept-cortd/THANSEEL.jpg",
      lin_url:"",
  },
  {
    title: "ME",
    name: "Jins Tomy ",
    image: "dept-cortd/JINS TOMY.jpg",
    lin_url:"",
},
];
  return (
    <>
      <Helmet>
        <title>Team - Asthra 7.0</title>
      </Helmet>
      <Navbar />
      <div className="container px-6 mx-auto">
        <ScrollToTop />
        <section className="mb-32 text-gray-800 text-center">
          <h2 className="lg:text-7xl text-5xl mb-5 text-white text-left font-spaceGrotesk font-bold mt-12">
            Team Asthra
          </h2>
          <hr />
          <h3 className="mt-24 text-white uppercase text-left ml-4 font-bold font-spaceGrotesk text-semibold text-3xl">
            Core Co-ordinators
          </h3>

          <div className="grid md:grid-cols-3 gap-x-1 lg:gap-x-1">
            {coordinators.map((team, key) => {
              return (
                <div className="mb-6 lg:m-4 lg:mb-8">
                  <div className="bg-zinc-700 block shadow-lg">
                    <div className="relative overflow-hidden bg-no-repeat bg-cover">
                      <img
                        src={team.image}
                        alt={team.name}
                        className="w-full"
                        href={team.lin_url}
                      />
                      <a href={team.lin_url}>
                        <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"></div>
                      </a>
                      {/* <svg className="absolute" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style="left: 0; bottom: 0">
                                        <path fill="#fff" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                                        </path>
                                    </svg> */}
                    </div>
                    <div className="p-6">
                      <h5 className="text-white text-2xl font-bold mb-4">{team.name}</h5>
                      <p className="text-gray-200 mb-4">{team.desig}</p>
                      <ul className="list-inside flex mx-auto justify-center">
                        {/* <a href={team.lin_url} className="px-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-4 h-4 text-blue-600">
                                                <path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                                            </svg>
                                                </a> */}
                        <a href="#!" className="px-2">
                          {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 text-blue-600">
                                                <path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                                            </svg> */}
                        </a>
                        <a href="#!" className="px-2">
                          {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4 text-blue-600">
                                                <path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                                            </svg> */}
                        </a>
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <br />
          <br />
          <br />
          <hr />

          <h3 className="text-white mt-20 font-bold ml-4 text-left uppercase font-spaceGrotesk text-semibold text-3xl">
            Web team
          </h3>
          <div className="grid md:grid-cols-3 gap-x-6 lg:gap-x-12">
            {team.map((team, key) => {
              return (
                <div className="mb-6 lg:m-4 lg:mb-8">
                  <div className="bg-zinc-700 block shadow-lg">
                    <div className="relative overflow-hidden bg-no-repeat bg-cover">
                      <img
                        src={team.image}
                        alt={team.name}
                        className="w-full"
                        href={team.lin_url}
                      />
                      <a href={team.lin_url}>
                        <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"></div>
                      </a>
                      {/* <svg className="absolute" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style="left: 0; bottom: 0">
                                        <path fill="#fff" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                                        </path>
                                    </svg> */}
                    </div>
                    <div className="p-6">
                      <h5 className="text-gray-200 text-2xl font-bold mb-4">{team.name}</h5>
                      <p className="text-gray-200 mb-4">{team.title}</p>
                      {
                        parseInt(team.stat[0])?(
                        <a href={team.lin_url} target={"_blank"} rel="noreferrer">
                        <i className="text-gray-200 fa-brands fa-linkedin">&nbsp;&nbsp;</i>
                      </a>):(<></>)
                      }
                      {
                        parseInt(team.stat[1])?(
                        <a href={team.git_url} target={"_blank"} rel="noreferrer">
                        <i className="text-gray-200 fa-brands fa-github"></i>
                      </a>):(<></>)
                      }
                      <ul className="list-inside flex mx-auto justify-center">
                        {/* <a href={team.lin_url} className="px-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-4 h-4 text-blue-600">
                                                <path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                                            </svg>
                                                </a> */}
                        <a href="#!" className="px-2">
                          {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 text-blue-600">
                                                <path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                                            </svg> */}
                        </a>
                        <a href="#!" className="px-2">
                          {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4 text-blue-600">
                                                <path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                                            </svg> */}
                        </a>
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <br />
          <br />
          <br />
          <hr />

          <h3 className="text-white mt-20 font-bold ml-4 text-left uppercase font-spaceGrotesk text-semibold text-3xl">
            Main Co-ordinators
          </h3>
          <div className="grid md:grid-cols-3 gap-x-6 lg:gap-x-12">
            {mainT.map((team, key) => {
              return (
                <div className="mb-6 lg:m-4 lg:mb-8">
                  <div className="bg-zinc-700 block shadow-lg">
                    <div className="relative overflow-hidden bg-no-repeat bg-cover">
                      <img
                        src={team.image}
                        alt={team.name}
                        className="w-full"
                        href={team.lin_url}
                      />
                      <a href={team.lin_url}>
                        <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"></div>
                      </a>
                      {/* <svg className="absolute" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style="left: 0; bottom: 0">
                                        <path fill="#fff" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                                        </path>
                                    </svg> */}
                    </div>
                    <div className="p-6">
                      <h5 className="text-white text-2xl font-bold mb-4">{team.name}</h5>
                      <p className="text-gray-200 mb-4">{team.title}</p>
                      <ul className="list-inside flex mx-auto justify-center">
                        {/* <a href={team.lin_url} className="px-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-4 h-4 text-blue-600">
                                                <path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                                            </svg>
                                                </a> */}
                        <a href="#!" className="px-2">
                          {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 text-blue-600">
                                                <path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                                            </svg> */}
                        </a>
                        <a href="#!" className="px-2">
                          {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4 text-blue-600">
                                                <path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                                            </svg> */}
                        </a>
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <br />
          <br />
          <br />
          <hr />

          <h3 className="text-white mt-20 font-bold ml-4 text-left uppercase font-spaceGrotesk text-semibold text-3xl">
            Department Co-ordinators
          </h3>
          <div className="grid md:grid-cols-3 gap-x-6 lg:gap-x-12">
            {dept.map((team, key) => {
              return (
                <div className="mb-6 lg:m-4 lg:mb-8">
                  <div className="bg-zinc-700 block shadow-lg">
                    <div className="relative overflow-hidden bg-no-repeat bg-cover">
                      <img
                        src={team.image}
                        alt={team.name}
                        className="w-full"
                        href={team.lin_url}
                      />
                      <a href={team.lin_url}>
                        <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"></div>
                      </a>
                      {/* <svg className="absolute" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style="left: 0; bottom: 0">
                                        <path fill="#fff" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                                        </path>
                                    </svg> */}
                    </div>
                    <div className="p-6">
                      <h5 className="text-gray-200 text-2xl font-bold mb-4">{team.name}</h5>
                      <p className="text-gray-200 mb-4">{team.title}</p>
                      {/* {
                        parseInt(team.stat[0])?(
                        <a href={team.lin_url} target={"_blank"} rel="noreferrer">
                        <i className="text-gray-200 fa-brands fa-linkedin">&nbsp;&nbsp;</i>
                      </a>):(<></>)
                      }
                      {
                        parseInt(team.stat[1])?(
                        <a href={team.git_url} target={"_blank"} rel="noreferrer">
                        <i className="text-gray-200 fa-brands fa-github"></i>
                      </a>):(<></>)
                      } */}
                      <ul className="list-inside flex mx-auto justify-center">
                        {/* <a href={team.lin_url} className="px-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-4 h-4 text-blue-600">
                                                <path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                                            </svg>
                                                </a> */}
                        <a href="#!" className="px-2">
                          {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 text-blue-600">
                                                <path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                                            </svg> */}
                        </a>
                        <a href="#!" className="px-2">
                          {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4 text-blue-600">
                                                <path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                                            </svg> */}
                        </a>
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
