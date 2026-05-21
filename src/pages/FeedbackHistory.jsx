import React, { useState, useEffect } from 'react';
import FeedbackModal from '../components/Feedback/FeedbackModal';

const FeedbackHistory = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const loadFeedbacks = () => {
      // Load feedback history from local storage
      const storedFeedbacks = JSON.parse(localStorage.getItem('hintro_feedback_history')) || [];
      
      // If we have some stored feedbacks, use them. 
      if (storedFeedbacks.length > 0) {
        setFeedbacks(storedFeedbacks);
      } else {
        if (localStorage.getItem('hintro_feedback') === 'true') {
          const defaultFeedbacks = [
            {
              id: 1,
              title: 'My First Call',
              rating: 2,
              description: 'Had issues with...',
              date: '10th May 2026',
              time: '5:00 pm'
            },
            {
              id: 2,
              title: 'My First Call',
              rating: 4,
              description: 'The boxy feature...',
              date: '11th May 2026',
              time: '5:00 pm'
            }
          ];
          setFeedbacks(defaultFeedbacks);
          localStorage.setItem('hintro_feedback_history', JSON.stringify(defaultFeedbacks));
        } else {
          setFeedbacks([]);
        }
      }
    };

    loadFeedbacks();
    window.addEventListener('feedback-updated', loadFeedbacks);
    return () => window.removeEventListener('feedback-updated', loadFeedbacks);
  }, []);

  const handleFeedbackSubmit = (data) => {
    const newFeedback = {
      id: Date.now(),
      title: 'My First Call',
      rating: data?.rating || 5,
      description: data?.feedback || 'General feedback',
      date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }).replace(/ /g, ' '),
      time: new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true }).toLowerCase()
    };
    
    // Format date string to match screenshot exactly (e.g. "10th May 2026")
    const d = new Date();
    const dateNum = d.getDate();
    const suffix = ["th", "st", "nd", "rd"][((dateNum % 10) > 3) ? 0 : (((dateNum % 100) - (dateNum % 10) !== 10) * (dateNum % 10))];
    const month = d.toLocaleString('en-US', { month: 'short' });
    const year = d.getFullYear();
    newFeedback.date = `${dateNum}${suffix} ${month} ${year}`;
    
    const updated = [newFeedback, ...feedbacks];
    setFeedbacks(updated);
    localStorage.setItem('hintro_feedback_history', JSON.stringify(updated));
    localStorage.setItem('hintro_feedback', 'true');
    window.dispatchEvent(new Event('feedback-updated'));
  };

  return (
    <div>
      <div style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.25rem' }}>
          Feedback History
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
          Browse your previous feedback submissions
        </p>
      </div>

      <div style={{
        backgroundColor: '#ffffff',
        border: '1px solid var(--border)',
        borderRadius: '12px',
        overflow: 'hidden'
      }}>
        {/* Header */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.5fr 1fr 3fr 1.5fr 1fr',
          padding: '1.25rem 1.5rem',
          backgroundColor: '#fafafa',
          borderBottom: '1px solid var(--border)',
          color: 'var(--muted)',
          fontWeight: 600,
          fontSize: '0.75rem',
          textTransform: 'capitalize'
        }}>
          <div>Title</div>
          <div>Rating</div>
          <div>Description</div>
          <div>Date</div>
          <div style={{ textAlign: 'right' }}>Time</div>
        </div>

        {feedbacks.length === 0 ? (
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '5rem 2rem',
            backgroundColor: '#ffffff'
          }}>
            <h3 style={{ fontSize: '0.9rem', fontWeight: 600, marginBottom: '1rem', color: '#111' }}>No feedbacks yet</h3>
            <button
              onClick={() => setIsModalOpen(true)}
              style={{
                padding: '0.4rem 1rem',
                backgroundColor: 'transparent',
                color: '#333',
                border: '1px solid #CCC',
                borderRadius: '4px',
                fontWeight: 500,
                fontSize: '0.75rem',
                cursor: 'pointer'
              }}
            >
              Give Feedback
            </button>
          </div>
        ) : (
          <div>
            {feedbacks.map((item, idx) => (
              <div
                key={item.id || idx}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1.5fr 1fr 3fr 1.5fr 1fr',
                  padding: '1.25rem 1.5rem',
                  borderBottom: idx === feedbacks.length - 1 ? 'none' : '1px solid var(--border)',
                  fontSize: '0.875rem',
                  alignItems: 'center',
                  color: 'var(--text)'
                }}
              >
                <div style={{ fontWeight: 500 }}>{item.title}</div>
                <div>{item.rating}/5</div>
                <div style={{ color: 'var(--text-secondary)' }}>
                  - {item.description.length > 40 ? item.description.substring(0, 40) + '...' : item.description}
                </div>
                <div>{item.date}</div>
                <div style={{ textAlign: 'right' }}>{item.time}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      <FeedbackModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleFeedbackSubmit}
      />
    </div>
  );
};

export default FeedbackHistory;
