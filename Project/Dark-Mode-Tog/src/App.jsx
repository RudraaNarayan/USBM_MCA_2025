/* eslint-disable no-unused-vars */
import React from 'react';
import { ThemeProvider } from './ThemeContext';  // Path to ThemeContext.js
import ThemeToggle from './ThemeToggle';  // Path to ThemeToggle component

function App() {
  return (
    <ThemeProvider>
      <div>
        <h1>Welcome to my App!</h1>
        <ThemeToggle />  {/* Add the theme toggle button */}
      </div>
    </ThemeProvider>
  );
}

export default App;
