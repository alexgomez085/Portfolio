import React from 'react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section id="home" className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-[#FDFBF7] dark:bg-[#121212] transition-colors duration-300">
      {/* Background Gradient */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div className="absolute w-[70vw] h-[70vw] max-w-[700px] max-h-[700px] bg-gradient-to-tr from-primary to-[#A4232B] rounded-full blur-[120px] opacity-[0.15] -translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] bg-[#232021] dark:bg-white rounded-full blur-[120px] opacity-10 dark:opacity-5 translate-x-1/4 translate-y-1/4"></div>
      </div>

      {/* Background Text "Hey, there" */}
      <div className="absolute top-[35%] md:top-[20%] w-full flex justify-center pointer-events-none z-0">
        <motion.h1
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-[22vw] md:text-[18vw] leading-none font-serif italic text-[#232021]/15 dark:text-white/10 whitespace-nowrap flex gap-[4vw] md:gap-[6vw] transition-colors duration-300"
        >
          <span>Hey,</span>
          <span>there</span>
        </motion.h1>
      </div>

      {/* Center Image */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[100%] md:w-[80%] max-w-[500px] z-10 pointer-events-none flex justify-center"
      >
        <img
          src="https://onecdn.io/media/9d0db6d1-52df-47a1-9e67-6929905fb868/lg"
          alt="Alejandro"
          className="w-full h-auto object-cover rounded-t-[250px]"
          style={{ maskImage: 'linear-gradient(to top, transparent 0%, black 20%)', WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 20%)' }}
        />
      </motion.div>

      {/* Left Text: I AM ALEJANDRO */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        className="absolute bottom-[30%] md:bottom-[10%] left-4 md:left-12 z-20 flex flex-col"
      >
        <span className="text-[10vw] md:text-[7vw] leading-[0.85] font-black uppercase tracking-tighter text-[#232021] dark:text-white transition-colors duration-300">I AM</span>
        <span className="text-[12vw] md:text-[9vw] leading-[0.85] font-black uppercase tracking-tighter text-[#232021] dark:text-white transition-colors duration-300">ALEJANDRO</span>
      </motion.div>

      {/* Right Text: AI AGENT BUILDER */}
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        className="absolute bottom-[15%] md:bottom-[10%] right-4 md:right-12 z-20 flex flex-col text-right"
      >
        <span className="text-[6.5vw] md:text-[4vw] leading-[0.85] font-black uppercase tracking-tighter text-[#232021] dark:text-white transition-colors duration-300">AI AGENT</span>
        <span className="text-[6.5vw] md:text-[4vw] leading-[0.85] font-black uppercase tracking-tighter text-[#232021] dark:text-white transition-colors duration-300">BUILDER &amp;</span>
        <span className="text-[6.5vw] md:text-[4vw] leading-[0.85] font-black uppercase tracking-tighter text-[#232021] dark:text-white transition-colors duration-300">CREATOR</span>
      </motion.div>

      {/* Floating Badge Left */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute top-[15%] md:top-[45%] left-1/2 -translate-x-1/2 md:translate-x-0 md:left-12 z-20 bg-white/80 dark:bg-black/80 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-3 shadow-sm border border-black/5 dark:border-white/10 w-max transition-colors duration-300"
      >
        <div className="relative flex items-center justify-center w-4 h-4">
          <div className="absolute w-full h-full bg-primary rounded-full animate-ping opacity-75"></div>
          <div className="relative w-2 h-2 bg-primary rounded-full"></div>
        </div>
        <span className="text-xs md:text-sm font-medium">Available for new opportunities</span>
      </motion.div>

      {/* Floating Text Right */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute top-[30%] md:top-[45%] right-6 md:right-12 z-20 max-w-[150px] md:max-w-[200px] text-right hidden sm:block"
      >
        <p className="text-xs md:text-sm font-medium leading-tight text-[#232021] dark:text-white/80 transition-colors duration-300">
          Specialized in Generative AI, Content Creation, and Videography.
        </p>
      </motion.div>
    </section>
  );
}
