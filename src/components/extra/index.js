function Intro() {
    return (
        <>
            <iframe style={{
                width: '100%',
                height: '100vh',
                overflow: "hidden",
                overflowY: 'scroll'
            }} frameBorder="0" allowFullScreen src="/_intro" sandbox="allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-presentation allow-same-origin allow-scripts allow-top-navigation allow-top-navigation-by-user-activation"></iframe>
        </>
    )
}

export { Intro }