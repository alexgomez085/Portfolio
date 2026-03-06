import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import LogoMarquee from './components/LogoMarquee';
import Works from './components/Works';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] dark:bg-[#121212] text-[#232021] dark:text-white font-sans selection:bg-primary selection:text-white transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <LogoMarquee />
        <Works />
        <Skills />
        <Experience />
      </main>
      <Footer />
    </div>
  );
}
