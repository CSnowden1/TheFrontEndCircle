import React from 'react';
import styled from 'styled-components';

const BannerContainer = styled.div`
  background-color: #f5f5f5;
  text-align: center;
  padding: 50px 20px;
`;

const Heading = styled.h1`
  // Heading styles
`;

const Banner = () => (
  <BannerContainer>
    <Heading>About Havoc</Heading>
  </BannerContainer>
);

export default Banner;
