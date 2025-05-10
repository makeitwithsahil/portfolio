import React, { useRef } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaArrowDown, FaChevronDown } from 'react-icons/fa';
import { motion, useInView } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { TypeAnimation } from 'react-type-animation';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  return (
    <section
      ref={ref}
      className="w-full bg-[#E1DBCC] text-[#1D2A23] py-20 px-14 md:px-20 flex flex-col md:flex-row items-center justify-between relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden z-0">
        {['⚙️', '💻', '🧠'].map((icon, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6 + i, repeat: Infinity }}
            className={`absolute text-[#A87A58] opacity-20 text-5xl ${i === 0
              ? 'top-10 left-1/4'
              : i === 1
                ? 'top-40 right-20'
                : 'bottom-10 left-10'
              }`}
          >
            {icon}
          </motion.div>
        ))}
      </div>

      <motion.div
        className="z-10 mb-10 md:mb-0"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1 }}
      >
        <Tilt glareEnable={true} glareMaxOpacity={0.4} scale={1.05}>
          <img
            src="/pfp.jpg"
            alt="Profile"
            className="w-48 h-48 object-cover rounded-full border-4 border-[#A87A58] shadow-xl transition duration-300 hover:scale-105"
          />
        </Tilt>
      </motion.div>

      <motion.div
        className="z-10 text-center md:text-left max-w-xl"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1.2 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2"><span className="text-[#A87A58]">Sahil Maurya</span>
        </h2>

        <TypeAnimation
          sequence={[
            'Full Stack Developer',
            2000,
            'Ai Enthusiast',
            2000,
            'Beginner Ethical Hacker',
            2000,
            '18k+ Followers on Social Media',
            3000,
          ]}
          wrapper="span"
          speed={50}
          className="text-xl text-[#38483F] mb-6 block"
          repeat={Infinity}
        />

        <p>
          I'm a <span className="font-semibold text-[#A87A58]">Full Stack Developer</span> who’s passionate about transforming ideas into meaningful digital experiences. I craft responsive user interfaces using <span className="font-semibold text-[#A87A58]">React</span>, build reliable and scalable backends with <span className="font-semibold text-[#A87A58]">Node.js</span> and <span className="font-semibold text-[#A87A58]">MongoDB</span>, and always stay curious about the latest tools and technologies.

          Beyond just writing code, I genuinely enjoy solving problems, working with people, and bringing creative visions to life — whether it's for a freelance project, a growing startup, or as part of a collaborative team. If you're looking for a developer who's skilled, dedicated, and easy to work with — I'd love to connect!
        </p>


        <div className="flex flex-wrap gap-4 mt-10 mb-6 justify-center md:justify-start">
          <motion.a
            whileTap={{ scale: 0.95 }}
            href="#hire"
            className="border-2 border-[#A87A58] text-[#A87A58] px-6 py-2 rounded-full hover:bg-[#A87A58] hover:text-white transition transform hover:scale-105 shadow-sm"
          >
            Hire Me
          </motion.a>
          <motion.a
            whileTap={{ scale: 0.95 }}
            href="#projects"
            className="bg-[#38483F] text-white px-6 py-2 rounded-full hover:bg-[#1c2f22] transition transform hover:scale-105 shadow-sm"
          >
            My Work
          </motion.a>
        </div>

        <div className="flex justify-center md:justify-start gap-6 text-2xl text-[#1D2A23]">
          {[FaGithub, FaLinkedin, FaTwitter, FaEnvelope].map((Icon, i) => (
            <motion.a
              key={i}
              href={
                i === 0
                  ? 'https://github.com/makeitwithsahil/About-Me'
                  : i === 1
                    ? 'https://linkedin.com/in/sahil-maurya-525579260/'
                    : i === 2
                      ? 'https://twitter.com/makeitwithsahil'
                      : 'mailto:workwiths4hil@gmail.com?subject=Let%27s%20Work%20Together&body=Hi%20Sahil,'
              }
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: '#A87A58' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Icon />
            </motion.a>
          ))}

        </div>
      </motion.div>
    </section>
  );
};

export default About;
