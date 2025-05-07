import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { throttle } from 'lodash';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  const navItems = ['home', 'about', 'skills', 'projects', 'contact'];

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleScroll = throttle(() => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    setScrollProgress(progress);

    // ScrollSpy logic
    let current = 'home';
    for (const id of navItems) {
      const section = document.getElementById(id);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100) {
          current = id;
        }
      }
    }
    setActiveSection(current);
  }, 100);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <nav className="sticky top-0 z-50 bg-[#3B4A41] text-[#E1DBCC] px-6 py-4 shadow-md w-full" role="navigation">

      {/* Scroll progress bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-[#A67C5B] z-50"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Nav container */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold tracking-wider">SAHIL</h2>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-6 text-sm font-medium items-center">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className={`cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-110 border-b-2 ${activeSection === item
                    ? 'text-[#A67C5B] border-[#A67C5B]'
                    : 'border-transparent hover:text-[#A67C5B]'
                  }`}
                aria-label={`Navigate to ${item}`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#hire"
              className="ml-4 bg-[#A67C5B] hover:bg-[#91684A] text-[#E1DBCC] px-4 py-2 rounded-lg transition duration-300"
              aria-label="Hire me"
            >
              Hire Me
            </a>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button
          className="md:hidden z-50"
          onClick={toggleMenu}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden fixed top-16 left-0 w-full bg-[#3B4A41] z-40 px-6 py-4 flex flex-col gap-4"
          >
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className={`cursor-pointer transition-transform duration-300 transform hover:scale-105 border-b-2 ${activeSection === item
                    ? 'text-[#A67C5B] border-[#A67C5B]'
                    : 'border-transparent hover:text-[#A67C5B]'
                  }`}
                onClick={() => setIsOpen(false)}
                aria-label={`Navigate to ${item}`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
            <a
              href="#hire"
              className="mt-2 bg-[#A67C5B] hover:bg-[#91684A] text-[#E1DBCC] px-4 py-2 rounded-lg transition duration-300"
              onClick={() => setIsOpen(false)}
              aria-label="Hire me"
            >
              Hire Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
