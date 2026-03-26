import React from 'react';

const logos = [
  { src: 'https://onecdn.io/media/604f9b3c-0209-4b0f-a404-7e31eb778012/lg', alt: 'Universität Konstanz' },
  { src: 'https://onecdn.io/media/06ead327-0628-440c-bbb0-e134c091caee/lg', alt: 'OGF LAB' },
  { src: 'https://onecdn.io/media/9ff0ff1f-68fc-406c-b703-c895c23d550a/lg', alt: 'Marketing & Tourismus Konstanz' },
  { src: 'https://onecdn.io/media/c0db80b6-6ca3-4905-87c4-9bc9a3b82e45/lg', alt: 'STONELINE' },
];

export default function LogoMarquee() {
  // Duplicate logos to create a seamless loop
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <section className="w-full bg-white dark:bg-[#1A1A1A] py-16 overflow-hidden flex flex-col items-center border-b border-black/5 dark:border-white/5 transition-colors duration-300">
      <p className="text-sm font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-10 transition-colors duration-300">Working References</p>

      {/* Fade edges */}
      <div className="relative w-full max-w-7xl mx-auto flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] dark:[mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)] group">
        <div className="flex w-max animate-[marquee_30s_linear_infinite] group-hover:[animation-play-state:paused]">
          {duplicatedLogos.map((logo, i) => (
            <div key={i} className="flex items-center justify-center w-[200px] md:w-[300px] px-4 md:px-8">
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-8 md:max-h-16 w-auto object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
