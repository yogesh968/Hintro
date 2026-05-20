import React from 'react';
import { useProfile } from '../hooks/useProfile';
import { useStats } from '../hooks/useStats';
import { useSessions } from '../hooks/useSessions';
import Loader from '../components/Shared/Loader';
import ErrorState from '../components/Shared/ErrorState';
import EmptyState from '../components/Shared/EmptyState';
import StatsCard from '../components/Dashboard/StatsCard';
import SessionHistory from '../components/Dashboard/SessionHistory';

const Dashboard = () => {
  const { profile, loading: profileLoading, error: profileError } = useProfile();
  const { stats, loading: statsLoading, error: statsError } = useStats();
  const { sessions, loading: sessionsLoading, error: sessionsError } = useSessions();

  if (profileLoading) return <Loader fullScreen />;
  if (profileError) return <ErrorState message={profileError} />;

  // Determine if it's an empty state (e.g. for User 1)
  // According to requirements, u1 has no stats and no sessions
  const isEmptyState = !statsLoading && stats?.totalSessions === 0 && (!sessions || sessions.length === 0);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
        <div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.25rem' }}>
            Hi, {profile?.firstName || 'User'} 👋 Welcome to Hintro
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
            Ready to make your next call smarter ?
          </p>
        </div>
        <button style={{
          backgroundColor: 'var(--text)',
          color: 'var(--surface)',
          padding: '0.625rem 1.25rem',
          borderRadius: 'var(--radius-sm)',
          fontWeight: 500,
          border: 'none',
          cursor: 'pointer'
        }}>
          Start New Call
        </button>
      </div>

      <StatsCard stats={stats} loading={statsLoading} />

      {isEmptyState ? (
        <>
          <div style={{ marginTop: '3rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <h3 style={{ fontSize: '1.125rem', fontWeight: 600, textAlign: 'center' }}>How it works</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
              <div style={{ padding: '2rem 1.5rem', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)', border: '1px solid var(--border)', textAlign: 'center' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--muted)', marginBottom: '1rem', letterSpacing: '0.05em' }}>STEP 1</div>
                <div style={{ width: '48px', height: '48px', backgroundColor: 'var(--surface-2)', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto' }}>
                  <svg style={{ width: '24px', height: '24px', color: 'var(--text-secondary)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
                </div>
                <h4 style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Upload files</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>Add files for contextual understanding</p>
                <button style={{ width: '100%', padding: '0.5rem', backgroundColor: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', fontWeight: 500 }}>Upload Now</button>
              </div>
              <div style={{ padding: '2rem 1.5rem', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)', border: '1px solid var(--border)', textAlign: 'center' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--muted)', marginBottom: '1rem', letterSpacing: '0.05em' }}>STEP 2</div>
                <div style={{ width: '48px', height: '48px', backgroundColor: 'var(--surface-2)', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto' }}>
                  <svg style={{ width: '24px', height: '24px', color: 'var(--text-secondary)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                </div>
                <h4 style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Start your call</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>Hintro joins as an AI participant</p>
                <button style={{ width: '100%', padding: '0.5rem', backgroundColor: 'var(--text)', color: 'white', border: 'none', borderRadius: 'var(--radius-sm)', fontWeight: 500 }}>Start Call</button>
              </div>
              <div style={{ padding: '2rem 1.5rem', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)', border: '1px solid var(--border)', textAlign: 'center' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--muted)', marginBottom: '1rem', letterSpacing: '0.05em' }}>STEP 3</div>
                <div style={{ width: '48px', height: '48px', backgroundColor: 'var(--surface-2)', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto' }}>
                  <svg style={{ width: '24px', height: '24px', color: 'var(--text-secondary)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                </div>
                <h4 style={{ fontWeight: 600, marginBottom: '0.5rem' }}>View Insights</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>Review notes and action items after the call</p>
                <button style={{ width: '100%', padding: '0.5rem', backgroundColor: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', fontWeight: 500 }}>View Insights</button>
              </div>
            </div>
          </div>
          
          <div style={{ marginTop: '4rem' }}>
            <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '1.5rem', textAlign: 'center' }}>Recent calls</h3>
            <EmptyState 
              icon={(
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '32px', height: '32px' }}>
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              )}
              title="No Recent Calls"
              description="Connect your Google Calendar to see upcoming meetings, get reminders, and join calls directly from Hintro."
              actionText="Start a Call"
            />
          </div>
        </>
      ) : (
        <SessionHistory sessions={sessions} loading={sessionsLoading} />
      )}
    </div>
  );
};

export default Dashboard;
