import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Password Manager',
    description: 'A minimal and fast local storage-based password manager app with clean UI',
    tech: ['React', 'Tailwind CSS', 'Local Storage'],
    github: 'https://github.com/makeitwithsahil/PassHive',
    demo: 'https://passhive.vercel.app/',
    coverImage: '/passhive-cover.png',
  },
  // More projects can be added here
];

const ProjectSection = () => {
  return (
    <section id="projects" className="bg-[#E1DBCC] text-[#1D2A23] py-20 px-6 md:px-20 relative overflow-hidden">
      {/* Animated Background Circles */}
      <motion.div
        className="absolute top-10 left-4 w-6 h-6 bg-[#A87A58] rounded-full"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 right-6 w-5 h-5 bg-[#38483F] rounded-full"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      />

      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-12 text-center"
      >
        My <span className="text-[#A87A58]">Projects</span>
      </motion.h2>

      {/* Project Cards Grid */}
      <div className="max-w-[2000px] m-auto grid md:grid-cols-2 gap-12">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.015 }}
            className="group bg-[#38483F] text-[#E1DBCC] rounded-2xl shadow-xl p-6 transition-all duration-300 relative overflow-hidden"
          >
            {/* Gradient Overlay */}
            <div className="absolute -inset-0.5 bg-gradient-to-br from-[#A87A58] to-transparent opacity-0 group-hover:opacity-20 transition-all duration-300 rounded-2xl pointer-events-none" />

            {/* Project Image */}
            <motion.div
              className="w-full h-48 md:h-64 bg-cover bg-center rounded-lg mb-6"
              style={{ backgroundImage: `url(${project.coverImage})` }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />

            {/* Project Title */}
            <h3 className="text-2xl font-semibold mb-2 text-[#c3a48d]">{project.title}</h3>
            <p className="mb-4 text-sm text-[#e8e3d8]">{project.description}</p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 text-xs mb-5">
              {project.tech.map((tech, i) => (
                <motion.span
                  key={i}
                  whileHover={{ scale: 1.1 }}
                  className="bg-[#1D2A23] text-[#E1DBCC] px-3 py-1 rounded-full shadow-sm transition"
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            {/* Project Links */}
            <div className="flex gap-5">
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="text-[#E1DBCC] hover:text-[#A87A58] transition"
                aria-label={`View the GitHub repository for ${project.title}`}
              >
                <FaGithub size={22} />
              </motion.a>
              <motion.a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: -5 }}
                className="text-[#E1DBCC] hover:text-[#A87A58] transition"
                aria-label={`View the demo of ${project.title}`}
              >
                <FaExternalLinkAlt size={20} className="inline" />
                <span className="ml-2">View</span>
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
