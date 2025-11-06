import React from "react";
import { AcademicCapIcon, BriefcaseIcon } from "@heroicons/react/24/solid";
import RevealOnScroll from "../RevealOnScroll";
const About = () => {
  const frontend = ["HTML", "CSS", "React.js", "Javascript", "TailwindCss", "Next.js","Typescript"];
  const backend = ["Fastapi", " PostgreSQL", "Supabase", "Firebase"];

  return (
    <section
      id="about"
      className="min-h-screen flex justify-center items-center py-20"
    >
      <div className="max-w-3xl mx-auto px-4">
        <RevealOnScroll>
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About me
          </h2>
          <div className="max-w-3xl mx-auto p-6 border-white/10 border hover:-translate-y-1 transition-all text-center">
            <p className="mb-6 text-gray-300 ">
              I am a passionate Frontend Web Developer and specialist with a keen eye for design and a drive for innovation.
              My expertise lies in building seamless, responsive user interfaces
              and crafting engaging digital experiences across platforms.
            </p>
          </div>
        </RevealOnScroll>
        <RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {frontend.map((skills, index) => (
                  <span
                    key={index}
                    className="bg-blue-500/10 text-blue-500 rounded-full py-1 px-3 text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {skills}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {backend.map((skills, index) => (
                  <span
                    key={index}
                    className="bg-blue-500/10 text-blue-500 rounded-full py-1 px-3 text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {skills}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </RevealOnScroll>
        <RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">
                <AcademicCapIcon className="w-5 h-5" /> Education
              </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-3 text-[12px]">
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
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">
                <BriefcaseIcon className="w-5 h-5" /> Work Experience
              </h3>
              <div>
                  <h4 className="font-semibold">
                    Medicx (2025-present)
                  </h4>
                  <p className="text-[12px]">
                    Assisted in building front end components and integrating
                    REST APIs{" "}
                  </p>
                </div>
                
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    Front end developer at selSource ltd (2024-present)
                  </h4>
                  <p className="text-[12px]">
                    Built and optimized responsive web apps with React and
                    Tailwind CSS. Collaborated with cross-functional teams to
                    deliver high-quality user experiences and new features.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">
                    Crudpen Technologies (2023-present)
                  </h4>
                  <p className="text-[12px]">
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
