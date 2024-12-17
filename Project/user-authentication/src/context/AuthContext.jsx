/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useState, useContext } from 'react';

// Create the AuthContext
const AuthContext = createContext();

// AuthProvider component to wrap around the app and provide the context
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Stores user data, null means not logged in

  const login = (userData) => {
    setUser(userData); // Set the user data upon login
  };

  const logout = () => {
    setUser(null); // Clear the user data on logout
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to access the auth context
export const useAuth = () => {
  return useContext(AuthContext);
};
