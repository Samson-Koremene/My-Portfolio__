import React, { useEffect, useState } from "react";
import Name from "../Name";
import Samtech from "../../assets/Samtech.png";
const Home = ({ load }) => {
  const [button, showButton] = useState(false);
  const [buttonTwo, showButtonTwo] = useState(false);

  useEffect(() => {
    let timerOne;
    let timerTwo;
    if (!load) {
      timerOne = setTimeout(() => {
        showButton(true);
      }, 500);
      timerTwo = setTimeout(() => {
        showButtonTwo(true);
      }, 1000);
    } else {
      showButton(false);
      showButtonTwo(false);
    }
    return () => {
      clearTimeout(timerOne);
      clearTimeout(timerTwo);
    };
  }, [load]);
  return (
    <section
      id="home"
      className="min-h-screen flex justify-center items-center relative px-4 sm:px-6"
    >
      <div className="z-10 w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
          <div className="text-center md:text-left">
            <Name load={load} />
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-lg mb-6 sm:mb-8 md:mx-0 mx-auto px-2 sm:px-0">
              Frontend web wizard, AI/ML enthusiast, and Graphics Designer
              explorer—turning ideas into beautiful digital realities. Let's build
              something awesome!
            </p>
            <div className="flex flex-col sm:flex-row md:justify-start justify-center items-center gap-3 sm:gap-4 px-2 sm:px-0">
              <a
                href="#projects"
                className={`w-full sm:w-auto bg-blue-500 text-white py-3 px-6 rounded font-medium transition duration-1000 relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)] text-center ${
                  button ? "opacity-100" : "opacity-0"
                }`}
              >
                view projects
              </a>
              <a
                href="#contact"
                className={`w-full sm:w-auto border border-blue-500/50 py-3 px-6 transition duration-700 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)] text-center ${
                  buttonTwo ? "opacity-100" : "opacity-0"
                }`}
              >
                Contact me
              </a>
            </div>
          </div>
          <div className="flex justify-center md:justify-end mt-6 md:mt-0">
            <img
              src={Samtech}
              alt="Samtech portrait"
              className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover shadow-xl ring-1 ring-white/10"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
