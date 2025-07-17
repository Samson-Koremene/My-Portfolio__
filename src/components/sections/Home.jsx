import React, { useEffect, useState } from "react";
import Name from "../Name";
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
      className="min-h-screen flex justify-center items-center relative "
    >
      <div className="text-center z-10 px-4">
                <Name load={load} />

        <p className="text-lg md:text-xl text-gray-400 max-w-lg mb-8 mx-auto">
          Frontend web wizard, Flutter app creator, and forex market
          explorer—turning ideas into beautiful digital realities. Let’s build
          something awesome!
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 ">
          <a
            href="#projects"
            className={`bg-blue-500 text-white py-3 px-6  rounded font-medium transition duration-1000 relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)] ${
              button ? "opacity-100" : "opacity-0"
            }`}
          >
            view projects
          </a>
          <a
            href="#projects"
            className={`border border-blue-500/50 py-3 px-6 transition duration-700 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)] ${
              buttonTwo ? "opacity-100" : "opacity-0"
            }`}
          >
            view projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
