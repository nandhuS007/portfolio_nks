import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="glass-dark rounded-3xl p-10 md:p-16 border border-white/5 relative"
        >
          {/* Decorative neon elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent-cyan/20 blur-3xl rounded-full" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent-purple/20 blur-3xl rounded-full" />

          <h2 className="text-4xl md:text-5xl font-bold mb-8 font-sans text-white text-center">
            About <span className="text-gradient">Me</span>
          </h2>

          <div className="text-slate-300 text-lg md:text-xl leading-relaxed space-y-6">
            <p>
              Hi, I'm Nandhakumar S, a passionate and dedicated Frontend Developer. I specialize in building responsive, modern, and highly interactive user interfaces. 
            </p>
            <p>
              My journey into web development has equipped me with a robust understanding of core modern web technologies, ranging from raw HTML/CSS/JS to advanced libraries like React.js and Tailwind CSS.
            </p>
            <p>
              I thrive on creating visually stunning and dynamic designs that catch the eye while maintaining flawless functionality layout, optimizing for performance, SEO, and smooth accessibility. Every project I touch is built to stand out and feel premium.
            </p>
          </div>
          
        </motion.div>
      </div>
    </section>
  );
};

export default About;
