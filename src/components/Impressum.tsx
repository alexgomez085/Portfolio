import React from 'react';

export default function Impressum() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] dark:bg-[#121212] transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-6 py-24">
        <a href="#home" className="text-primary hover:underline text-sm font-medium mb-8 inline-block">
          &larr; Back
        </a>
        
        <h1 className="text-2xl font-bold text-[#232021] dark:text-white mb-4">Impressum</h1>
        
        <h2 className="text-lg font-bold text-[#232021] dark:text-white mt-8 mb-2">Angaben gemäß § 5 DDG</h2>
        <p className="text-[#232021]/80 dark:text-white/70 leading-relaxed text-base">
          Alejandro Gómez Cano<br />
          Alois Hirt Straße 25<br />
          78183 Hüfingen
        </p>

        <h2 className="text-lg font-bold text-[#232021] dark:text-white mt-8 mb-2">Kontakt</h2>
        <p className="text-[#232021]/80 dark:text-white/70 leading-relaxed text-base">
          E-Mail: agomezc@stud.hs-offenburg.de
        </p>

        <h2 className="text-lg font-bold text-[#232021] dark:text-white mt-8 mb-2">Hinweis</h2>
        <p className="text-[#232021]/80 dark:text-white/70 leading-relaxed text-base">
          Dies ist eine private Portfolio-Website ohne kommerzielle Absicht im Sinne des § 5 DDG.
        </p>
      </div>
    </div>
  );
}
