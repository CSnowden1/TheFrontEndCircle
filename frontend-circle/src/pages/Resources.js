import React from 'react';
import styled from 'styled-components';
import CareerDevelopmentPlatforms from '../components/resroucesComponents/careerDevelopment';
import SkillDevelopmentLearning from '../components/resroucesComponents/skillsDevelopment';
import AdditionalResources from '../components/resroucesComponents/aditionalResrouces';

const CareerResourcesContainer = styled.div`
  // Basic container styles here
`;

const CareerResourcesPage = () => {
  return (
    <CareerResourcesContainer>
      <h1>Career Resources Hub</h1>
      <CareerDevelopmentPlatforms />
      <SkillDevelopmentLearning />
      <AdditionalResources />
    </CareerResourcesContainer>
  );
};

export default CareerResourcesPage;
