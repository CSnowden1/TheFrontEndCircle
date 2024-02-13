import React from 'react';
import styled from 'styled-components';
import Banner from '../components/aboutUsComponents/banner';
import MissionVision from '../components/aboutUsComponents/mission';
import WhyHavoc from '../components/aboutUsComponents/whyHavoc';
import OurStory from '../components/aboutUsComponents/ourStory';
import JoinUs from '../components/aboutUsComponents/joinUs';

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
