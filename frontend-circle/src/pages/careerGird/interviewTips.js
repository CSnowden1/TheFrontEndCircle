import React from 'react';
import styled from 'styled-components';

const InterviewTipsPage = styled.div`
  background-color: #FFD700;
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

const InterviewTips = () => {
  return (
    <InterviewTipsPage>
      <Content>
        <Title>Interview Tips</Title>
        <Image
          src="https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Interview Tips"
        />
        <TextContent>
          <h2>Prepare for Your Interview</h2>
          <p>
            Preparing for an interview is crucial to ensure you make a great impression. Here are some tips to help you get ready:
          </p>
          <ul>
            <li>Research the company and understand its values and mission.</li>
            <li>Review the job description and align your skills with the requirements.</li>
            <li>Practice common interview questions and answers.</li>
            <li>Prepare questions to ask the interviewer about the role and company.</li>
          </ul>

          <h2>During the Interview</h2>
          <p>
            The interview itself is your opportunity to showcase your skills and fit for the role. Keep these tips in mind:
          </p>
          <ul>
            <li>Dress appropriately for the company culture.</li>
            <li>Arrive on time, or a few minutes early.</li>
            <li>Be confident, but not arrogant.</li>
            <li>Listen carefully to the questions and answer clearly and concisely.</li>
          </ul>

          <h2>Follow Up After the Interview</h2>
          <p>
            Following up after the interview can leave a lasting positive impression. Here’s what you can do:
          </p>
          <ul>
            <li>Send a thank-you email to the interviewer within 24 hours.</li>
            <li>Reiterate your interest in the position and why you’re a good fit.</li>
            <li>Be patient while waiting for a response, and follow up if you haven’t heard back within a week or two.</li>
          </ul>
        </TextContent>
      </Content>
    </InterviewTipsPage>
  );
};

export default InterviewTips;
