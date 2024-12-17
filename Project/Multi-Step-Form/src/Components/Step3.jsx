/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Step3({ formData }) {
  const navigate = useNavigate();

  const handleSubmit = () => {
    alert('Form Submitted!');
    navigate('/');
  };

  return (
    <div>
      <h2>Step 3: Review and Submit</h2>
      <div>
        <h3>Personal Information</h3>
        <p>Name: {formData.name}</p>
        <p>Email: {formData.email}</p>
      </div>
      <div>
        <h3>Address Information</h3>
        <p>Address: {formData.address}</p>
        <p>City: {formData.city}</p>
        <p>State: {formData.state}</p>
        <p>ZIP: {formData.zip}</p>
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Step3;
