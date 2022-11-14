// import SpreadCard from "../components/SpreadCard";
import MainTabs from "../components/MainTabs";
import AllEvents from "../components/AllEvents";
import { Hero } from "../components/extra";
// import DeptFilter from "../components/DeptFilter";
function Home() {
  return (
    <>
      <Hero />
      <div className="container p-5 lg:pl-20 lg:pr-20 pt-8 mx-auto bg-black">
        <MainTabs />
        <AllEvents />
        {/* <SpreadCard /> */}
      </div>
    </>
  );
}
export default Home;
