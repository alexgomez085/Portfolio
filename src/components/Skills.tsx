import React from 'react';

const tools = [
  { name: 'Adobe Lightroom', desc: 'Enhanced and refined imagery', icon: '📸' },
  { name: 'Adobe Premiere Pro', desc: 'Cinematic color grading & editing', icon: '🎬' },
  { name: 'DaVinci Resolve', desc: 'Professional video look', icon: '🎨' },
  { name: 'n8n', desc: 'Automated workflows', icon: '⚙️' },
  { name: 'Generative AI', desc: 'Streamline ideation & production', icon: '🤖' },
  { name: 'NotebookLM', desc: 'Fast insight extraction', icon: '📚' },
  { name: 'Antigravity', desc: 'Agent-first IDE acting as mission control for autonomous AI agents', icon: '🚀' },
];

export default function Skills() {
  return (
    <section id="services" className="py-24 px-6 md:px-12 bg-white dark:bg-[#1A1A1A] transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 mb-16">
          <div className="md:w-1/3">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">Tools &<br />Skills</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 transition-colors duration-300">
              With a deep focus on digital content and brand communication, I transform complex ideas into clear visual experiences that drive measurable results.
            </p>
          </div>
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {tools.map((tool, i) => (
              <div
                key={i}
                style={{ '--index': i, '--count': tools.length } as React.CSSProperties}
                className="css-animate-card p-6 rounded-2xl border border-black/5 dark:border-white/5 bg-[#F6F6F6] dark:bg-[#232021] hover:bg-primary dark:hover:bg-primary hover:text-white transition-all duration-300 group cursor-pointer"
              >
                <div className="text-4xl mb-4 transform transition-transform duration-300 group-hover:scale-110 inline-block">{tool.icon}</div>
                <h3 className="text-xl font-bold mb-2">{tool.name}</h3>
                <p className="text-sm opacity-70 group-hover:opacity-90">{tool.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
