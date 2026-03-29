import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaReact, FaJs, FaJava, FaWordpress, FaMicrosoft } from 'react-icons/fa';

const skills = [
  { name: 'HTML5', icon: <FaHtml5 size={40} className="text-[#E34F26]" />, color: 'shadow-[#E34F26]/50' },
  { name: 'CSS3', icon: <FaCss3Alt size={40} className="text-[#1572B6]" />, color: 'shadow-[#1572B6]/50' },
  { name: 'JavaScript', icon: <FaJs size={40} className="text-[#F7DF1E]" />, color: 'shadow-[#F7DF1E]/50' },
  { name: 'Java', icon: <FaJava size={40} className="text-[#007396]" />, color: 'shadow-[#007396]/50' },
  { name: 'ReactJS', icon: <FaReact size={40} className="text-[#61DAFB]" />, color: 'shadow-[#61DAFB]/50' },
  { name: 'Power Apps', icon: <FaMicrosoft size={40} className="text-[#0078D4]" />, color: 'shadow-[#0078D4]/50' },
  { name: 'WordPress', icon: <FaWordpress size={40} className="text-[#21759B]" />, color: 'shadow-[#21759B]/50' },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-gradient">Tech Stack</span>
          </h2>
          <p className="text-slate-400 text-lg">Technologies I leverage to build premium web applications.</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ 
                scale: 1.1,
                rotate: [0, -5, 5, 0],
                transition: { duration: 0.4 }
              }}
              className={`glass flex flex-col items-center justify-center p-8 w-40 h-40 rounded-2xl cursor-pointer transition-shadow hover:shadow-lg ${skill.color}`}
            >
              <div className="mb-4 drop-shadow-lg">
                {skill.icon}
              </div>
              <h3 className="text-sm font-semibold text-slate-200 tracking-wider text-center">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
