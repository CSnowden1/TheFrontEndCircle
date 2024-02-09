import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 10rem;
  gap: 1rem;
  background-color: white;

`;

const CategoryContainer = styled.div`
  margin-bottom: 30px;
`;

const CategoryTitle = styled.h2`
  color: #333;
  margin-bottom: 15px;
  font-size: 1rem;
`;

const StoryCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 10px;
`;

const StoryTitle = styled.h3`
  color: #555;
`;

const StoryDescription = styled.p`
  color: #666;
`;

const SuccessStoriesSection = () => {
  return (
    <SectionContainer>
      <CategoryContainer>
        <CategoryTitle>Career Transformations</CategoryTitle>
        {/* Placeholder for stories */}
        <StoryCard>
          <StoryTitle>John Doe's Tech Career Leap</StoryTitle>
          <StoryDescription>John shares his journey from a teacher to a tech entrepreneur.</StoryDescription>
        </StoryCard>
        {/* More stories */}
      </CategoryContainer>

      <CategoryContainer>
        <CategoryTitle>Networking Successes</CategoryTitle>
        {/* Placeholder for stories */}
        <StoryCard>
          <StoryTitle>Emily's Networking Mastery</StoryTitle>
          <StoryDescription>Discover how Emily expanded her professional network to find new opportunities.</StoryDescription>
        </StoryCard>
        {/* More stories */}
      </CategoryContainer>

      <CategoryContainer>
        <CategoryTitle>Freelancer Journeys</CategoryTitle>
        {/* Placeholder for stories */}
        <StoryCard>
          <StoryTitle>Alex's Freelance Adventure</StoryTitle>
          <StoryDescription>Alex discusses how he built a successful freelance design business.</StoryDescription>
        </StoryCard>
        {/* More stories */}
      </CategoryContainer>

      <CategoryContainer>
        <CategoryTitle>Education and Learning Breakthroughs</CategoryTitle>
        {/* Placeholder for stories */}
        <StoryCard>
          <StoryTitle>Sarah's Educational Success</StoryTitle>
          <StoryDescription>Learn about Sarah's journey through online learning to boost her career.</StoryDescription>
        </StoryCard>
        {/* More stories */}
      </CategoryContainer>
    </SectionContainer>
  );
};

export default SuccessStoriesSection;
