// LearnMorePage.js
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 800px;
  margin: auto;
  padding: 20px;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

const Section = styled.div`
  margin-bottom: 40px;
`;

const SectionTitle = styled.h2`
  margin-bottom: 10px;
`;

const SectionContent = styled.p`
  font-size: 16px;
  line-height: 1.5;
`;

const LearnMorePage = () => {
  return (
    <Container>
      <Title>Learn More</Title>
      <Section>
        <SectionTitle>About Us</SectionTitle>
        <SectionContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur, lacus vitae molestie posuere, justo mi convallis justo, eget sagittis arcu purus sed justo. Phasellus dictum magna ac est finibus, vel ultrices ante ultrices. Praesent a arcu sed leo imperdiet fermentum.
        </SectionContent>
      </Section>
      <Section>
        <SectionTitle>Our Mission</SectionTitle>
        <SectionContent>
          Fusce pulvinar aliquet odio, eget laoreet nisi convallis nec. Sed fermentum justo nec risus volutpat, eu ultricies magna posuere. Integer tristique libero nec metus convallis, nec pellentesque urna efficitur.
        </SectionContent>
      </Section>
      <Section>
        <SectionTitle>How It Works</SectionTitle>
        <SectionContent>
          Duis a tellus nec purus scelerisque luctus. Nulla facilisi. Donec vel felis ac dui faucibus dignissim nec vel quam. Integer quis fermentum mauris, non sollicitudin ipsum.
        </SectionContent>
      </Section>
    </Container>
  );
};

export default LearnMorePage;
