import React from 'react';
import styled from 'styled-components';
import JobSearchSection from '../components/resuableComponents/jobSearch';
import CareerTipsGrid from '../components/homePageComponents/careerGrid';
import SuccessStoriesSection from '../components/homePageComponents/successFlex';

const Container = styled.div`
  margin: 0 auto;
  text-align: center;
  
`;

const Heading = styled.h2`
  font-size: 28px;
  color: #333;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 16px;
  color: #666;
  line-height: 1.5;
  background-color: white;
  font-size: 1rem;
  font-weight: bold;
  padding-top: 3rem;
  color: black;
`;

const Section = styled.section`
width: 100%;
`;

const SectionHeading = styled.h3`
  font-size: 2.4rem;
  color: #333;
  margin-bottom: 15px;
  color: white;
  text-align: left;
`;

const SectionDescription = styled.p`
  font-size: 16px;
  color: #666;
  line-height: 1.5;
  display: flex;
  align-items: center;
  justify-content: left;
`;


const JobSeekerContainer = styled.div`
  background-color: #EB83C8;
  padding: 3rem 25rem;
  color: white;

`

const JobSeekerIntro = styled.div`
display: flex;
flex-direction: column;


`


const JobSeekerIntroContent = styled.div`
display: flex;
width: 100%;

`

const HomePage = () => {
  return (
    <Container>
      <JobSearchSection />
      <Section>
        <JobSeekerContainer>
            <JobSeekerIntroContent>
              <JobSeekerIntro>
                <SectionHeading>Built For Bootcamp Grads</SectionHeading>
                  <div>
                    <img src='https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?auto=compress&cs=tinysrgb&w=600' />
                  </div>
              </JobSeekerIntro>
              <SectionDescription>
                <p>
                  Discover your next career move. Browse through hundreds of job listings, get insights into different companies, and apply directly.
                </p>
          </SectionDescription>
            </JobSeekerIntroContent>
          

        </JobSeekerContainer>
      </Section>
      <Section>
      <Description>
        Explore job opportunities, get career advice, access valuable career resources, and learn more about us.
      </Description>
      <CareerTipsGrid />
      </Section>

      <Section>
        <h2 style={{width: '100%', textAlign: 'center', color: 'black', backgroundColor: 'white'}}> Pathways to Success: Inspiring Career Journeys</h2>
        <SuccessStoriesSection />
      </Section>
    </Container>
  );
}

export default HomePage;
