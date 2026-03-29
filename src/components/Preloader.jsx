import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ loading }) => {
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-primary"
        >
          <div className="flex flex-col items-center">
            <motion.div
              animate={{ 
                rotate: [0, 180, 360],
                scale: [1, 1.2, 1],
                borderRadius: ["20%", "50%", "20%"]
              }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-16 h-16 border-t-4 border-l-4 border-accent-cyan rounded-full mb-4 shadow-neon-cyan"
            />
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-xl font-bold tracking-widest text-[#06b6d4]"
            >
              NANDHAKUMAR
            </motion.h1>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
