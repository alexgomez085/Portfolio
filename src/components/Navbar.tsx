import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Moon, Sun } from 'lucide-react';

export default function Navbar() {
  const [isDarkSection, setIsDarkSection] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check initial dark mode state from system preference or existing class
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark || document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    }

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleThemeChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        document.documentElement.classList.add('dark');
        setIsDarkMode(true);
      } else {
        document.documentElement.classList.remove('dark');
        setIsDarkMode(false);
      }
    };
    mediaQuery.addEventListener('change', handleThemeChange);

    const handleScroll = () => {
      const experienceSection = document.getElementById('about');
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
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    }
  };

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 transition-colors duration-300 ${
        isDarkSection || isDarkMode ? 'text-white' : 'text-[#232021]'
      }`}
    >
      <div className="text-2xl font-serif italic font-bold">Alejandro.</div>
      
      <nav className="hidden md:flex items-center gap-8 font-medium text-sm uppercase tracking-wider">
        <a href="#home" className="hover:opacity-70 transition-opacity">Home</a>
        <a href="#works" className="hover:opacity-70 transition-opacity">Projects</a>
        <a href="#services" className="hover:opacity-70 transition-opacity">Skills</a>
        <a href="#about" className="hover:opacity-70 transition-opacity">Experience</a>
      </nav>

      <div className="flex items-center gap-4">
        <button 
          onClick={toggleDarkMode} 
          className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
          aria-label="Toggle dark mode"
        >
          {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
        <a 
          href="#contact" 
          className={`px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider transition-colors ${
            isDarkSection || isDarkMode
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
