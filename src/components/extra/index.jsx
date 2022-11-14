function Intro() {
    return (
        <>
            <iframe title="asthra-intro-screen" id={"intro"} style={{
                width: '100%',
                height: '100vh',
                overflow: "hidden",
                overflowY: 'scroll'
            }} frameBorder="0" allowFullScreen sandbox="allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-presentation allow-same-origin allow-scripts allow-top-navigation allow-top-navigation-by-user-activation" src="/_intro"></iframe>
        </>
    )
}

function Hero() {
    return (<>
        <div className="hero w-full overflow-hidden" style={{ height: "90vh" }}>
            <div className="container h-full flex items-center mx-auto">
                <h1 className="px-6 text-6xl lg:text-8xl font-bold text-white font-spaceGrotesk">THE FUTURE IS <br /> LOOKING</h1>
            </div>
        </div>
    </>)
}

function DaretoDance() {
    return (
        <div className="container mx-auto mb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full -mt-8">
            <div className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer transition-all duration-300 hover:-translate-y-1">
                <img className="object-cover w-full h-48" src="https://images.unsplash.com/photo-1529229504105-4ea795dcbf59?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Flower and sky" />

                <div className="absolute bottom-0 left-0 px-6 py-4">
                    <h4 className="mb-3 text-xl font-semibold tracking-tight text-white">Dare 2 Dance</h4>
                </div>
            </div>

            <div className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer transition-all duration-300 hover:-translate-y-1">
                <img className="object-cover w-full h-48" src="https://images.unsplash.com/photo-1529229504105-4ea795dcbf59?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Flower and sky" />

                <div className="absolute bottom-0 left-0 px-6 py-4">
                    <h4 className="mb-3 text-xl font-semibold tracking-tight text-white">Dare 2 Dance</h4>
                </div>
            </div>

            <div className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer transition-all duration-300 hover:-translate-y-1">
                <img className="object-cover w-full h-48" src="https://images.unsplash.com/photo-1529229504105-4ea795dcbf59?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Flower and sky" />

                <div className="absolute bottom-0 left-0 px-6 py-4">
                    <h4 className="mb-3 text-xl font-semibold tracking-tight text-white">Dare 2 Dance</h4>
                </div>
            </div>

            <div className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer transition-all duration-300 hover:-translate-y-1">
                <img className="object-cover w-full h-48" src="https://images.unsplash.com/photo-1529229504105-4ea795dcbf59?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Flower and sky" />

                <div className="absolute bottom-0 left-0 px-6 py-4">
                    <h4 className="mb-3 text-xl font-semibold tracking-tight text-white">Dare 2 Dance</h4>
                </div>
            </div>
        </div>
    )
}

export { Intro, Hero,DaretoDance }