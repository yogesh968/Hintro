import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ children, className = '', style = {}, delay = 0, hover = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      whileHover={hover ? { y: -4, boxShadow: 'var(--shadow-lg)' } : {}}
      style={{
        backgroundColor: 'var(--surface)',
        borderRadius: 'var(--radius)',
        border: '1px solid var(--border)',
        padding: '1.5rem',
        boxShadow: 'var(--shadow-sm)',
        transition: 'box-shadow 0.2s ease',
        ...style
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Card;
