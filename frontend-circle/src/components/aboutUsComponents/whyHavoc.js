// WhyHavoc.js
import React from 'react';
import styled from 'styled-components';

const WhyHavocContainer = styled.section`
  padding: 40px 20px;
  background-color: #f8f8f8;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 30px;
  // Add more styles here
`;

const FeatureList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const FeatureItem = styled.div`
  flex-basis: calc(33% - 20px);
  text-align: center;

  @media (max-width: 768px) {
    flex-basis: 100%;
  }

  // Add more styles here
`;

const WhyHavoc = () => (
  <WhyHavocContainer>
    <Title>Why Havoc?</Title>
    <FeatureList>
      <FeatureItem>
        <h3>Exclusive Access</h3>
        <p>Only verified job seekers have access to our premium job board.</p>
      </FeatureItem>
      {/* Repeat for other features */}
    </FeatureList>
  </WhyHavocContainer>
);

export default WhyHavoc;
