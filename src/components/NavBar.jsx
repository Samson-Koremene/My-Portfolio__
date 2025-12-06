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
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="h-14 sm:h-16 flex justify-between items-center">
          <a 
            href="#home" 
            className="font-bold text-lg sm:text-xl text-white tracking-tight"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            Sam
            <span className="bg-clip-text text-transparent bg-gradient-to-l from-blue-500 to-cyan-400">
              Tech
            </span>
          </a>

          <div className="w-6 h-6 sm:w-7 sm:h-7 relative cursor-pointer z-40 md:hidden">
            <button
              className="w-full h-full"
              onClick={() => setOpen(!menuOpen)}
              aria-label="Toggle menu"
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

          <div className="md:flex hidden items-center space-x-6 lg:space-x-8">
            {NavLinks.map((items, index) => (
              <a
                className="text-gray-300 bg-clip-text hover:text-transparent bg-gradient-to-l from-blue-500 to-cyan-400 transition-colors text-sm lg:text-base duration-300 font-medium"
                style={{ fontFamily: 'var(--font-inter)' }}
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
        className={`fixed inset-0 flex flex-col w-full h-screen bg-black/90 backdrop-blur-sm z-30 transition-all duration-300 ease-in-out items-center justify-center gap-6 sm:gap-8 md:hidden ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {NavLinks.map((items, index) => (
          <a
            className={`text-gray-300 hover:text-blue-500 transition-all duration-300 text-lg sm:text-xl font-medium ${
              menuOpen ? " translate-y-0" : " translate-y-4"
            }`}
            style={{ 
              transitionDelay: `${index * 100}ms`,
              fontFamily: 'var(--font-inter)'
            }}
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
