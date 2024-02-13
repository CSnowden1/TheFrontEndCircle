import React from 'react';
import styled from 'styled-components';

const MissionVisionContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 40px 20px;
`;

const Column = styled.div`
  flex-basis: 45%;
`;

const Title = styled.h2`
  // Title styles
`;

const Text = styled.p`
  // Text styles
`;

const MissionVision = () => (
  <MissionVisionContainer>
    <Column>
      <Title>Our Mission</Title>
      <Text>Empowering job seekers...</Text>
    </Column>
    <Column>
      <Title>Our Vision</Title>
      <Text>Revolutionizing the job search...</Text>
    </Column>
  </MissionVisionContainer>
);

export default MissionVision;
