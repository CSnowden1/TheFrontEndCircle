// OurStory.js
import React from 'react';
import styled from 'styled-components';

const OurStoryContainer = styled.section`
  padding: 40px 20px;
`;

const StoryContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: justify;
  // Add more styles here
`;

const OurStory = () => (
  <OurStoryContainer>
    <StoryContent>
      <h2>Our Story</h2>
      <p>
        Havoc was born from a desire to simplify and elevate the job search experience...
      </p>
      {/* Add more content here */}
    </StoryContent>
  </OurStoryContainer>
);

export default OurStory;
