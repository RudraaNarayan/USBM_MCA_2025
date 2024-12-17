/* eslint-disable no-unused-vars */
import React from 'react';
import { useTheme } from './ThemeContext'; // Path to ThemeContext.js

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
};

export default ThemeToggle;
