/* eslint-disable no-unused-vars */
import React, { useState, useRef } from 'react';
import './App.css';

function App() {
  // State to store tasks
  const [tasks, setTasks] = useState([]);
  // State to store the task input
  const [taskInput, setTaskInput] = useState('');
  // Ref for input field to focus on it after adding a task
  const inputRef = useRef();

  // Add task function
  const addTask = () => {
    if (taskInput.trim() === '') return; // Prevent adding empty tasks

    const newTask = {
      id: Date.now(), // Unique ID for each task
      text: taskInput,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTaskInput('');
    inputRef.current.focus(); // Focus the input after adding a task
  };

  // Toggle task completion
  const toggleTaskCompletion = (taskId) => {
    setTasks(tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  // Delete task function
  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>

      {/* Input field for adding tasks */}
      <input
        type="text"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        ref={inputRef} // Attach ref to input
        placeholder="Add a new task"
      />
      <button onClick={addTask}>Add Task</button>

      {/* Task list */}
      <ul>
        {tasks.map(task => (
          <li key={task.id} className={task.completed ? 'completed' : ''}>
            <span onClick={() => toggleTaskCompletion(task.id)}>
              {task.text}
            </span>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
