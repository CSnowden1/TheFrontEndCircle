import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/submit-job">Submit Job</Link>
      <Link to="/job-board">Job Board</Link>
    </nav>
  );
}

export default Navigation;