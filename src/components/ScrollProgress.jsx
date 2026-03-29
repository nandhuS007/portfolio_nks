import React from 'react';
import { motion, useScroll } from 'framer-motion';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-cyan via-accent-purple to-accent-pink origin-left z-50 shadow-neon-cyan"
      style={{ scaleX: scrollYProgress }}
    />
  );
};

export default ScrollProgress;
