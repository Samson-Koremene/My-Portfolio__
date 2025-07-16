import React, { useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const NavBar = ({ menuOpen, setOpen }) => {
  const NavLinks = [
    {
      title: "Home",
      href: "#home",
    },
    {
      title: "About",
      href: "#about",
    },
    {
      title: "Projects",
      href: "#projects",
    },
    {
      title: "Contacts",
      href: "#contacts",
    },
  ];
useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setOpen(false);
    }
  };

  // Always listen for resize
  window.addEventListener("resize", handleResize);

  // Clean up on unmount
  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, [setOpen]);


  return (
    <nav className="fixed top-0 w-full  bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/40">
      <div className="max-w-4xl mx-auto px-4">
        <div className="h-16 flex justify-between  items-center">
          <a href="#home" className="font-mono font-bold text-xl text-white">
            Davy<span className="text-blue-500">.Tech</span>
          </a>

          <div className="w-7 h-7 relative cursor-pointer z-40 md:hidden">
            <button
              className="w-full h-full"
              onClick={() => setOpen(!menuOpen)}
            >
              {menuOpen ? <XMarkIcon /> : <Bars3Icon />}
            </button>
          </div>
          <div className="md:flex  hidden items-center space-x-8">
            {NavLinks.map((items, index) => (
              <a
                className="text-gray-300 hover:text-blue-500 transition-colors duration-300"
                key={index}
                href={items.href}
              >
                {items.title}
              </a>
            ))}
          </div>
        </div>
      </div>
      {menuOpen && (
        <div className=" flex flex-col w-full h-full  items-center justify-center gap-8">
          {NavLinks.map((items, index) => (
            <a
              className="text-gray-300 hover:text-blue-500 transition-colors duration-300"
              key={index}
              href={items.href}
            >
              {items.title}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
