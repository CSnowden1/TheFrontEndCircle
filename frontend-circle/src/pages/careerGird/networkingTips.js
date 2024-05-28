// src/components/homePageComponents/NetworkingTips.js
import React from 'react';
import styled from 'styled-components';

const NetworkingTipsPage = styled.div`
  background-color: #4682B4;
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

const NetworkingTips = () => {
  return (
    <NetworkingTipsPage>
      <Content>
        <Title>Networking Tips</Title>
        <Image
          src="https://images.pexels.com/photos/860227/pexels-photo-860227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Networking Tips"
        />
        <TextContent>
          <h2>Prepare for Networking</h2>
          <p>
            Networking is key to career growth. Here are some tips to help you prepare:
          </p>
          <ul>
            <li>Identify key events and meetups in your industry.</li>
            <li>Update your LinkedIn profile and have business cards ready.</li>
            <li>Practice your elevator pitch to introduce yourself effectively.</li>
            <li>Research attendees and speakers to know who you want to connect with.</li>
          </ul>

          <h2>During Networking Events</h2>
          <p>
            Here are some tips to make the most out of networking events:
          </p>
          <ul>
            <li>Be approachable and confident.</li>
            <li>Listen actively and show genuine interest in conversations.</li>
            <li>Exchange contact information and follow up with new connections.</li>
            <li>Take notes to remember key details about people you meet.</li>
          </ul>

          <h2>Follow Up After Networking</h2>
          <p>
            Following up after networking events is crucial. Here’s what you can do:
          </p>
          <ul>
            <li>Send personalized follow-up messages to new contacts.</li>
            <li>Stay connected by sharing relevant content and updates.</li>
            <li>Schedule regular catch-ups to maintain relationships.</li>
          </ul>
        </TextContent>
      </Content>
    </NetworkingTipsPage>
  );
};

export default NetworkingTips;
