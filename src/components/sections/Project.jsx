import React from "react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import RevealOnScroll from "../RevealOnScroll";

const Project = () => {
  const featuredProjects = [
    {
      title: "Digital Skill exchange platform",
      description:
        "A web platform that connects learners and experts, enabling users to exchange digital skills, book sessions, and grow their professional network.",
      technologies: ["Flutter", "Dart", "Firebase"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "E-commerce accessories platform",
      description:
        "A modern online store for tech accessories, offering seamless product browsing, secure checkout, and real-time order tracking for an enhanced shopping experience.",
      technologies: ["React", "Javascript", "TailwindCss", "Supabase"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Netflix Clone",
      description:
        "A full-featured streaming platform inspired by Netflix, with user authentication, movie browsing, and responsive video playback.",
      technologies: ["React", "Javascript", "TailwindCss", "Supabase"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Prison Management System",
      description:
        "A comprehensive system for managing inmate records, staff, and facility operations, designed to streamline administrative tasks and improve security.",
      technologies: ["React", "Javascript", "TailwindCss", "Supabase"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex justify-center items-center py-20"
      style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}
    >
      <div className="max-w-4xl mx-auto px-4">
        <RevealOnScroll>
          <h2 
            className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center tracking-tight"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Featured Projects
          </h2>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((project, index) => (
            <RevealOnScroll key={index}>
              <div className="group p-6 border border-white/10 rounded-xl hover:-translate-y-1 transition-all hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]">
                <h3 
                  className="text-xl mb-3 font-semibold tracking-tight"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {project.title}
                </h3>
                <p 
                  className="text-gray-400 text-sm mb-4 leading-relaxed"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-500/10 text-blue-500 rounded-full py-1.5 px-3 text-sm font-medium hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex items-center gap-4">
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-medium transition-all group/link"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                    <ArrowUpRight 
                      size={14} 
                      className="transform transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" 
                    />
                  </a>
                  
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-2 text-gray-400 hover:text-white text-sm font-medium transition-all group/link"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={16} />
                    <span>Code</span>
                    <ArrowUpRight 
                      size={14} 
                      className="transform transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" 
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