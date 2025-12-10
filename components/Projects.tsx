import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: 'jamuna-valley',
    title: 'Jamuna Valley',
    category: 'Tech Ecosystem',
    description: 'A pioneering tech ecosystem initiative designed to foster innovation and startup culture in the region. Features a community hub, incubator resources, and event management systems.',
    image: 'https://picsum.photos/seed/jamuna/800/600',
    tech: ['Next.js', 'Tailwind', 'Supabase', 'Vercel'],
    link: '#'
  },
  {
    id: 'gradmate',
    title: 'GradMate.ai',
    category: 'EdTech AI Platform',
    description: 'An AI-powered career assistant helping graduates navigate the job market. Provides resume analysis, interview prep, and personalized career pathing using LLMs.',
    image: 'https://picsum.photos/seed/gradmate/800/600',
    tech: ['React', 'Python', 'OpenAI API', 'AWS'],
    link: '#'
  },
  {
    id: 'cloud-monitor',
    title: 'Sentinal Cloud',
    category: 'Infrastructure',
    description: 'Real-time multi-cloud monitoring dashboard providing unified visibility across AWS and Azure resources with automated alert thresholds.',
    image: 'https://picsum.photos/seed/tech/800/600',
    tech: ['Vue.js', 'Go', 'Prometheus', 'Grafana'],
    link: '#'
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-black/30 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
        >
          <div>
            <span className="text-brand-500 font-medium tracking-wider uppercase text-sm">Selected Work</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-display font-bold text-white">
              Featured Projects
            </h2>
          </div>
          <a href="#" className="text-slate-400 hover:text-white flex items-center gap-2 transition-colors border-b border-transparent hover:border-white pb-1">
            View Github <Github size={16} />
          </a>
        </motion.div>

        <div className="flex flex-col gap-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Image Section */}
              <div className="w-full lg:w-3/5 group relative rounded-2xl overflow-hidden aspect-video border border-white/10 bg-white/5">
                <div className="absolute inset-0 bg-brand-900/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 filter grayscale group-hover:grayscale-0"
                />
              </div>

              {/* Content Section */}
              <div className="w-full lg:w-2/5 flex flex-col justify-center">
                <span className="text-brand-500 text-sm font-medium mb-3">{project.category}</span>
                <h3 className="text-3xl font-display font-bold mb-4">{project.title}</h3>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 text-xs font-medium bg-white/5 text-slate-300 rounded-full border border-white/5">
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-white font-medium hover:text-brand-400 transition-colors w-fit"
                >
                  View Case Study <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;