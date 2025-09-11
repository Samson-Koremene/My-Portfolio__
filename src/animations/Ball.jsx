import React from "react";

// Usage: Place <Ball moved={...} /> inside a relatively positioned span wrapping the 'i' character.
// Example:
// <span className="relative inline-block">
//   i
//   <Ball moved={moved} />
// </span>

const Ball = ({ moved }) => {
  return (
    <div
      className={`absolute left-1/2 -translate-x-1/2 -top-2 w-[7px] h-[7px] sm:w-[12px] sm:h-[12px] rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 animate-ball transition ${
        moved ? "opacity-100" : "opacity-0"
      }`}
      style={{ pointerEvents: "none" }}
    ></div>
  );
};

export default Ball;
