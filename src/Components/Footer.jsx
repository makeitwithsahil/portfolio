import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-[#1D2A23] text-[#E1DBCC] py-10 px-4">
      <div className="max-w-7xl mx-auto text-center space-y-6">

        {/* Contact Information */}
        <div className="text-lg font-medium">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-2xl font-semibold text-[#E1DBCC] mb-3"
          >
            Let's Connect
          </motion.h2>
          <p className="text-base text-[#CED3D3] max-w-md mx-auto">
            Feel free to reach out for collaborations, projects, or inquiries.
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-8 mb-6">
          <motion.a
            href="https://github.com/makeitwithsahil/About-Me"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my GitHub profile"
            className="text-[#E1DBCC] hover:text-[#A87A58] transition-all duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <FaGithub size={28} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/sahil-maurya-525579260/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my LinkedIn profile"
            className="text-[#E1DBCC] hover:text-[#A87A58] transition-all duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <FaLinkedin size={28} />
          </motion.a>
          <motion.a
            href="https://twitter.com/makeitwithsahil"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my Twitter profile"
            className="text-[#E1DBCC] hover:text-[#A87A58] transition-all duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <FaTwitter size={28} />
          </motion.a>
        </div>

        {/* Quick Links */}
        <div className="text-base font-medium">
          <ul className="flex justify-center space-x-6">
            <li>
              <a href="#about" className="text-[#E1DBCC] hover:text-[#A87A58] transition-colors duration-300">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="text-[#E1DBCC] hover:text-[#A87A58] transition-colors duration-300">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="text-[#E1DBCC] hover:text-[#A87A58] transition-colors duration-300">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Copyright */}
        <p className="text-sm text-[#CED3D3]">
          © {new Date().getFullYear()} Sahil Maurya. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
