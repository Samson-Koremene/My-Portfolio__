import React from "react";
import { AcademicCapIcon, BriefcaseIcon } from "@heroicons/react/24/solid";
import RevealOnScroll from "../RevealOnScroll";
const About = () => {
  const frontend = ["HTML", "CSS", "React.js", "Javascript", "TailwindCss", "Next.js","Typescript"];
  const backend = ["Fastapi", " PostgreSQL", "Supabase", "Firebase"];

  return (
    <section
      id="about"
      className="min-h-screen flex justify-center items-center py-16 sm:py-20 px-4 sm:px-6"
    >
      <div className="max-w-3xl mx-auto w-full">
        <RevealOnScroll>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About me
          </h2>
          <div className="max-w-3xl mx-auto p-4 sm:p-6 border-white/10 border hover:-translate-y-1 transition-all text-center">
            <p className="mb-4 sm:mb-6 text-sm sm:text-base text-gray-300">
              I am a passionate Frontend Web Developer and specialist with a keen eye for design and a drive for innovation.
              My expertise lies in building seamless, responsive user interfaces
              and crafting engaging digital experiences across platforms.
            </p>
          </div>
        </RevealOnScroll>
        <RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="rounded-xl p-4 sm:p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {frontend.map((skills, index) => (
                  <span
                    key={index}
                    className="bg-blue-500/10 text-blue-500 rounded-full py-1 px-2.5 sm:px-3 text-xs sm:text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {skills}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-xl p-4 sm:p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {backend.map((skills, index) => (
                  <span
                    key={index}
                    className="bg-blue-500/10 text-blue-500 rounded-full py-1 px-2.5 sm:px-3 text-xs sm:text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {skills}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </RevealOnScroll>
        <RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-8">
            <div className="p-4 sm:p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 flex items-center gap-2">
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
            <div className="p-4 sm:p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 flex items-center gap-2">
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
