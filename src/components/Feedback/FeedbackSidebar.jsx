import React, { useState, useEffect } from 'react';
import FeedbackModal from './FeedbackModal';
import { getFeedbackStatus, setFeedbackStatus } from '../../utils/storage';

const FeedbackSidebar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasFeedback, setHasFeedback] = useState(false);

  useEffect(() => {
    setHasFeedback(getFeedbackStatus());
  }, []);

  const handleFeedbackSubmit = () => {
    setHasFeedback(true);
    setFeedbackStatus('true');
  };

  return (
    <>
      <div style={{ marginTop: 'auto', padding: '1.5rem', borderTop: '1px solid var(--border)' }}>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.875rem', fontWeight: 500, textDecoration: 'none' }}>
            <svg style={{ width: '20px', height: '20px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download Desktop App
          </a>
          <button 
            onClick={() => setIsModalOpen(true)}
            style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.875rem', fontWeight: 500, border: 'none', background: 'transparent', cursor: 'pointer' }}
          >
            <svg style={{ width: '20px', height: '20px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
            Feedback {hasFeedback && <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--success)', display: 'inline-block', marginLeft: '4px' }}></span>}
          </button>
        </nav>

        <div style={{ backgroundColor: 'var(--surface-2)', padding: '1rem', borderRadius: 'var(--radius)', marginBottom: '1rem' }}>
          <div style={{ fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.25rem' }}>
            <span style={{ fontWeight: 600 }}>0 of 1000</span> hours used
          </div>
          <div style={{ width: '100%', height: '4px', backgroundColor: 'var(--border)', borderRadius: '2px', overflow: 'hidden', marginTop: '0.5rem' }}>
            <div style={{ width: '0%', height: '100%', backgroundColor: 'var(--primary)' }}></div>
          </div>
        </div>

        <button style={{
          width: '100%',
          padding: '0.75rem',
          backgroundColor: 'var(--text-secondary)',
          color: 'white',
          border: 'none',
          borderRadius: 'var(--radius-sm)',
          fontWeight: 500,
          cursor: 'pointer'
        }}>
          Upgrade
        </button>

        <div style={{ fontSize: '0.75rem', color: 'var(--muted)', marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
          © 2025 Hintro. Made in India 🇮🇳
        </div>
      </div>

      <FeedbackModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSubmit={handleFeedbackSubmit}
      />
    </>
  );
};

export default FeedbackSidebar;
