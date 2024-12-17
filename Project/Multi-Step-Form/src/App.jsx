/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Step1 from './Components/Step1';
import Step2 from './Components/Step2';
import Step3 from './Components/Step3';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: '',
  });

  return (
    <Router>
      <div className="App">
        <h1>Multi-Step Form</h1>
        <Routes>
          <Route
            path="/"
            element={<Step1 formData={formData} setFormData={setFormData} />}
          />
          <Route
            path="/step2"
            element={<Step2 formData={formData} setFormData={setFormData} />}
          />
          <Route
            path="/step3"
            element={<Step3 formData={formData} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
