/* eslint-disable no-unused-vars */
import React from 'react';
import { CounterProvider } from './CounterContext';
import Counter from './Counter';
import './App.css'; // Optional: to add some basic styling

function App() {
  return (
    <CounterProvider>
      <div className="App">
        <h1>Global State Counter App</h1>
        <Counter />
      </div>
    </CounterProvider>
  );
}

export default App;
