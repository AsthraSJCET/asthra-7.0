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

export { Intro }