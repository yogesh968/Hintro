import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import { ToastProvider } from './context/ToastContext';
import Layout from './components/Layout/Layout';
import Dashboard from './pages/Dashboard';
import './styles/global.css';

function App() {
  return (
    <UserProvider>
      <ToastProvider>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              {/* Catch-all route for demo purposes */}
              <Route path="*" element={<Dashboard />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </ToastProvider>
    </UserProvider>
  );
}

export default App;
