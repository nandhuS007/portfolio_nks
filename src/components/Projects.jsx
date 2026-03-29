import React from 'react';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'Food Order Website',
    description: 'A dynamic web application for browsing and ordering food online, featuring an intuitive UI and smooth user experience.',
    tech: ['React.js', 'Tailwind CSS', 'Framer Motion'],
    live: 'https://food-oder-site-nu.vercel.app/',
    github: '#',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
  },
  {
    title: 'Travel Guide Website',
    description: 'An interactive travel platform showcasing beautiful destinations and tailored travel tips with parallax scrolling.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    live: 'https://travel-gider-z22r.vercel.app/',
    github: '#',
    image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
  },
  {
    title: 'Students Table Management',
    description: 'A React-based CRUD application for managing student data flawlessly within an in-memory or backend state.',
    tech: ['React', 'Tailwind', 'Context API'],
    live: 'https://studentstablepro.netlify.app/',
    github: '#',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
  },
  {
    title: 'Earth Movers Business',
    description: 'A professional business website for construction machinery and earthmover services designed to convert leads.',
    tech: ['React.js', 'Framer Motion', 'Tailwind'],
    live: 'https://arnearthmoverss.netlify.app/',
    github: '#',
    image: '/earth-movers-mockup.png',
  },
  {
    title: 'Fitness Website (Fit-Hit)',
    description: 'A high-energy, motivational fitness coaching platform. Fully responsive and loaded with premium animations.',
    tech: ['React.js', 'Node.js', 'Tailwind CSS'],
    live: 'https://fit-hit.netlify.app/',
    github: '#',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
  },
];

const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ delay: index * 0.1, duration: 0.6 }}
  >
    <Tilt
      options={{ max: 15, scale: 1.02, speed: 400 }}
      className="glass-dark p-6 rounded-2xl border border-white/5 h-full flex flex-col group cursor-pointer hover:shadow-neon-cyan transition-shadow duration-300"
    >
      {/* Image Preview */}
      <div className="relative w-full h-48 mb-6 overflow-hidden rounded-xl border border-white/10">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 blur-[1px] group-hover:blur-0"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-primary/40 group-hover:bg-transparent transition-colors duration-300" />
      </div>

      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accent-cyan transition-colors">
        {project.title}
      </h3>
      
      <p className="text-slate-400 mb-6 flex-grow">{project.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-6 mt-auto">
        {project.tech.map((t) => (
          <span key={t} className="text-xs font-semibold px-3 py-1 bg-accent-cyan/10 text-accent-cyan rounded-full border border-accent-cyan/20">
            {t}
          </span>
        ))}
      </div>
      
      <div className="flex items-center gap-4">
        <a 
          href={project.live} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-accent-purple/20 text-accent-purple hover:bg-accent-purple hover:text-white rounded-lg transition-colors font-medium text-sm"
        >
          <ExternalLink size={16} /> Live Demo
        </a>
        <a 
          href={project.github} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 glass hover:bg-white/10 text-slate-300 rounded-lg transition-colors font-medium text-sm"
        >
          <FaGithub size={16} /> GitHub
        </a>
      </div>
    </Tilt>
  </motion.div>
);

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl">
            Some of my most recent works showcasing my expertise in frontend development and passion for aesthetic design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, idx) => (
            <ProjectCard key={proj.title} project={proj} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
