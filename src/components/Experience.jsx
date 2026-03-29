import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'Web Development Intern',
    company: 'Tech Innovators',
    dur: 'Jan 2025 - Present',
    desc: 'Contributing to modern front-end architectures using React.js and Tailwind CSS. Implementing dynamic user interfaces for varied clients and ensuring optimal performance.',
  },
  {
    role: 'Junior WordPress Developer',
    company: 'Creative Studio',
    dur: 'Jun 2024 - Dec 2024',
    desc: 'Developed and maintained highly customized WordPress themes. Enhanced site performance, handled SEO integrations, and delivered responsive designs.',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-slate-400 text-lg">My professional journey so far.</p>
        </motion.div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-accent-cyan before:to-accent-purple before:via-transparent">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              {/* Timeline marker */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white glass-dark shadow-neon-cyan shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 bg-primary z-10">
                <div className="w-3 h-3 bg-accent-cyan rounded-full animate-pulse-slow shadow-neon-cyan" />
              </div>
              
              {/* Card */}
              <motion.div 
                initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6 }}
                className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-dark p-6 rounded-2xl border border-white/10 hover:border-accent-cyan/50 transition-colors"
              >
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-bold text-xl text-white">{exp.role}</h3>
                  <span className="text-xs font-semibold text-accent-cyan py-1 px-3 bg-accent-cyan/10 rounded-full">{exp.dur}</span>
                </div>
                <h4 className="text-accent-purple font-medium mb-4 tracking-wide">{exp.company}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{exp.desc}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
