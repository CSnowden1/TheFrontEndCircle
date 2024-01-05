import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.nav`
  background-color: #1a1a1a;
  padding: 20px;
  display: flex;
  justify-content: space-around;

  a {
    color: #ffffff;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s ease;

    &:hover {
      color: #4ea1d3;
    }
  }
`;

function Navigation() {
  return (
    <StyledNav>
      <Link to="/">Home</Link>
      <Link to="/submit-job">Submit Job</Link>
      <Link to="/job-board">Job Board</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/login">Login/SignUp</Link>
    </StyledNav>
  );
}

export default Navigation;
