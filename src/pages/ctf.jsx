import { useAuth0 } from "@auth0/auth0-react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


const Capture = ({ name, description, rules, contact }) => {
  return (
    <>
      <Navbar />
      <div className="bg-black w-screen px-5 lg:px-20 lg:pb-28 pb-5">
        <div>
          <div className="max-w-screen lg:px-20 md:p-8">
            <h1 className="text-5xl font-spaceGrotesk text-white font-bold pb-4 tracking-tight">
              {name}
            </h1>
            <hr className="pt-2 pb-5"></hr>
          </div>
          <div className="lg:px-20 py-4 font-spaceGrotesk text-white">
            <h3 className="font-bold font-mono text-2xl pb-6">DESCRIPTION</h3>
            <p className="text-white font-spaceGrotesk text-sm tracking-normal font-semibold max-w-xl">
              {description}
            </p>
          </div>
          <div className="lg:px-20 py-4 font-spaceGrotesk text-white">
            <h3 className="font-bold font-mono text-2xl pb-6">RULES</h3>
            <p className="text-white font-spaceGrotesk text-sm tracking-normal font-semibold max-w-xl">
              {rules}
            </p>
          </div>
          <div className="lg:px-20 py-4 font-spaceGrotesk text-white">
            <h3 className="font-bold font-mono text-2xl pb-6">CONTACT</h3>
            <p className="text-white font-spaceGrotesk text-sm tracking-normal font-semibold max-w-xl">
              {contact}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Capture;