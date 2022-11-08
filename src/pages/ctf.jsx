const { default: Navbar } = require("../components/Navbar")

let eventDetails = {
    name: "CAPTURE THE FLAG",
    description: "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publi",
    rules: "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley ",
    contact: "PHONE NO AND EMAIL HERE"
}

const Capture = () => {
    return (
        <>
            <Navbar />
            <div className="bg-black h-full w-screen pb-40">
                <div>
                    <div className="max-w-8xl md:p-8 p-4">
                        <h1 className="text-5xl font-mbf text-white font-bold pb-4 tracking-tight">
                            {eventDetails.name}
                        </h1>
                        <hr className=""></hr>
                    </div>
                    <div className="px-20 py-4 font-mbf text-white">
                        <h3 className="font-bold font-mono text-2xl pb-6">
                            DESCRIPTION
                        </h3>
                        <p className="text-white font-mbf text-sm tracking-normal font-semibold max-w-xl">
                            {eventDetails.description}
                        </p>
                    </div>
                    <div className="px-20 py-4 font-mbf text-white">
                        <h3 className="font-bold font-mono text-2xl pb-6">
                            RULES
                        </h3>
                        <p className="text-white font-mbf text-sm tracking-normal font-semibold max-w-xl">
                            {eventDetails.rules}
                        </p>
                    </div>
                    <div className="px-20 py-4 font-mbf text-white">
                        <h3 className="font-bold font-mono text-2xl pb-6">
                            CONTACT
                        </h3>
                        <p className="text-white font-mbf text-sm tracking-normal font-semibold max-w-xl">
                            {eventDetails.contact}
                        </p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Capture;