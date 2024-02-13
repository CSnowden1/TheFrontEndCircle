// JoinUs.js
import React from 'react';
import styled from 'styled-components';

const JoinUsContainer = styled.section`
  padding: 40px 20px;
  background-color: #eef4f7;
  text-align: center;
`;

const CallToAction = styled.div`
  max-width: 600px;
  margin: 0 auto;
  // Add more styles here
`;

const JoinUs = () => (
  <JoinUsContainer>
    <CallToAction>
      <h2>Join Us</h2>
      <p>Become part of a community that values quality and opportunity.</p>
      <button>Start Your Journey</button>
    </CallToAction>
  </JoinUsContainer>
);

export default JoinUs;
