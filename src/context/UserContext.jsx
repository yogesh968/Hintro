import React, { createContext, useState, useEffect } from 'react';
import { getStoredUser, setStoredUser } from '../utils/storage';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [activeUser, setActiveUser] = useState(getStoredUser());

  const switchUser = (userId) => {
    setActiveUser(userId);
    setStoredUser(userId);
    // Reload page to reset all states cleanly for the demo
    window.location.reload();
  };

  return (
    <UserContext.Provider value={{ activeUser, switchUser }}>
      {children}
    </UserContext.Provider>
  );
};
