import SpreadCard from "../components/SpreadCard";
import MainTabs from "../components/MainTabs";
import Events from "../components/Events";
import { Hero } from "../components/extra"
function Home() {
    return (
        <>
            <Hero />
            <div className="p-5 lg:pl-20 lg:pr-20 pt-8 mx-auto bg-black">
                <MainTabs />
                <Events eventType="workshop" />
                <SpreadCard />
            </div>
        </>
    )
}
export default Home;