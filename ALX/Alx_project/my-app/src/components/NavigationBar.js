import React, { useState } from 'react';

const NavigationBar = () => {
  const [isExpanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!isExpanded);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="/">Land Africa</a>
        <button className="navbar-toggler" type="button" onClick={toggleExpanded} aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isExpanded ? 'show' : ''}`}>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/listings">Listings</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/sales">Sales</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/rentals">Rentals</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="accountDropdown" role="button" onClick={toggleExpanded} aria-haspopup="true" aria-expanded={isExpanded ? "true" : "false"}>
                Account
              </a>
              <div className={`dropdown-menu ${isExpanded ? 'show' : ''}`} aria-labelledby="accountDropdown">
                <a className="dropdown-item" href="/signup">Sign Up</a>
                <a className="dropdown-item" href="/login">Login</a>
                <a className="dropdown-item" href="/account">View Account</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
