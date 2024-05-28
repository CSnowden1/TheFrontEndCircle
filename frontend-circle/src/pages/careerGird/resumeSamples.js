// src/components/homePageComponents/ResumeSamples.js
import React from 'react';
import styled from 'styled-components';

const ResumeSamplesPage = styled.div`
  background-color: #FF69B4;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const Content = styled.div`
  max-width: 800px;
  margin: auto;
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  text-align: center;
  color: #333;
  font-size: 36px;
  margin-bottom: 20px;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const TextContent = styled.div`
  font-size: 18px;
  line-height: 1.6;

  h2 {
    color: #444;
    margin-top: 20px;
  }

  ul {
    list-style: disc;
    margin-left: 20px;
  }

  li {
    margin-bottom: 10px;
  }
`;

const ResumeSamples = () => {
  return (
    <ResumeSamplesPage>
      <Content>
        <Title>Resume Samples</Title>
        <Image
          src="https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Resume Samples"
        />
        <TextContent>
          <h2>Crafting an Effective Resume</h2>
          <p>
            A well-crafted resume is key to landing job interviews. Here are some tips:
          </p>
          <ul>
            <li>Highlight your relevant skills and achievements.</li>
            <li>Use clear and concise language.</li>
            <li>Include quantifiable results to showcase your impact.</li>
            <li>Tailor your resume for each job application.</li>
          </ul>

          <h2>Resume Samples</h2>
          <p>
            Here are some resume samples to inspire you:
          </p>
          <ul>
            <li>Entry-Level Resume: Focus on education and internships.</li>
            <li>Mid-Level Resume: Highlight your professional experience.</li>
            <li>Senior-Level Resume: Showcase your leadership and achievements.</li>
            <li>Technical Resume: Emphasize your technical skills and projects.</li>
          </ul>

          <h2>Resume Tips</h2>
          <p>
            Follow these tips to enhance your resume:
          </p>
          <ul>
            <li>Keep it to one or two pages.</li>
            <li>Use a clean, professional format.</li>
            <li>Proofread for spelling and grammar errors.</li>
            <li>Update your resume regularly with new achievements.</li>
          </ul>
        </TextContent>
      </Content>
    </ResumeSamplesPage>
  );
};

export default ResumeSamples;
