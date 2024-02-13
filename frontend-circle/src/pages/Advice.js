import React from 'react';
import styled from 'styled-components';
import ResumeTips from '../components/advicePageComponents/resumeTips';
import InterviewPreparation from '../components/advicePageComponents/interviewTips';
import CareerGrowth from '../components/advicePageComponents/careerGrowth';

const CareerAdviceContainer = styled.div`
  // Basic container styles here
`;

const CareerAdvicePage = () => {
  return (
    <CareerAdviceContainer>
      <h1>Career Advice</h1>
      <ResumeTips />
      <InterviewPreparation />
      <CareerGrowth />
    </CareerAdviceContainer>
  );
};

export default CareerAdvicePage;
