import React from 'react';
import Card from '../Shared/Card';
import { formatDate } from '../../utils/formatDate';
import { formatDuration } from '../../utils/formatDuration';

const StatsCard = ({ stats, loading }) => {
  if (loading) {
    return (
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
        {[1, 2, 3, 4].map(i => (
          <Card key={i} style={{ height: '104px', display: 'flex', alignItems: 'center' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--surface-2)' }} />
            <div style={{ marginLeft: '1rem', flex: 1 }}>
              <div style={{ height: '12px', width: '60%', backgroundColor: 'var(--surface-2)', marginBottom: '8px', borderRadius: '4px' }} />
              <div style={{ height: '24px', width: '40%', backgroundColor: 'var(--surface-2)', borderRadius: '4px' }} />
            </div>
          </Card>
        ))}
      </div>
    );
  }

  // Adjusting for formatDuration from correct path
  const formatSeconds = (seconds) => {
    if (!seconds || seconds === 0) return '0m';
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    if (hours > 0) return `${hours}h ${minutes}m`;
    if (minutes > 0) return `${minutes}m ${secs}sec`;
    return `${secs}sec`;
  };

  const statItems = [
    {
      title: 'Total Sessions',
      value: stats?.totalSessions || 0,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '24px', height: '24px' }}>
          <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
          <path d="M22 12A10 10 0 0 0 12 2v10z" />
        </svg>
      ),
      color: 'var(--stat-pink)',
      bgColor: 'var(--stat-pink-bg)'
    },
    {
      title: 'Average Duration',
      value: formatSeconds(stats?.averageDuration),
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '24px', height: '24px' }}>
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
      color: 'var(--stat-teal)',
      bgColor: 'var(--stat-teal-bg)'
    },
    {
      title: 'AI Used',
      value: `${stats?.totalAIInteractions || 0} times`,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '24px', height: '24px' }}>
          <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" />
        </svg>
      ),
      color: 'var(--success)',
      bgColor: 'var(--success-light)'
    },
    {
      title: 'Last Session',
      value: (stats?.lastSession && stats.lastSession.length > 0) ? formatDate(stats.lastSession[0].startTime) : '-',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '24px', height: '24px' }}>
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      ),
      color: 'var(--stat-purple)',
      bgColor: 'var(--stat-purple-bg)'
    }
  ];

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
      {statItems.map((stat, idx) => (
        <Card key={idx} delay={idx * 0.1} style={{ display: 'flex', alignItems: 'center', padding: '1.25rem' }}>
          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: 'var(--radius-sm)',
            backgroundColor: stat.bgColor,
            color: stat.color,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: '1rem'
          }}>
            {stat.icon}
          </div>
          <div>
            <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', fontWeight: 500, marginBottom: '0.25rem' }}>
              {stat.title}
            </div>
            <div style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text)' }}>
              {stat.value}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default StatsCard;
