import React, { useMemo, useState, useRef, Suspense } from 'react';
import { motion, useInView } from 'framer-motion';

const Tilt = React.lazy(() => import('react-parallax-tilt'));

const Skills = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.3, once: false });

  const skillCategories = useMemo(() => ({
    "Frontend": [
      "HTML5", "CSS3", "JavaScript", "React", "React Router",
      "Redux", "Tailwind CSS", "Bootstrap", "Next.js", "React Native"
    ],
    "Backend & Dev Tools": [
      "Node.js", "Express.js", "NPM", "Firebase",
      "MongoDB", "Git", "GitHub", "Vercel"
    ],
    "Scripting & Automation": [
      "PowerShell", "Python", "Bash"
    ],
    "Design & Creativity": [
      "Figma", "Adobe Photoshop", "Adobe After Effects", "Adobe Lightroom"
    ]
  }), []);

  const glowStyle = (active, color = '#A87A58') => active ? {
    color,
    textShadow: `0 0 1px ${color}, 0 0 1px ${color}`,
    transition: 'all 0.4s ease-in-out'
  } : {};

  return (
    <section
      ref={sectionRef}
      className="bg-[#E1DBCC] text-[#1D2A23] py-20 px-6 md:px-20 overflow-hidden"
    >
      {/* Section Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: false, amount: 0.4 }}
      >
        <h2
          className="text-3xl md:text-4xl font-bold mb-2 transition-all"
          style={glowStyle(isInView)}
        >
          Skills
        </h2>
        <p className="text-lg text-[#A87A58]">What I love building with</p>
      </motion.div>

      {/* Skill Categories */}
      <div className="flex flex-col gap-16 max-w-6xl mx-auto">
        {Object.entries(skillCategories).map(([category, skills], idx) => (
          <div key={idx}>
            {/* Category Heading */}
            <h3
              className="text-xl font-semibold mb-6"
              style={glowStyle(hoveredCategory === category)}
            >
              {category}
            </h3>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.03, duration: 0.4 }}
                  viewport={{ once: false, amount: 0.2 }}
                  onMouseEnter={() => setHoveredCategory(category)}
                  onMouseLeave={() => setHoveredCategory(null)}
                >
                  <Suspense fallback={<div>Loading...</div>}>
                    <Tilt
                      glareEnable
                      glareMaxOpacity={0.1}
                      tiltMaxAngleX={10}
                      tiltMaxAngleY={10}
                      scale={1.05}
                    >
                      <div className="bg-[#1D2A23] text-[#E1DBCC] px-4 py-5 rounded-xl shadow-md hover:shadow-lg text-center transition-transform duration-300 hover:scale-105">
                        <p className="text-sm font-medium tracking-wide">{skill}</p>
                      </div>
                    </Tilt>
                  </Suspense>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
