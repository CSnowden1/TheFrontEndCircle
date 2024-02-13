import React from 'react';
import styled from 'styled-components';
import Banner from './Banner';
import MissionVision from './MissionVision';
import WhyHavoc from './WhyHavoc';
import OurStory from './OurStory';
import JoinUs from './JoinUs';

const AboutUsContainer = styled.div`
  // Basic container styles
`;

const AboutUsPage = () => {
  return (
    <AboutUsContainer>
      <Banner />
      <MissionVision />
      <WhyHavoc />
      <OurStory />
      <JoinUs />
    </AboutUsContainer>
  );
};

export default AboutUsPage;
