import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#FDFBF7] dark:bg-[#121212] py-12 px-6 md:px-12 border-t border-black/10 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-2xl font-serif italic font-bold text-[#232021] dark:text-white transition-colors duration-300">Alejandro.</div>

        <div className="flex flex-col items-center md:items-start gap-2 text-sm font-medium text-center md:text-left">
          <a href="mailto:agomezc@stud.hs-offenburg.de" className="hover:text-primary transition-colors">agomezc@stud.hs-offenburg.de</a>
          <p className="text-gray-500 dark:text-gray-400 transition-colors duration-300">Alois Hirt Straße, 25, 78183 Hüfingen</p>
        </div>

        <div className="flex gap-4">
          <a href="https://www.linkedin.com/in/alejandro-g%C3%B3mez-cano-787aa51b1/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-[#232021] dark:bg-white text-white dark:text-[#232021] flex items-center justify-center hover:bg-primary dark:hover:bg-primary dark:hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            in
          </a>
          <a href="https://www.instagram.com/studyalex.ai/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-[#232021] dark:bg-white text-white dark:text-[#232021] flex items-center justify-center hover:bg-primary dark:hover:bg-primary dark:hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            ig
          </a>
          <a href="https://www.tiktok.com/@studyalex.ai" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-[#232021] dark:bg-white text-white dark:text-[#232021] flex items-center justify-center hover:bg-primary dark:hover:bg-primary dark:hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            tk
          </a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 text-center text-sm text-gray-400 dark:text-gray-600 transition-colors duration-300">
        © 2025 Alejandro Gómez Cano. All rights reserved.
      </div>
    </footer>
  );
}
