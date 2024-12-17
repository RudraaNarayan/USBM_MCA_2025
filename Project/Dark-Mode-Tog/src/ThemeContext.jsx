/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useState, useEffect, useContext } from 'react';

// Create a context
const ThemeContext = createContext();

// Custom hook to use the theme context
export const useTheme = () => useContext(ThemeContext);

// ThemeProvider component to wrap the app
export const ThemeProvider = ({ children }) => {
  // Get initial theme from localStorage, default to light mode
  const savedTheme = localStorage.getItem('theme') || 'light';
  
  const [theme, setTheme] = useState(savedTheme);

  // Update the theme in localStorage and apply to the document body
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.setAttribute('data-theme', theme); // Apply theme to the body
  }, [theme]);

  // Function to toggle between dark and light themes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
