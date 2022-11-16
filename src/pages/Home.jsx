// import SpreadCard from "../components/SpreadCard";
import MainTabs from "../components/MainTabs";
import AllEvents from "../components/AllEvents";
import { Hero } from "../components/extra";
// import DeptFilter from "../components/DeptFilter";
function Home() {
  return (
    <>
      <Hero />
      <div className="py-28">
        <div className="px-4 lg:px-64 sm:px-4 container mx-auto">

          <h1 className="text-white font-spaceGrotesk lg:text-2xl md:text-xl text-lg">Asthra - The national level technical fest of St. Joseph's College of Engineering and Technology, Palai, framed with a vision to explore the possibilities of tomorrow. With an annual footfall of more than 5,000+ visitors and participants, Asthra is one of the biggest inter-college fests in Kerala. With a plethora of professional shows, competitions, lectures, and workshops, Asthra will keep you engrossed in every way possible.
          </h1>
          <br />
          {/* <DaretoDance /> */}
        </div>
      </div>
      <div className="container mx-auto bg-black">
        <MainTabs />
      </div>
      <div className="container p-5 pt-0 mx-auto bg-black">
        <AllEvents />
      </div>
    </>
  );
}
export default Home;
