import React from 'react'

function ContactInfo({ data }) {
  return (
    <>

<a href={"tel:+91" + data.cordinator1_contact}>
      <div>
        <div className="contact-container mt-3 transition-all duration-300 flex  bg-zinc-900 px-5 py-5 rounded-md hover:bg-white hover:text-black">
          <div className="contact-icon px-3 pb-2 pt-2 border-white/20 border-solid border-2 rounded-xl mr-3 " style={{ borderRadius: "500px" }}>
            <i className="fa fa-phone" aria-hidden="true"></i>
          </div>
          <div className="contact">
            <p></p>
            <p className=" text-md font-semibold font-spaceGrotesk">{data.cordinator1_name} (Student Co-ordinator)</p>
            <div className="  pr-2  flex  flex-row">
              <p className="text-sm font-spaceGrotesk">{data.cordinator1_contact} &nbsp;</p>

            </div>
          </div>
        </div>
      </div>
      </a>
    


      {data.cordinator2_name !== "" &&
      <a href={"tel:+91" + data.cordinator2_contact}>
        <div>
          <div className="contact-container mt-3 transition-all duration-300 flex  bg-zinc-900 px-5 py-5 rounded-md hover:bg-white hover:text-black">
            <div className="contact-icon px-3 pb-2 pt-2 border-white/20 border-solid border-2 rounded-xl mr-3 " style={{ borderRadius: "500px" }}>
              <i className="fa fa-phone" aria-hidden="true"></i>
            </div>
            <div className="contact">
              <p className=" text-md font-semibold font-spaceGrotesk">{data.cordinator2_name} (Student Co-ordinator)</p>
              <div className="  pr-2  flex  flex-row">
                <p className="text-sm font-spaceGrotesk">{data.cordinator2_contact} &nbsp;</p>

              </div>
            </div>
          </div>
        </div>
        </a>
      }


      {data.cordinator3_name !== "" &&
      <a href={"tel:+91" + data.cordinator3_contact}>
        <div>
          <div className="contact-container mt-3 transition-all duration-300 flex  bg-zinc-900 px-5 py-5 rounded-md hover:bg-white hover:text-black">
            <div className="contact-icon px-3 pb-2 pt-2 border-white/20 border-solid border-2 rounded-xl mr-3 " style={{ borderRadius: "500px" }}>
              <i className="fa fa-phone" aria-hidden="true"></i>
            </div>
            <div className="contact">
              <p className=" text-md font-semibold font-spaceGrotesk">{data.cordinator3_name}  (Faculty Co-ordinator)</p>
              <div className="  pr-2  flex  flex-row">
                <p className="text-sm font-spaceGrotesk">{data.cordinator3_contact} &nbsp;</p>

              </div>
            </div>
          </div>
        </div>
        </a>
      }
    </>
  )
}

export {ContactInfo}