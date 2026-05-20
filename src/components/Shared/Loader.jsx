import React from 'react';
import { motion } from 'framer-motion';

const Loader = ({ fullScreen = false }) => {
  const containerStyle = fullScreen
    ? { height: '100vh', width: '100vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }
    : { padding: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' };

  return (
    <div style={containerStyle}>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        style={{
          width: '40px',
          height: '40px',
          border: '3px solid var(--primary-light)',
          borderTopColor: 'var(--primary)',
          borderRadius: '50%'
        }}
      />
    </div>
  );
};

export default Loader;
