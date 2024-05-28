// src/components/homePageComponents/FreelancingGuides.js
import React from 'react';
import styled from 'styled-components';

const FreelancingGuidesPage = styled.div`
  background-color: #32CD32;
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

const FreelancingGuides = () => {
  return (
    <FreelancingGuidesPage>
      <Content>
        <Title>Freelancing Guides</Title>
        <Image
          src="https://images.pexels.com/photos/4050312/pexels-photo-4050312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Freelancing Guides"
        />
        <TextContent>
          <h2>Starting Your Freelancing Journey</h2>
          <p>
            Transitioning to freelancing can be challenging but rewarding. Here are some tips to help you get started:
          </p>
          <ul>
            <li>Define your niche and identify your target market.</li>
            <li>Create a professional online presence with a portfolio website.</li>
            <li>Network with other freelancers and potential clients.</li>
            <li>Set competitive yet sustainable pricing for your services.</li>
          </ul>

          <h2>Managing Freelance Projects</h2>
          <p>
            Effective project management is key to freelancing success. Keep these tips in mind:
          </p>
          <ul>
            <li>Use project management tools to stay organized.</li>
            <li>Communicate clearly with clients about expectations and deadlines.</li>
            <li>Track your time and manage your workload efficiently.</li>
            <li>Maintain a healthy work-life balance.</li>
          </ul>

          <h2>Growing Your Freelance Business</h2>
          <p>
            Once established, focus on growth strategies:
          </p>
          <ul>
            <li>Seek continuous learning to enhance your skills.</li>
            <li>Ask for testimonials and referrals from satisfied clients.</li>
            <li>Explore new markets and diversify your service offerings.</li>
            <li>Invest in marketing to increase your visibility.</li>
          </ul>
        </TextContent>
      </Content>
    </FreelancingGuidesPage>
  );
};

export default FreelancingGuides;
