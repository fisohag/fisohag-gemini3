import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Cloud, Database } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="overview" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Gradients - Animated */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3], 
          rotate: [0, 90, 0] 
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-500/20 blur-[120px] rounded-full pointer-events-none" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          x: [0, -50, 0],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-900/10 blur-[100px] rounded-full pointer-events-none" 
      />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm hover:bg-white/10 transition-colors cursor-default"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
          </span>
          <span className="text-sm font-medium text-brand-100 tracking-wide">Available for new ventures</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.1] tracking-tight mb-8"
        >
          Architecting the <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 via-blue-400 to-white animate-text">
            Digital Future
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          I am <span className="text-white font-semibold">Fakhrul Islam</span>.
          <br className="hidden md:block" />
           Cloud Architect, Data Analyst, & Tech Operator building scalable ecosystems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group px-8 py-4 bg-white text-brand-950 font-semibold rounded-full hover:bg-brand-50 relative overflow-hidden transition-all flex items-center gap-2"
          >
            Explore Projects
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-transparent border border-white/20 text-white font-medium rounded-full hover:bg-white/5 transition-all"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Floating Icons / Stats - Decorative */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, -20, 0] }}
          transition={{ delay: 1, duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-10 hidden lg:block opacity-20 text-brand-300"
        >
            <Cloud size={64} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 20, 0] }}
          transition={{ delay: 1.2, duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-10 hidden lg:block opacity-20 text-blue-300"
        >
            <Database size={64} />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div 
          animate={{ height: [0, 64, 0], y: [0, 0, 64], opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] bg-gradient-to-b from-transparent via-brand-500 to-transparent"
        ></motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;