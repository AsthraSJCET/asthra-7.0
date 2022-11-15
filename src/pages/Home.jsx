// import SpreadCard from "../components/SpreadCard";
import MainTabs from "../components/MainTabs";
import AllEvents from "../components/AllEvents";
import { Hero } from "../components/extra";
// import DeptFilter from "../components/DeptFilter";
function Home() {
  return (
    <>
      <Hero />
      <div className="container p-5 pt-8 mx-auto bg-black">
        <MainTabs /><AllEvents />
      </div>
    </>
  );
}
export default Home;
