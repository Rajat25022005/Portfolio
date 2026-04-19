import React from 'react';
import { motion } from 'framer-motion';

const ScrollReveal = ({ children, delay = 0, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ 
        duration: 0.6, 
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: delay
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
