/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ user, setUser }) {
  const handleLogout = () => {
    setUser(null);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">E-Commerce</Link>
      <div className="navbar-nav">
        <Link className="nav-item nav-link" to="/products">Products</Link>
        <Link className="nav-item nav-link" to="/about">About</Link>
        <Link className="nav-item nav-link" to="/contact">Contact</Link>
        {user ? (
          <>
            <Link className="nav-item nav-link" to="/dashboard">Dashboard</Link>
            <button className="nav-item nav-link btn" onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link className="nav-item nav-link" to="/login">Login</Link>
            <Link className="nav-item nav-link" to="/signup">SignUp</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
