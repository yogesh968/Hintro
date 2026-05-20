import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { useProfile } from '../../hooks/useProfile';

const Navbar = () => {
  const { activeUser, switchUser } = useContext(UserContext);
  const { profile } = useProfile();

  const handleUserSwitch = (e) => {
    switchUser(e.target.value);
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
        <button style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.375rem 0.75rem',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius-sm)',
          fontSize: '0.75rem',
          fontWeight: 500
        }}>
          <svg style={{ width: '16px', height: '16px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Watch Tutorial
        </button>

        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
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
          <select 
            value={activeUser}
            onChange={handleUserSwitch}
            style={{
              appearance: 'none',
              background: 'transparent',
              border: 'none',
              fontWeight: 500,
              cursor: 'pointer',
              paddingRight: '1rem',
              color: 'var(--text)'
            }}
          >
            <option value="u1">User 1 (Empty)</option>
            <option value="u2">User 2 (Data)</option>
          </select>
          <svg style={{ position: 'absolute', right: 0, width: '12px', height: '12px', pointerEvents: 'none' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
