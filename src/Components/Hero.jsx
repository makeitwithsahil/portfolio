import { useEffect, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { FaChevronDown } from 'react-icons/fa';

export default function Hero() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const contentTimer = setTimeout(() => setShowContent(true), 300);
    return () => clearTimeout(contentTimer);
  }, []);

  return (
    <section className="min-h-screen w-full min-w-screen flex flex-col items-center justify-center bg-[#fdf8ec] px-4 relative overflow-hidden">

      {/* Main Content */}
      <div
        className={`text-center max-w-3xl transition-all duration-1000 ease-out ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
      >
        {/* Name */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-gray-900 mb-3">
          Hi, I'm <span className="text-[#a06645]">Sahil</span>
        </h1>

        <h2 className="text-xl sm:text-2xl text-gray-600 mb-6 h-10 font-medium">
          <Typewriter
            words={['Front End Developer', 'Content Creator', 'Back End Developer', 'UI/UX Designer', 'Full Stack Developer']}
            loop
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={40}
            delaySpeed={1500}
            aria-live="polite"
          />
        </h2>

        <p className="text-md sm:text-lg text-gray-700 mb-6 leading-relaxed px-2">
          I build trendy, fast, and user-friendly web apps with a passion for clean design and maintainable code. Let's create experiences people remember.
        </p>

        <p className="italic text-gray-500 text-sm mb-10">
          “Design isn’t just what it looks like, it’s how it works.” — Steve Jobs
        </p>

        <div className="flex justify-center gap-4 mb-10">
          <a
            download
            target="_blank"
            href="/Sahil_Maurya_Resume.pdf"
            className="bg-[#a06645] hover:bg-[#864e34] text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105"
          >
            Download Resume
          </a>
          <a
            href="#contact"
            className="border border-[#a06645] text-[#a06645] hover:bg-[#f3ebe3] font-semibold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105"
          >
            Contact Me
          </a>
        </div>

        <div className="flex mt-36 justify-center animate-bounce text-[#a06645]">
          <a href="#about" className="smooth-scroll">
            <FaChevronDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
