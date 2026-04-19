import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Moon, Sun } from 'lucide-react';

export default function Navbar() {
  const [isHydrated, setIsHydrated] = useState(false);
  useEffect(() => { setIsHydrated(true); }, []);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkSection, setIsDarkSection] = useState(false);

  // Initialize dark mode based on system preference
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleThemeChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };
    mediaQuery.addEventListener('change', handleThemeChange);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Check if we are over a dark section
      const experienceSection = document.getElementById('experience');
      if (experienceSection) {
        const rect = experienceSection.getBoundingClientRect();
        // Check if the experience section is currently under the navbar
        // Navbar is roughly 80px tall
        if (rect.top <= 80 && rect.bottom >= 80) {
          setIsDarkSection(true);
        } else {
          setIsDarkSection(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      mediaQuery.removeEventListener('change', handleThemeChange);
    };
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <motion.header
      initial={isHydrated ? { y: -100, opacity: 0 } : false}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-4 left-4 right-4 md:left-12 md:right-12 z-50 flex items-center justify-between px-6 py-4 border border-black/5 dark:border-white/10 backdrop-blur-md rounded-full transition-colors duration-300 ${isDarkSection || isDarkMode ? 'bg-black/80 text-white' : 'bg-white/80 text-[#232021]'
        }`}
    >
      <div className="text-2xl font-serif font-bold">Alejandro.</div>

      <nav className="hidden md:flex items-center gap-8 font-medium text-sm tracking-wider">
        <a href="#home" className="hover:opacity-70 transition-opacity duration-300">Home</a>
        <a href="#about" className="hover:opacity-70 transition-opacity duration-300">About</a>
        <a href="#services" className="hover:opacity-70 transition-opacity duration-300">Skills</a>
        <a href="#works" className="hover:opacity-70 transition-opacity duration-300">Projects</a>
        <a href="#ai-automation" className="hover:opacity-70 transition-opacity duration-300">AI</a>
        <a href="#experience" className="hover:opacity-70 transition-opacity duration-300">Experience</a>
      </nav>

      <div className="flex items-center gap-4">
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors duration-300 cursor-pointer"
          aria-label="Toggle dark mode"
        >
          {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
        <a
          href="#contact"
          className={`px-6 py-2.5 rounded-full text-sm font-bold tracking-wider transition-colors duration-300 cursor-pointer ${isDarkSection || isDarkMode
            ? 'bg-white text-[#232021] hover:bg-primary hover:text-white'
            : 'bg-[#232021] text-white hover:bg-primary'
            }`}
        >
          Contact
        </a>
      </div>
    </motion.header>
  );
}
