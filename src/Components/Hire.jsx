import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaLinkedin, FaGithub } from 'react-icons/fa';

const HireMeSection = () => {
  const [link, setLink] = useState("#contact");

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isMobileDevice = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
      if (isMobileDevice) {
        setLink("mailto:workwiths4hil@gmail.com"); 
      }
    }
  }, []);

  return (
    <section
      id="hire"
      className="relative min-h-screen py-20 px-6 bg-[#E1DBCC] text-[#2d2d2d] overflow-hidden flex items-center justify-center"
    >
      {/* Background Animation (Floating Particles / Elements) */}
      <div className="absolute top-0 left-0 w-full min-h-screen z-10">
        <div className="animate-pulse absolute w-20 h-20 bg-[#A67C5B] opacity-5 rounded-full top-10 left-10" />
        <div className="animate-bounce absolute w-18 h-18 bg-[#85ceaa] opacity-15 rounded-full bottom-10 right-20" />
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center relative z-20"
      >
        <h2 className="text-5xl font-extrabold text-[#3B4A41] mb-6 tracking-wide">
          Let's Bring Your Ideas to Life!
        </h2>
        <p className="text-lg text-[#555] mb-8 leading-relaxed max-w-3xl mx-auto">
          Whether you're looking to develop a new product, need a skilled developer, or want to collaborate on an exciting project — I’m here to help. Reach out and let's make something amazing together!
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex justify-center gap-8 mb-10 flex-wrap">
          <motion.a
            href={link}
            whileHover={{ scale: 1.1, boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-4 bg-[#A67C5B] hover:bg-[#91684A] text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 shadow-xl transform hover:translate-x-3"
            aria-label="Email Sahil"
          >
            Hire Me <FaArrowRight />
          </motion.a>
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.1, boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-4 bg-[#3B4A41] hover:bg-[#2c3e34] text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 shadow-xl transform hover:translate-x-3"
            aria-label="View Projects"
          >
            View My Work <FaArrowRight />
          </motion.a>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center gap-8">
          <motion.a
            href="https://www.linkedin.com/in/sahil-maurya-525579260/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            className="text-[#0A66C2] hover:text-[#004182] text-3xl transition-all duration-300"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="https://github.com/makeitwithsahil/About-Me"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            className="text-[#333] hover:text-[#333] text-3xl transition-all duration-300"
            aria-label="GitHub Profile"
          >
            <FaGithub />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default HireMeSection;
