import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Twitter, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
        {/* Background Accent */}
        <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-brand-900/20 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tight">
              Ready to create <br />
              <span className="text-slate-500">something extraordinary?</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              I'm always open to discussing product design work, cloud infrastructure partnerships, or mentorship opportunities.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6"
          >
            <a
              href="mailto:contact@fisohag.info"
              className="px-10 py-5 bg-white text-brand-950 font-bold text-lg rounded-full hover:bg-brand-50 transition-all flex items-center gap-3"
            >
              <Mail size={20} />
              Say Hello
            </a>
            <a
              href="#"
              className="px-10 py-5 bg-transparent border border-white/10 text-white font-medium text-lg rounded-full hover:bg-white/5 transition-all flex items-center gap-3"
            >
              Schedule a Call
              <ArrowRight size={20} />
            </a>
          </motion.div>

          <div className="mt-20 flex justify-center gap-8">
            <a href="#" className="text-slate-400 hover:text-brand-500 transition-colors">
              <Linkedin size={28} />
            </a>
            <a href="#" className="text-slate-400 hover:text-brand-500 transition-colors">
              <Twitter size={28} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;