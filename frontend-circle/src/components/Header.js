import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #333;
  color: #fff;
  padding: .5rem 17rem;
  text-align: center;
`;

const SmallMenu = styled.div`
  display: flex;
`;

const MenuItem = styled.div`
  margin-right: 20px;

`;

const MenuLink = styled.a`
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  transition: color 0.3s ease;

  &:hover {
    color: #ffcc00; /* Change to your desired hover color */
  }
`;

const SiteTitle = styled.h1`
  margin: 10px 0;
  font-size: 24px;
`;

function Header() {
  return (
    <HeaderContainer>
      <SmallMenu>
          <MenuItem><MenuLink href="/blogs">Blogs</MenuLink></MenuItem>
          <MenuItem><MenuLink href="#">Career Advice</MenuLink></MenuItem>
          <MenuItem><MenuLink href="#">Career Resources</MenuLink></MenuItem>
          <MenuItem><MenuLink href="#">About Us</MenuLink></MenuItem>
      </SmallMenu>
    </HeaderContainer>
  );
}

export default Header;
