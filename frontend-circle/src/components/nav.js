import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const StyledNav = styled.nav`
  background-color: #FFFEFE;
  padding: .5rem 17rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid #A4BDC6 .25px;
  color: #545854;

  a {
    color: #545854;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #4ea1d3;
    }
  }
`;


const NavLogo = styled.img`

  height: 2rem;

`
function Navigation() {
  return (
    <StyledNav>
      <Link to="/">
        <NavLogo  src="/navLogo.svg" alt="Navigation Logo"></NavLogo>
      </Link>
      <Link to="/submit-job">Submit Job</Link>
      <Link to="/job-board">Job Board</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/login">Sign in</Link>
    </StyledNav>
  );
}

export default Navigation;
