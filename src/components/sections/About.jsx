import React from "react";
import { AcademicCapIcon, BriefcaseIcon } from "@heroicons/react/24/solid";
import RevealOnScroll from "../RevealOnScroll";
const About = () => {
  const frontend = ["HTML", "CSS", "React.js", "Javascript", "TailwindCss", "Next.js","Typescript"];
  const backend = ["Supabase", "Firebase"];

  return (
    <section
      id="about"
      className="min-h-screen flex justify-center items-center py-16 sm:py-20 px-4 sm:px-6"
    >
      <div className="max-w-3xl mx-auto w-full">
        <RevealOnScroll>
          <h2 
            className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center tracking-tight"
            style={{ fontFamily: 'var(--font-space)' }}
          >
            About me
          </h2>
          <div className="max-w-3xl mx-auto p-4 sm:p-6 border-white/10 border rounded-xl hover:-translate-y-1 transition-all duration-300 text-center backdrop-blur-sm bg-white/[0.02] hover:bg-white/[0.04] hover:border-blue-500/30 hover:shadow-[0_8px_30px_rgba(59,130,246,0.15)]">
            <p className="mb-4 sm:mb-6 text-sm sm:text-base text-gray-300 leading-relaxed">
              I am a passionate Frontend Web Developer and specialist with a keen eye for design and a drive for innovation.
              My expertise lies in building seamless, responsive user interfaces
              and crafting engaging digital experiences across platforms.
            </p>
          </div>
        </RevealOnScroll>
        <RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-8 sm:mt-12">
            <div className="rounded-xl p-4 sm:p-6 hover:-translate-y-2 transition-all duration-300 backdrop-blur-sm bg-gradient-to-br from-blue-500/5 to-transparent border border-white/5 hover:border-blue-500/30 hover:shadow-[0_8px_30px_rgba(59,130,246,0.15)]">
              <h3 
                className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
                style={{ fontFamily: 'var(--font-space)' }}
              >
                Frontend
              </h3>
              <div className="flex flex-wrap gap-2">
                {frontend.map((skills, index) => (
                  <span
                    key={index}
                    className="bg-blue-500/10 text-blue-400 rounded-full py-1.5 px-3 sm:px-4 text-xs sm:text-sm font-medium hover:bg-blue-500/20 hover:scale-105 hover:shadow-[0_4px_12px_rgba(59,130,246,0.3)] transition-all duration-200 cursor-default border border-blue-500/20"
                  >
                    {skills}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-xl p-4 sm:p-6 hover:-translate-y-2 transition-all duration-300 backdrop-blur-sm bg-gradient-to-br from-cyan-500/5 to-transparent border border-white/5 hover:border-cyan-500/30 hover:shadow-[0_8px_30px_rgba(34,211,238,0.15)]">
              <h3 
                className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
                style={{ fontFamily: 'var(--font-space)' }}
              >
                Backend
              </h3>
              <div className="flex flex-wrap gap-2">
                {backend.map((skills, index) => (
                  <span
                    key={index}
                    className="bg-cyan-500/10 text-cyan-400 rounded-full py-1.5 px-3 sm:px-4 text-xs sm:text-sm font-medium hover:bg-cyan-500/20 hover:scale-105 hover:shadow-[0_4px_12px_rgba(34,211,238,0.3)] transition-all duration-200 cursor-default border border-cyan-500/20"
                  >
                    {skills}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </RevealOnScroll>
        <RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-8 sm:mt-12">
            <div className="p-4 sm:p-6 rounded-xl border-white/10 border hover:-translate-y-2 transition-all duration-300 backdrop-blur-sm bg-white/[0.02] hover:bg-white/[0.04] hover:border-blue-500/30 hover:shadow-[0_8px_30px_rgba(59,130,246,0.15)]">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 flex items-center gap-2 text-blue-400">
                <AcademicCapIcon className="w-4 h-4 sm:w-5 sm:h-5" /> Education
              </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2 sm:space-y-3 text-xs sm:text-sm">
                <li>
                  <strong>B.S. in Mathematics,</strong> - Federal University
                  Otuoke (2020-2024)
                </li>
                <li>
                  <strong>Relevant course work:</strong> Data Structures, Web
                  Development...
                </li>
              </ul>
            </div>
            <div className="p-4 sm:p-6 rounded-xl border-white/10 border hover:-translate-y-2 transition-all duration-300 backdrop-blur-sm bg-white/[0.02] hover:bg-white/[0.04] hover:border-cyan-500/30 hover:shadow-[0_8px_30px_rgba(34,211,238,0.15)]">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 flex items-center gap-2 text-cyan-400">
                <BriefcaseIcon className="w-4 h-4 sm:w-5 sm:h-5" /> Work Experience
              </h3>
              <div className="space-y-3 sm:space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold text-sm sm:text-base">
                    Medicx (2025-present)
                  </h4>
                  <p className="text-xs sm:text-sm">
                    Assisted in building front end components and integrating
                    REST APIs{" "}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm sm:text-base">
                    Front end developer at selSource ltd (2024-present)
                  </h4>
                  <p className="text-xs sm:text-sm">
                    Built and optimized responsive web apps with React and
                    Tailwind CSS. Collaborated with cross-functional teams to
                    deliver high-quality user experiences and new features.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm sm:text-base">
                    Crudpen Technologies (2023-present)
                  </h4>
                  <p className="text-xs sm:text-sm">
                    Assisted in building front end components and integrating
                    REST APIs{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default About;
