import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { UserContext, UserProvider } from './context/UserContext';
import { ToastProvider } from './context/ToastContext';
import Layout from './components/Layout/Layout';
import Dashboard from './pages/Dashboard';
import FeedbackHistory from './pages/FeedbackHistory';
import Login from './pages/Login';
import './styles/global.css';

const AppRoutes = () => {
  const { isAuthenticated } = useContext(UserContext);

  if (!isAuthenticated) {
    return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    );
  }

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/feedback-history" element={<FeedbackHistory />} />
        <Route path="/login" element={<Navigate to="/" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
};

function App() {
  return (
    <UserProvider>
      <ToastProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </ToastProvider>
    </UserProvider>
  );
}

export default App;
