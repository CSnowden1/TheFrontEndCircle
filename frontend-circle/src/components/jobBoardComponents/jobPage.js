import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import JobFeedback from './jobFeedback';
import UserInfo from './userInfo';

const JobInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;


const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const JobDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  margin-bottom: 10px;
`;

const Description = styled.p`
  margin-bottom: 10px;
`;

const JobPage = () => {
  const { jobId } = useParams();
  const [jobData, setJobData] = useState(null);

  useEffect(() => {
    const apiUrl = `http://localhost:5000/api/jobs/${jobId}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => setJobData(data))
      .catch(error => console.error('Error fetching job data:', error));
  }, [jobId]);

  if (!jobData) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <JobInfo>
        <JobDetails>
          <Title>Job Post Details for Job ID: {jobId}</Title>
          <Description>Title: {jobData.title}</Description>
          <Description>Description: {jobData.description}</Description>
        </JobDetails>
        <UserInfo user={jobData} />
      </JobInfo>
      {jobData.status === 'approved' ? (
        null
      ) : (
        <JobFeedback />
      )}
    </Container>
  );
};

export default JobPage;
