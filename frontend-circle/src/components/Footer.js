import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
`;

const FooterText = styled.p`
  margin: 10px 0;
  font-size: 14px;
`;

const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;

  &:hover {
    color: #ffcc00; /* Change to your desired hover color */
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterText>© {new Date().getFullYear()} Job Posting Website</FooterText>
      <FooterText>Contact Us: <FooterLink to="mailto:contact@jobpostingsite.com">contact@jobpostingsite.com</FooterLink></FooterText>
    </FooterContainer>
  );
}

export default Footer;
