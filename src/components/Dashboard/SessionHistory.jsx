import React from 'react';
import Card from '../Shared/Card';
import { formatTime, groupSessionsByDate } from '../../utils/formatDate';

const SessionHistory = ({ sessions, loading }) => {
  if (loading) {
    return (
      <Card>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
          <div style={{ height: '24px', width: '120px', backgroundColor: 'var(--surface-2)', borderRadius: '4px' }} />
        </div>
        {[1, 2, 3].map(i => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', padding: '1rem 0', borderBottom: i < 3 ? '1px solid var(--border)' : 'none' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--surface-2)' }} />
            <div style={{ marginLeft: '1rem', flex: 1 }}>
              <div style={{ height: '16px', width: '150px', backgroundColor: 'var(--surface-2)', marginBottom: '8px', borderRadius: '4px' }} />
              <div style={{ height: '12px', width: '100px', backgroundColor: 'var(--surface-2)', borderRadius: '4px' }} />
            </div>
          </div>
        ))}
      </Card>
    );
  }

  const groupedSessions = groupSessionsByDate(sessions);

  return (
    <div style={{ marginTop: '2rem' }}>
      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '1.5rem', textAlign: 'center' }}>Recent calls</h3>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {Object.entries(groupedSessions).map(([date, dateSessions]) => (
          <div key={date}>
            <div style={{ fontSize: '0.875rem', color: 'var(--muted)', fontWeight: 500, marginBottom: '1rem', paddingLeft: '0.5rem' }}>
              {date}
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {dateSessions.map((session, idx) => (
                <Card key={session._id} delay={idx * 0.05} hover style={{ padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '8px',
                      backgroundColor: 'var(--stat-purple)',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 600,
                      fontSize: '1.25rem'
                    }}>
                      {session.title?.charAt(0) || 'K'}
                    </div>
                    
                    <div style={{ marginLeft: '1rem' }}>
                      <div style={{ fontWeight: 500, color: 'var(--text)', marginBottom: '0.25rem' }}>
                        {session.title || 'Design Call'}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                        {/* Mocking participant avatars */}
                        <div style={{ display: 'flex', marginLeft: '0.25rem' }}>
                          {[1, 2, 3].map((p, i) => (
                            <div key={i} style={{
                              width: '20px', height: '20px', borderRadius: '50%', backgroundColor: 'var(--surface-2)',
                              border: '2px solid white', marginLeft: i > 0 ? '-8px' : '0', zIndex: 3 - i,
                              backgroundImage: `url(https://i.pravatar.cc/100?img=${p * 10})`, backgroundSize: 'cover'
                            }} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                    <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                      {formatTime(session.startTime)}
                    </div>
                    <button style={{ color: 'var(--text)', padding: '0.25rem' }}>
                      <svg style={{ width: '20px', height: '20px' }} fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                      </svg>
                    </button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SessionHistory;
