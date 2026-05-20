import React from 'react';
import { motion } from 'framer-motion';

const EmptyState = ({ title, description, actionText, onAction, icon }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '3rem 1.5rem',
        textAlign: 'center',
        backgroundColor: 'var(--surface-2)',
        borderRadius: 'var(--radius)',
        border: '1px dashed var(--muted)'
      }}
    >
      {icon && (
        <div style={{
          width: '64px',
          height: '64px',
          backgroundColor: 'var(--primary-light)',
          color: 'var(--primary)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '1.5rem',
          fontSize: '1.5rem'
        }}>
          {icon}
        </div>
      )}
      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.5rem' }}>{title}</h3>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', maxWidth: '400px' }}>
        {description}
      </p>
      {actionText && (
        <button
          onClick={onAction}
          style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: 'var(--surface)',
            color: 'var(--text)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-sm)',
            fontWeight: 500,
            transition: 'background-color 0.2s',
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'var(--surface-2)'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'var(--surface)'}
        >
          {actionText}
        </button>
      )}
    </motion.div>
  );
};

export default EmptyState;
