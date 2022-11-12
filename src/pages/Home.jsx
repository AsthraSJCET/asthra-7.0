import SpreadCard from "../components/SpreadCard";
import MainTabs from "../components/MainTabs";
import Events from "../components/Events";

export default function Home() {
    return (
        <>
            <MainTabs />
            <Events eventType="workshop" />
            <SpreadCard />
        </>
    )
}