import React, { useContext, useState, useRef, useEffect } from 'react';
import { UserContext } from '../../context/UserContext';
import { useProfile } from '../../hooks/useProfile';
import { useToast } from '../../context/ToastContext';
import LogoutModal from '../Shared/LogoutModal';

const Navbar = () => {
  const { activeUser, switchUser } = useContext(UserContext);
  const { profile } = useProfile();
  const { addToast } = useToast();
  
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    setIsLogoutModalOpen(false);
    addToast('Logged out successfully');
    switchUser('u1'); // Reset to empty state for demo purposes
  };

  return (
    <header style={{
      height: 'var(--navbar-height)',
      backgroundColor: 'var(--surface)',
      borderBottom: '1px solid var(--border)',
      position: 'sticky',
      top: 0,
      zIndex: 90,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 2rem'
    }}>
      <h1 style={{ fontSize: '1.25rem', fontWeight: 600 }}>Dashboard</h1>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <button 
          onClick={() => addToast('Opening Tutorial...')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.375rem 0.75rem',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-sm)',
            fontSize: '0.75rem',
            fontWeight: 500,
            cursor: 'pointer'
          }}
        >
          <svg style={{ width: '16px', height: '16px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Watch Tutorial
        </button>

        <div style={{ position: 'relative' }} ref={dropdownRef}>
          <div 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.5rem', 
              cursor: 'pointer',
              padding: '0.25rem'
            }}
          >
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              backgroundColor: 'var(--avatar-bg)',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 600,
              fontSize: '0.875rem'
            }}>
              {profile?.firstName?.charAt(0) || 'U'}
            </div>
            <svg style={{ width: '12px', height: '12px', color: 'var(--text-secondary)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          {isDropdownOpen && (
            <div style={{
              position: 'absolute',
              top: '100%',
              right: 0,
              marginTop: '0.5rem',
              backgroundColor: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-sm)',
              boxShadow: 'var(--shadow)',
              minWidth: '200px',
              zIndex: 100,
              padding: '0.5rem 0'
            }}>
              <div 
                style={{ padding: '0.5rem 1rem', fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-secondary)' }}
              >
                Switch Account
              </div>
              <button
                onClick={() => { switchUser('u1'); setIsDropdownOpen(false); }}
                style={{
                  width: '100%',
                  textAlign: 'left',
                  padding: '0.5rem 1rem',
                  fontSize: '0.875rem',
                  backgroundColor: activeUser === 'u1' ? 'var(--surface-2)' : 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                User 1 (Empty)
                {activeUser === 'u1' && <svg style={{ width: '16px', height: '16px', color: 'var(--primary)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>}
              </button>
              <button
                onClick={() => { switchUser('u2'); setIsDropdownOpen(false); }}
                style={{
                  width: '100%',
                  textAlign: 'left',
                  padding: '0.5rem 1rem',
                  fontSize: '0.875rem',
                  backgroundColor: activeUser === 'u2' ? 'var(--surface-2)' : 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                User 2 (Data)
                {activeUser === 'u2' && <svg style={{ width: '16px', height: '16px', color: 'var(--primary)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>}
              </button>
              
              <div style={{ height: '1px', backgroundColor: 'var(--border)', margin: '0.5rem 0' }} />
              
              <button
                onClick={() => { setIsDropdownOpen(false); setIsLogoutModalOpen(true); }}
                style={{
                  width: '100%',
                  textAlign: 'left',
                  padding: '0.5rem 1rem',
                  fontSize: '0.875rem',
                  backgroundColor: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'var(--text)'
                }}
              >
                <svg style={{ width: '16px', height: '16px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                Log out
              </button>
            </div>
          )}
        </div>
      </div>

      <LogoutModal 
        isOpen={isLogoutModalOpen} 
        onClose={() => setIsLogoutModalOpen(false)} 
        onConfirm={handleLogout} 
      />
    </header>
  );
};

export default Navbar;
