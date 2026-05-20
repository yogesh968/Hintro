import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LogoutModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '1rem'
          }}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: 'var(--surface)',
              borderRadius: 'var(--radius)',
              padding: '2.5rem',
              width: '100%',
              maxWidth: '440px',
              boxShadow: 'var(--shadow-lg)',
              position: 'relative',
              textAlign: 'center'
            }}
          >
            <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem', color: 'var(--text)' }}>
              Leaving already?
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: '2rem', lineHeight: 1.6 }}>
              You can log back in anytime to continue your meetings with Hintro.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
              <button
                onClick={onClose}
                style={{
                  flex: 1,
                  padding: '0.75rem',
                  borderRadius: 'var(--radius-sm)',
                  fontWeight: 500,
                  color: 'var(--text)',
                  backgroundColor: 'var(--surface)',
                  border: '1px solid var(--border)',
                  cursor: 'pointer'
                }}
              >
                Cancel
              </button>
              <button
                onClick={onConfirm}
                style={{
                  flex: 1,
                  padding: '0.75rem',
                  borderRadius: 'var(--radius-sm)',
                  fontWeight: 500,
                  color: 'white',
                  backgroundColor: 'var(--text)',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                Log out
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LogoutModal;
