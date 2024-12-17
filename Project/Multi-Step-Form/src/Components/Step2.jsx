/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Step2({ formData, setFormData }) {
  const [address, setAddress] = useState(formData.address);
  const [city, setCity] = useState(formData.city);
  const [state, setState] = useState(formData.state);
  const [zip, setZip] = useState(formData.zip);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    let formErrors = {};
    if (!address) formErrors.address = 'Address is required';
    if (!city) formErrors.city = 'City is required';
    if (!state) formErrors.state = 'State is required';
    if (!zip) formErrors.zip = 'ZIP code is required';
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      setFormData({ ...formData, address, city, state, zip });
      navigate('/step3');
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div>
      <h2>Step 2: Address Information</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Address: </label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          {errors.address && <p>{errors.address}</p>}
        </div>
        <div>
          <label>City: </label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          {errors.city && <p>{errors.city}</p>}
        </div>
        <div>
          <label>State: </label>
          <input
            type="text"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
          {errors.state && <p>{errors.state}</p>}
        </div>
        <div>
          <label>ZIP Code: </label>
          <input
            type="text"
            value={zip}
            onChange={(e) => setZip(e.target.value)}
          />
          {errors.zip && <p>{errors.zip}</p>}
        </div>
        <button type="submit">Next</button>
      </form>
    </div>
  );
}

export default Step2;
