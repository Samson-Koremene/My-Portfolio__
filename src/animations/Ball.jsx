import React from "react";

const Ball = ({ moved }) => {
  return (
    <div
      className={`w-[7px] h-[7px] sm:w-[12px] sm:h-[12px] ml-14  rounded-full bg-gradient-to-r from-blue-500 transition to-purple-500 animate-ball ${
        moved ? "opacity-100" : "opacity-0"
      }`}
    ></div>
  );
};

export default Ball;
