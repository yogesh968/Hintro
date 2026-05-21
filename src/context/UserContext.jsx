import React, { createContext, useState, useEffect } from 'react';
import { getStoredUser, setStoredUser } from '../utils/storage';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [activeUser, setActiveUser] = useState(getStoredUser());
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('hintro_is_authenticated') === 'true');

  const switchUser = (userId) => {
    setActiveUser(userId);
    setStoredUser(userId);
    window.location.reload();
  };

  const login = () => {
    setIsAuthenticated(true);
    localStorage.setItem('hintro_is_authenticated', 'true');
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('hintro_is_authenticated');
  };

  return (
    <UserContext.Provider value={{ activeUser, switchUser, isAuthenticated, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
