import loadingicon from './loading.gif'
function Loader() {
    return(
        <div className="fixed top-0 bottom-0 left-0 right-0 flex flex-col h-screen min-w-full my-auto items-center justify-center" style={{zIndex:'9999',background:"rgba(1,1,1,0.8)"}}>
        <img alt='loading-icon' src={loadingicon}/>
      </div>
    )
}
export default Loader