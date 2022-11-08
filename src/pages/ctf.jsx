const { default: Navbar } = require("../components/Navbar");

const Capture = ({ name, description, rules, contact }) => {
  return (
    <>
      <Navbar />
      <div className="bg-black h-screen w-screen pb-40">
        <div>
          <div className="max-w-screen lg:px-20 md:p-8 p-4">
            <h1 className="text-5xl font-spaceGrotesk text-white font-bold pb-4 tracking-tight">
              {name}
            </h1>
            <hr className=""></hr>
          </div>
          <div className="px-20 py-4 font-spaceGrotesk text-white">
            <h3 className="font-bold font-mono text-2xl pb-6">DESCRIPTION</h3>
            <p className="text-white font-spaceGrotesk text-sm tracking-normal font-semibold max-w-xl">
              {description}
            </p>
          </div>
          <div className="px-20 py-4 font-spaceGrotesk text-white">
            <h3 className="font-bold font-mono text-2xl pb-6">RULES</h3>
            <p className="text-white font-spaceGrotesk text-sm tracking-normal font-semibold max-w-xl">
              {rules}
            </p>
          </div>
          <div className="px-20 py-4 font-spaceGrotesk text-white">
            <h3 className="font-bold font-mono text-2xl pb-6">CONTACT</h3>
            <p className="text-white font-spaceGrotesk text-sm tracking-normal font-semibold max-w-xl">
              {contact}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Capture;
