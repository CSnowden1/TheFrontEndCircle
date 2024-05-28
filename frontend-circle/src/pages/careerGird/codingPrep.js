// src/components/homePageComponents/CodingPrep.js
import React from 'react';
import styled from 'styled-components';

const CodingPrepPage = styled.div`
  background-color: #FF6347;
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

const CodingPrep = () => {
  return (
    <CodingPrepPage>
      <Content>
        <Title>Coding Assessments Prep</Title>
        <Image
          src="https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Coding Assessments Prep"
        />
        <TextContent>
          <h2>Prepare for Coding Assessments</h2>
          <p>
            Preparing for coding assessments can help you perform at your best. Here are some tips to help you get ready:
          </p>
          <ul>
            <li>Practice coding problems regularly on platforms like LeetCode or HackerRank.</li>
            <li>Understand the fundamentals of data structures and algorithms.</li>
            <li>Time yourself while solving problems to simulate test conditions.</li>
            <li>Review previous assessment questions if available.</li>
          </ul>

          <h2>During the Assessment</h2>
          <p>
            Keep these tips in mind during your coding assessments:
          </p>
          <ul>
            <li>Read the questions carefully and understand the requirements before coding.</li>
            <li>Write clean, readable code with proper comments.</li>
            <li>Test your code with different inputs to ensure correctness.</li>
            <li>Manage your time efficiently, and don’t spend too long on one problem.</li>
          </ul>

          <h2>Follow Up After the Assessment</h2>
          <p>
            After completing the assessment, follow these steps:
          </p>
          <ul>
            <li>Review your answers and learn from any mistakes.</li>
            <li>Seek feedback if possible to improve your skills.</li>
            <li>Continue practicing regularly to stay sharp.</li>
          </ul>
        </TextContent>
      </Content>
    </CodingPrepPage>
  );
};

export default CodingPrep;
