// src/components/homePageComponents/PortfolioGuide.js
import React from 'react';
import styled from 'styled-components';

const PortfolioGuidePage = styled.div`
  background-color: #800080;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const Content = styled.div`
  max-width: 800px;
  margin: auto;
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  text-align: center;
  color: #333;
  font-size: 36px;
  margin-bottom: 20px;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const TextContent = styled.div`
  font-size: 18px;
  line-height: 1.6;

  h2 {
    color: #444;
    margin-top: 20px;
  }

  ul {
    list-style: disc;
    margin-left: 20px;
  }

  li {
    margin-bottom: 10px;
  }
`;

const PortfolioGuide = () => {
  return (
    <PortfolioGuidePage>
      <Content>
        <Title>Portfolio Guide</Title>
        <Image
          src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Portfolio Guide"
        />
        <TextContent>
          <h2>Creating an Impressive Portfolio</h2>
          <p>
            A strong portfolio can showcase your skills and projects. Here are some tips:
          </p>
          <ul>
            <li>Highlight your best work and recent projects.</li>
            <li>Include a variety of projects to demonstrate your versatility.</li>
            <li>Provide context and detail about each project.</li>
            <li>Keep your portfolio updated with new work.</li>
          </ul>

          <h2>Portfolio Structure</h2>
          <p>
            Follow this structure for a professional portfolio:
          </p>
          <ul>
            <li>Home Page: Overview of your skills and achievements.</li>
            <li>Projects: Detailed descriptions and visuals of your work.</li>
            <li>About: Information about your background and experience.</li>
            <li>Contact: Easy way for potential clients or employers to reach you.</li>
          </ul>

          <h2>Portfolio Tips</h2>
          <p>
            Enhance your portfolio with these tips:
          </p>
          <ul>
            <li>Use high-quality images and visuals.</li>
            <li>Keep the design clean and professional.</li>
            <li>Ensure it's mobile-friendly and easy to navigate.</li>
            <li>Include testimonials from clients or colleagues.</li>
          </ul>
        </TextContent>
      </Content>
    </PortfolioGuidePage>
  );
};

export default PortfolioGuide;
