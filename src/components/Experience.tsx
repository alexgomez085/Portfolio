import React from 'react';
import { motion } from 'motion/react';

const experiences = [
  {
    role: 'Working Student',
    company: 'OGFLab',
    date: 'Apr 2025 - Present',
    desc: 'Entrepreneurship related content for social media, advising students on social media.'
  },
  {
    role: 'Student Content Creator',
    company: 'Stoneline',
    date: 'Apr 2024 - Apr 2025',
    desc: 'Creation of food related content, presentation of products, filming of demonstrational videos.'
  },
  {
    role: 'Student Videographer',
    company: 'Marketing & Tourismus Konstanz',
    date: 'Dec 2022 - Sep 2023',
    desc: 'Content Creation, Event filming and contact with working partners.'
  },
  {
    role: 'Working Student',
    company: 'KIM.LR',
    date: 'Oct 2022 - Sep 2023',
    desc: 'Lecture recording, brainstorm ideas and social media management of university podcast.'
  }
];

export default function Experience() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-[#232021] dark:bg-[#0A0A0A] text-white transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-16 text-center">Experience</h2>
        
        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:grid md:grid-cols-4 gap-8 items-start relative">
                {/* Timeline line for desktop */}
                <div className="hidden md:block absolute left-[24.5%] top-0 bottom-[-3rem] w-px bg-white/20"></div>
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-[24.5%] top-2 w-3 h-3 -translate-x-[5px] rounded-full bg-primary"></div>
                
                {/* Mobile timeline line & dot */}
                <div className="md:hidden absolute left-0 top-2 bottom-[-3rem] w-px bg-white/20"></div>
                <div className="md:hidden absolute left-0 top-2 w-3 h-3 -translate-x-[5px] rounded-full bg-primary"></div>

                <div className="md:col-span-1 md:text-right mb-2 md:mb-0 pt-1">
                  <span className="text-primary font-bold text-sm tracking-widest uppercase">{exp.date}</span>
                </div>
                <div className="md:col-span-3 md:pl-12">
                  <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                  <h4 className="text-lg text-white/60 mb-4">{exp.company}</h4>
                  <p className="text-white/80 leading-relaxed">{exp.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
