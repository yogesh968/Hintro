export const formatDate = (dateString) => {
  if (!dateString) return '-';
  
  const date = new Date(dateString);
  const now = new Date();
  
  const diffTime = Math.abs(now - date);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays === 0) return 'Today';
  if (diffDays === 1) return 'Yesterday';
  if (diffDays < 7) return `${diffDays} days ago`;
  
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
};

export const formatTime = (dateString) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true }).toLowerCase();
};

export const groupSessionsByDate = (sessions) => {
  if (!sessions || sessions.length === 0) return {};
  
  return sessions.reduce((acc, session) => {
    const date = new Date(session.startTime);
    const dateKey = date.toLocaleDateString('en-US', { month: 'long', day: 'numeric' }) + 
                    (date.getDate() === 1 || date.getDate() === 21 || date.getDate() === 31 ? 'st' : 
                     date.getDate() === 2 || date.getDate() === 22 ? 'nd' : 
                     date.getDate() === 3 || date.getDate() === 23 ? 'rd' : 'th');
    
    if (!acc[dateKey]) {
      acc[dateKey] = [];
    }
    acc[dateKey].push(session);
    return acc;
  }, {});
};
