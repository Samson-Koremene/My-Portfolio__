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
      href: "#contact",
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
    <nav className="fixed top-0 w-full bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/40 z-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="h-16 flex justify-between items-center">
          <a href="#home" className="font-mono font-bold text-xl text-white">
            Iam
            <span className="bg-clip-text text-transparent bg-gradient-to-l from-blue-500 to-cyan-400">
              legend
            </span>
          </a>

          <div className="w-7 h-7 relative cursor-pointer z-40 md:hidden">
            <button
              className="w-full h-full"
              onClick={() => setOpen(!menuOpen)}
            >
              <Bars3Icon
                className={`w-full h-full absolute inset-0 transition-all duration-300 ${
                  menuOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
                }`}
              />
              <XMarkIcon
                className={`w-full h-full absolute inset-0 transition-all duration-300 ${
                  menuOpen ? "rotate-0 opacity-100" : "rotate-90 opacity-0"
                }`}
              />
            </button>
          </div>

          <div className="md:flex hidden items-center space-x-8">
            {NavLinks.map((items, index) => (
              <a
                className="text-gray-300 bg-clip-text hover:text-transparent bg-gradient-to-l from-blue-500 to-cyan-400 transition-colors font-mono text-[16px] duration-300"
                key={index}
                href={items.href}
              >
                {items.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div
        className={`fixed inset-0 flex flex-col w-full h-screen bg-black/70 z-30 transition-all duration-300 ease-in-out items-center justify-center gap-8 md:hidden ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {NavLinks.map((items, index) => (
          <a
            className={`text-gray-300 hover:text-blue-500 transition-all duration-300 text-[15px] font-mono ${
              menuOpen ? " translate-y-0" : " translate-y-4"
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
            key={index}
            href={items.href}
            onClick={() => setOpen(false)}
          >
            {items.title}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
