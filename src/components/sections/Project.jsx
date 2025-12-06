import React from "react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import RevealOnScroll from "../RevealOnScroll";

const Project = () => {
  const featuredProjects = [
    {
      title: "Bayelsa-Traffic-AI-Dynamics",
      description:
        "A web platform that connects learners and experts, enabling users to exchange digital skills, book sessions, and grow their professional network.",
      technologies: ["React.js", "Typescript", "Supabase","Tailwind-Css"],
      liveUrl: "https://bayelsa-traffic-ai-dynamics.vercel.app/",
      githubUrl: "#",
    },
    {
      title: "NewLabel Tv",
      description:
        "A Streaming and Buying of course plaform where you Explore exclusive content from our growing collection of creators and storytellers.",
      technologies: ["React.js", "Typescript", "Tailwind-Css", "Supabase"],
      liveUrl: "https://newlabel-hub.vercel.app/",
      githubUrl: "#",
    },
    {
      title: "Medicx",
      description:
        "MEDICX connects patients, doctors, labs, pharmacies, and nurses in one seamless system. Our goal is simple: to make healthcare easier, safer, and more connected, while giving every user control over their care journey.",
      technologies: ["React", "Typescript", "TailwindCss",],
      liveUrl: "https://medicx.app/",
      githubUrl: "#",
    },
    {
      title: "CryptoTracker",
      description:
        "CryptoTracker is a simple, real-time crypto app that provides live prices, market charts, alerts, portfolio tracking, and news all in one clean interface..",
      technologies: ["React", "Typescript", "TailwindCss", "Supabase"],
      liveUrl: "https://cryptotracker-nine-pink.vercel.app/",
      githubUrl: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex justify-center items-center py-16 sm:py-20 px-4 sm:px-6"
    >
      <div className="max-w-4xl mx-auto w-full">
        <RevealOnScroll>
          <h2 
            className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center tracking-tight"
            style={{ fontFamily: 'var(--font-space)' }}
          >
            Featured Projects
          </h2>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {featuredProjects.map((project, index) => (
            <RevealOnScroll key={index}>
              <div className="group p-4 sm:p-6 border border-white/10 rounded-xl hover:-translate-y-2 transition-all duration-300 hover:border-blue-500/40 hover:shadow-[0_12px_40px_rgba(59,130,246,0.25)] backdrop-blur-sm bg-gradient-to-br from-white/[0.03] to-transparent relative overflow-hidden">
                {/* Shimmer effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shimmer"></div>
                <h3 
                  className="relative text-lg sm:text-xl mb-2 sm:mb-3 font-semibold tracking-tight group-hover:text-blue-400 transition-colors duration-300"
                  style={{ fontFamily: 'var(--font-space)' }}
                >
                  {project.title}
                </h3>
                <p 
                  className="relative text-gray-400 group-hover:text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed transition-colors duration-300"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="relative flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-500/10 text-blue-400 rounded-full py-1 px-2 sm:py-1.5 sm:px-3 text-xs sm:text-sm font-medium hover:bg-blue-500/20 hover:scale-105 hover:shadow-[0_4px_12px_rgba(59,130,246,0.3)] transition-all duration-200 border border-blue-500/20"
                      style={{ fontFamily: 'var(--font-inter)' }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 text-xs sm:text-sm font-medium transition-all group/link hover:gap-3"
                    style={{ fontFamily: 'var(--font-inter)' }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={14} className="sm:w-4 sm:h-4 group-hover/link:scale-110 transition-transform" />
                    <span className="relative">
                      Live Demo
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover/link:w-full transition-all duration-300"></span>
                    </span>
                    <ArrowUpRight 
                      size={12} 
                      className="sm:w-3.5 sm:h-3.5 transform transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" 
                    />
                  </a>
                  
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-2 text-gray-400 hover:text-white text-xs sm:text-sm font-medium transition-all group/link hover:gap-3"
                    style={{ fontFamily: 'var(--font-inter)' }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={14} className="sm:w-4 sm:h-4 group-hover/link:scale-110 transition-transform" />
                    <span className="relative">
                      Code
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-400 group-hover/link:w-full transition-all duration-300"></span>
                    </span>
                    <ArrowUpRight 
                      size={12} 
                      className="sm:w-3.5 sm:h-3.5 transform transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" 
                    />
                  </a>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;