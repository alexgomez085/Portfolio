import React from 'react';

export default function Marquee() {
  const items = [
    "Generative AI", "•", "Content Creation", "•", "Videography", "•", "Social Media", "•", "Design Thinking", "•"
  ];

  // Duplicate enough times to ensure seamless loop with -50% translation
  const duplicatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className="w-full bg-primary text-white py-4 overflow-hidden flex whitespace-nowrap border-y border-black/10 dark:border-white/10 transition-colors duration-300 group">
      <div className="animate-[marquee_60s_linear_infinite] group-hover:[animation-play-state:paused] flex w-max items-center text-xl md:text-2xl font-black uppercase tracking-widest">
        {duplicatedItems.map((item, i) => (
          <span key={i} className="mx-4">{item}</span>
        ))}
      </div>
    </div>
  );
}
