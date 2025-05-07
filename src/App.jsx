import './App.css';
import { Suspense, lazy } from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

// Lazy-loaded components
const Hero = lazy(() => import('./Components/Hero'));
const About = lazy(() => import('./Components/About'));
const Skills = lazy(() => import('./Components/Skills'));
const Projects = lazy(() => import('./Components/Projects'));
const Hire = lazy(() => import('./Components/Hire'));
const Contact = lazy(() => import('./Components/Contact'));

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Suspense fallback={<div className="text-center py-20">Loading...</div>}>
          <section id="home" className="scroll-mt-16">
            <Hero />
          </section>
          <section id="about" className="scroll-mt-16">
            <About />
          </section>
          <section id="skills" className="scroll-mt-16">
            <Skills />
          </section>
          <section id="projects" className="scroll-mt-16">
            <Projects />
          </section>
          <section id="hire" className="scroll-mt-16">
            <Hire />
          </section>
          <section id="contact" className="scroll-mt-16">
            <Contact />
          </section>
        </Suspense>
      </main>

      <Footer />
    </>
  );
}

export default App;
