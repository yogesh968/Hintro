import React from 'react';

const ErrorState = ({ message = "Something went wrong. Please try again." }) => {
  return (
    <div style={{
      padding: '2rem',
      textAlign: 'center',
      backgroundColor: 'var(--danger-light)',
      borderRadius: 'var(--radius)',
      color: 'var(--danger)'
    }}>
      <h3 style={{ marginBottom: '0.5rem' }}>Error</h3>
      <p>{message}</p>
    </div>
  );
};

export default ErrorState;
