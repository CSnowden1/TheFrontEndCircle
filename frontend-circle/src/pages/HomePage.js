import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 28px;
  color: #333;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 16px;
  color: #666;
  line-height: 1.5;
`;

const HomePage = () => {
  return (
    <Container>
      <Heading>Welcome to the Job Posting Website</Heading>
      <Description>
        Explore job opportunities, get career advice, access valuable career resources, and learn more about us.
      </Description>
    </Container>
  );
}

export default HomePage;
