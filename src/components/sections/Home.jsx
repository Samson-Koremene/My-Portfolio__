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
      className="min-h-screen flex justify-center items-center relative px-4 sm:px-6 pt-20 sm:pt-24 md:pt-0"
    >
      <div className="z-10 w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
          <div className="text-center md:text-left">
            <Name load={load} />
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-lg mb-6 sm:mb-8 md:mx-0 mx-auto px-2 sm:px-0">
              Frontend web wizard, AI/ML enthusiast, and Graphics Designer
              explorer, turning ideas into beautiful digital realities. Let's build
              something awesome!
            </p>
            <div className="flex flex-col sm:flex-row md:justify-start justify-center items-center gap-3 sm:gap-4 px-2 sm:px-0">
              <a
                href="#projects"
                className={`group w-full sm:w-auto bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-3 px-8 rounded-lg font-medium transition-all duration-300 relative overflow-hidden hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(59,130,246,0.4)] text-center ${
                  button ? "opacity-100" : "opacity-0"
                }`}
              >
                <span className="relative z-10">View Projects</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a
                href="#contact"
                className={`group w-full sm:w-auto border-2 border-blue-500/50 hover:border-blue-500 py-3 px-8 rounded-lg font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(59,130,246,0.3)] text-center backdrop-blur-sm hover:bg-blue-500/10 ${
                  buttonTwo ? "opacity-100" : "opacity-0"
                }`}
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="flex justify-center md:justify-end mt-6 md:mt-0">
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <img
                src={Samtech}
                alt="Samtech portrait"
                className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover shadow-2xl ring-2 ring-blue-500/20 hover:ring-blue-500/40 transition-all duration-500 animate-float hover:scale-105"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
