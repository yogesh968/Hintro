import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FeedbackModal = ({ isOpen, onClose, onSubmit }) => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleClose = () => {
    setRating(0);
    setHoverRating(0);
    setFeedback('');
    setIsSuccess(false);
    onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating === 0) return;

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      if (onSubmit) onSubmit({ rating, feedback });
    }, 1000);
  };

  const getFeedbackLabel = () => {
    if (rating === 0) return '';
    if (rating <= 3) return 'What frustrated you or felt confusing?';
    return 'What did you like the most?';
  };

  if (!isOpen && !isSuccess) return null;

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
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              padding: '2rem',
              width: '100%',
              maxWidth: '500px',
              boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
              position: 'relative'
            }}
          >
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ textAlign: 'center', padding: '1rem 0' }}
              >
                <button
                  onClick={handleClose}
                  style={{
                    position: 'absolute',
                    top: '1.5rem',
                    right: '1.5rem',
                    color: '#666',
                    cursor: 'pointer',
                    background: 'transparent',
                    border: 'none',
                    padding: '0.5rem'
                  }}
                >
                  <svg style={{ width: '20px', height: '20px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                
                <div style={{
                  width: '90px',
                  height: '90px',
                  backgroundColor: '#FFF9C4',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem auto'
                }}>
                  <svg style={{ width: '45px', height: '45px', color: '#FFC107' }} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.75rem', color: '#111' }}>Thank you for your feedback!!</h3>
                <p style={{ color: '#666', lineHeight: '1.5', maxWidth: '350px', margin: '0 auto' }}>
                  Our team reviews every suggestion to improve AI responses, workflows, and overall experience.
                </p>
              </motion.div>
            ) : (
              <>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.25rem', color: '#111' }}>Give Feedback</h2>
                <p style={{ color: '#666', fontSize: '0.875rem', marginBottom: '1.5rem' }}>
                  Describe your experience using Hintro...
                </p>

                <form onSubmit={handleSubmit}>
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', margin: '2rem 0' }}>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        onClick={() => setRating(star)}
                        style={{
                          width: '45px',
                          height: '45px',
                          cursor: 'pointer',
                          color: (hoverRating || rating) >= star ? '#FFC107' : '#E0E0E0',
                          transition: 'color 0.2s ease-in-out'
                        }}
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>

                  {rating > 0 && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      style={{ overflow: 'hidden' }}
                    >
                      <label style={{ display: 'block', fontSize: '0.875rem', color: '#666', marginBottom: '0.5rem' }}>
                        {getFeedbackLabel()}
                      </label>
                      <textarea
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        placeholder="Uploading documents was easy, and the AI pulled accurate answers."
                        style={{
                          width: '100%',
                          minHeight: '100px',
                          padding: '0.75rem',
                          borderRadius: '8px',
                          border: '1px solid #E0E0E0',
                          resize: 'vertical',
                          marginBottom: '1.5rem',
                          fontSize: '0.875rem',
                          fontFamily: 'inherit',
                          outline: 'none',
                          boxSizing: 'border-box'
                        }}
                        onFocus={(e) => e.target.style.borderColor = '#999'}
                        onBlur={(e) => e.target.style.borderColor = '#E0E0E0'}
                      />
                    </motion.div>
                  )}

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
                    <button
                      type="button"
                      onClick={handleClose}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.5rem 1rem',
                        borderRadius: '6px',
                        fontWeight: 500,
                        color: '#333',
                        backgroundColor: '#fff',
                        border: '1px solid #CCC',
                        cursor: 'pointer',
                        fontSize: '0.875rem'
                      }}
                    >
                      <svg style={{ width: '16px', height: '16px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                      </svg>
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting || rating === 0}
                      style={{
                        padding: '0.5rem 1.5rem',
                        borderRadius: '6px',
                        fontWeight: 500,
                        color: 'white',
                        backgroundColor: rating > 0 ? '#000' : '#888',
                        border: 'none',
                        cursor: isSubmitting || rating === 0 ? 'not-allowed' : 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontSize: '0.875rem',
                        transition: 'background-color 0.2s ease'
                      }}
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                            style={{
                              width: '14px',
                              height: '14px',
                              border: '2px solid rgba(255,255,255,0.3)',
                              borderTopColor: 'white',
                              borderRadius: '50%'
                            }}
                          />
                          Submitting...
                        </>
                      ) : (
                        'Submit'
                      )}
                    </button>
                  </div>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FeedbackModal;

