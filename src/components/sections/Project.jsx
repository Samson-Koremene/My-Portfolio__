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
      style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}
    >
      <div className="max-w-4xl mx-auto w-full">
        <RevealOnScroll>
          <h2 
            className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center tracking-tight"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Featured Projects
          </h2>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {featuredProjects.map((project, index) => (
            <RevealOnScroll key={index}>
              <div className="group p-4 sm:p-6 border border-white/10 rounded-xl hover:-translate-y-1 transition-all hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]">
                <h3 
                  className="text-lg sm:text-xl mb-2 sm:mb-3 font-semibold tracking-tight"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {project.title}
                </h3>
                <p 
                  className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-500/10 text-blue-500 rounded-full py-1 px-2 sm:py-1.5 sm:px-3 text-xs sm:text-sm font-medium hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 text-xs sm:text-sm font-medium transition-all group/link"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={14} className="sm:w-4 sm:h-4" />
                    <span>Live Demo</span>
                    <ArrowUpRight 
                      size={12} 
                      className="sm:w-3.5 sm:h-3.5 transform transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" 
                    />
                  </a>
                  
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-2 text-gray-400 hover:text-white text-xs sm:text-sm font-medium transition-all group/link"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={14} className="sm:w-4 sm:h-4" />
                    <span>Code</span>
                    <ArrowUpRight 
                      size={12} 
                      className="sm:w-3.5 sm:h-3.5 transform transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" 
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