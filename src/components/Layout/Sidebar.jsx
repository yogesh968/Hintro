import { NavLink } from 'react-router-dom';
import FeedbackSidebar from '../Feedback/FeedbackSidebar';
import { useToast } from '../../context/ToastContext';

const navItems = [
  { path: '/', label: 'Dashboard', icon: 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z' },
  { path: '#', label: 'Call Insights', icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' },
  { path: '#', label: 'Knowledge Base', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z', info: true },
  { path: '#', label: 'Prompts', icon: 'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z', info: true },
  { path: '#', label: 'Boxy Controls', icon: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4', info: true },
];

const Sidebar = () => {
  const { addToast } = useToast();

  return (
    <aside style={{
      width: 'var(--sidebar-width)',
      height: '100vh',
      backgroundColor: 'var(--surface)',
      borderRight: '1px solid var(--border)',
      position: 'fixed',
      left: 0,
      top: 0,
      display: 'flex',
      flexDirection: 'column',
      zIndex: 100
    }}>
      <div style={{
        height: 'var(--navbar-height)',
        display: 'flex',
        alignItems: 'center',
        padding: '0 1.5rem',
        borderBottom: '1px solid var(--border)',
        fontWeight: 600,
        fontSize: '1.25rem',
        letterSpacing: '-0.02em'
      }}>
        Hintro
      </div>
      
      <div style={{ padding: '1.5rem 1rem', flex: 1, overflowY: 'auto' }}>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
          {navItems.map((item, idx) => (
            <NavLink
              key={idx}
              to={item.path}
              onClick={(e) => {
                if (item.path === '#') {
                  e.preventDefault();
                  addToast(`${item.label} coming soon!`);
                }
              }}
              style={({ isActive }) => ({
                display: 'flex',
                alignItems: 'center',
                padding: '0.75rem 1rem',
                borderRadius: 'var(--radius-sm)',
                color: isActive && item.path === '/' ? 'var(--primary)' : 'var(--text)',
                backgroundColor: isActive && item.path === '/' ? 'var(--primary-light)' : 'transparent',
                fontWeight: 500,
                fontSize: '0.875rem',
                transition: 'all 0.2s'
              })}
            >
              <svg 
                style={{ width: '20px', height: '20px', marginRight: '0.75rem', opacity: 0.8 }} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
              </svg>
              {item.label}
              {item.info && (
                <svg style={{ marginLeft: 'auto', width: '16px', height: '16px', color: 'var(--muted)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )}
            </NavLink>
          ))}
        </nav>
      </div>

      <FeedbackSidebar />
    </aside>
  );
};

export default Sidebar;
