import React, { useState } from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    title: 'Password Manager',
    description: 'A minimal and fast local storage-based password manager app with clean UI',
    tech: ['React', 'Tailwind CSS', 'Local Storage'],
    github: 'https://github.com/makeitwithsahil/PassHive',
    demo: 'https://passhive.vercel.app/',
    coverImage: '/PasHive-thumbnail.webp',
    category: 'Frontend',
  },
  {
    title: 'ToDo App',
    description: 'DoIT is a clean and lightweight task manager built to help you stay focused without distractions.',
    tech: ['React', 'Tailwind CSS', 'PWA' , 'Framer Motion', 'Local Storage'],
    github: 'https://github.com/makeitwithsahil/DoIT',
    demo: 'https://doit-sahilmaurya.vercel.app/',
    coverImage: '/DoIT-cover.jpg',
    category: 'Frontend',
  },
  {
    title: 'Social Media Agency Website',
    description: 'A sleek and modern website for a social media agency, showcasing services and portfolio.',
    tech: ['React', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/makeitwithsahil/Brancha',
    demo: 'https://brancha.vercel.app/',
    coverImage: '/brancha-cover.webp',
    category: 'Frontend',
  },
];

const categories = ['Frontend', 'Backend', 'Full Stack'];

const ProjectSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('Frontend');

  const filteredProjects = projects.filter(
    (p) => p.category === selectedCategory
  );

  return (
    <section
      id="projects"
      className="bg-[#E1DBCC] text-[#1D2A23] py-20 px-6 md:px-20 relative overflow-hidden"
    >
      {/* Background Animated Elements */}
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

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-12 text-center"
      >
        My <span className="text-[#A87A58]">Projects</span>
      </motion.h2>

      {/* Category Buttons */}
      <div className="flex justify-center gap-4 mb-10">
        {categories.map((cat) => (
          <motion.button
            key={cat}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
              selectedCategory === cat
                ? 'bg-[#A87A58] text-white shadow-lg'
                : 'bg-transparent border border-[#A87A58] text-[#A87A58]'
            }`}
          >
            {cat}
          </motion.button>
        ))}
      </div>

      {/* Project Cards */}
      <motion.div
        layout
        className="max-w-[2000px] m-auto grid md:grid-cols-2 gap-12"
      >
        <AnimatePresence mode="wait">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.015, boxShadow: '0px 12px 30px rgba(0,0,0,0.2)' }}
                className="group bg-[#38483F] text-[#E1DBCC] rounded-2xl shadow-xl p-6 md:p-8 transition-all duration-300 relative overflow-hidden"
              >
                {/* Overlay */}
                <div className="absolute -inset-0.5 bg-gradient-to-br from-[#A87A58] to-transparent opacity-0 group-hover:opacity-20 transition-all duration-300 rounded-2xl pointer-events-none" />

                {/* Image */}
                <motion.div
                  className="w-full h-52 md:h-72 bg-cover bg-center rounded-lg mb-6"
                  style={{ backgroundImage: `url(${project.coverImage})` }}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Title */}
                <h3 className="text-2xl font-semibold mb-3 text-[#c3a48d]">{project.title}</h3>

                {/* Description */}
                <p className="mb-5 text-sm text-[#e8e3d8] leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 text-xs mb-6">
                  {project.tech.map((tech, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.08 }}
                      className="bg-[#1D2A23] text-[#E1DBCC] px-3 py-1 rounded-full shadow-sm"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="flex items-center gap-2 bg-[#1D2A23] px-4 py-2 rounded-lg hover:bg-[#A87A58] hover:text-white transition-all"
                  >
                    <FaGithub size={18} /> GitHub
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="flex items-center gap-2 border border-[#A87A58] px-4 py-2 rounded-lg hover:bg-[#A87A58] hover:text-white transition-all"
                  >
                    <FaExternalLinkAlt size={16} /> View Live
                  </motion.a>
                </div>
              </motion.div>
            ))
          ) : (
            <motion.p
              key="no-projects"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="col-span-full text-center text-lg text-[#1D2A23] font-medium"
            >
              There is no projects
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default ProjectSection;
