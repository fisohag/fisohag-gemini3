import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, BarChart3, Rocket, Terminal, Layers, Globe } from 'lucide-react';
import { Skill } from '../types';

const expertise: Skill[] = [
  {
    name: "Cloud Architecture",
    icon: <Cloud className="w-6 h-6" />,
    description: "Designing scalable, resilient, and secure cloud infrastructures using AWS and Azure ecosystems."
  },
  {
    name: "Data Analytics",
    icon: <BarChart3 className="w-6 h-6" />,
    description: "Transforming raw data into actionable insights through advanced visualization and predictive modeling."
  },
  {
    name: "Startup Operations",
    icon: <Rocket className="w-6 h-6" />,
    description: "Navigating the 0-to-1 journey, optimizing operational workflows, and scaling tech ventures."
  },
  {
    name: "Full Stack Engineering",
    icon: <Terminal className="w-6 h-6" />,
    description: "Building robust applications with modern frameworks like React, Node.js, and Python."
  }
];

const Expertise: React.FC = () => {
  return (
    <section id="expertise" className="py-24 md:py-32 relative bg-brand-950">
      <div className="container mx-auto px-6">
        <div className="mb-16 md:mb-24">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-brand-500 font-medium tracking-wider uppercase text-sm"
          >
            What I Do
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-4xl md:text-5xl font-display font-bold text-white max-w-2xl"
          >
            Bridging the gap between <span className="text-slate-500">complex engineering</span> and <span className="text-slate-500">business strategy</span>.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertise.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group p-8 rounded-2xl bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.06] hover:border-white/10 transition-all duration-300"
            >
              <div className="mb-6 p-3 bg-brand-500/10 w-fit rounded-lg text-brand-500 group-hover:text-brand-400 group-hover:bg-brand-500/20 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 font-display">{item.name}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats Strip */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-12">
            {[
                { label: "Years Experience", value: "8+" },
                { label: "Projects Shipped", value: "40+" },
                { label: "Startups Founded", value: "2" },
                { label: "Happy Clients", value: "100%" }
            ].map((stat, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + (i * 0.1) }}
                    className="text-center md:text-left"
                >
                    <div className="text-3xl md:text-4xl font-bold font-display text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-slate-500 uppercase tracking-wide">{stat.label}</div>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;