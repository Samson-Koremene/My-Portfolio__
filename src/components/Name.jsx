import React, { useEffect, useState } from "react";
import Ball from "../animations/Ball";

const Name = ({ load }) => {
  const [moved, setMoved] = useState(false);
  useEffect(() => {
    let timer;
    if (!load) {
      timer = setTimeout(() => {
        setMoved(true);
      }, 2000);
    } else {
      setMoved(false);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [load]);
  return (
    <div className="">
      <h1 className="text-3xl sm:text-5xl md:text-7xl mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent font-bold leading-tight ">
        H
        <span className="relative inline-block bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent ">
          I
          <Ball moved={moved} />
        </span>
        , Samtech
      </h1>
    </div>
  );
};

export default Name;
