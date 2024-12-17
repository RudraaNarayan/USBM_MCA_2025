/* eslint-disable no-unused-vars */
import React from 'react';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();

  if (!user) {
    return <div>You are not logged in. Please login to view the dashboard.</div>;
  }

  return (
    <div>
      <h2>Welcome to the Dashboard</h2>
      <p>Logged in as: {user.email}</p>
    </div>
  );
};

export default Dashboard;
