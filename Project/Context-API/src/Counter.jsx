/* eslint-disable no-unused-vars */
import React from 'react';
import { useCounter } from './CounterContext';

function Counter() {
  const { state, dispatch } = useCounter();

  return (
    <div className="counter-container">
      <h1>Counter: {state.count}</h1>
      <div>
        <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
        <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
        <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;
