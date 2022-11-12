function Intro() {
    return (
        <>
            <iframe id={"intro"} style={{
                width: '100%',
                height: '100vh',
                overflow: "hidden",
                overflowY: 'scroll'
            }} frameBorder="0" allowFullScreen src="/_intro"></iframe>
        </>
    )
}

export { Intro }