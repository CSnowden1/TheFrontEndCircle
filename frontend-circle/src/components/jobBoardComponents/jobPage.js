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

const UserInfo = styled.div`
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
          <div>
            <div>
              <h3>{jobData.company.charAt(0).toUpperCase() + jobData.company.slice(1)}</h3>
            </div>
            <div>
              <strong>Location:</strong> {jobData.location}
            </div>
            <div>
              <strong>Type:</strong> {jobData.type}
            </div>
            <div>
              <div>Save Job</div>
            </div>  
          </div>
        <div>
          <div>
          <strong>Skills:</strong> {jobData.description}
          </div>
          <div>
            <strong>Description:</strong> {jobData.description}
          </div>  
        </div>
        <div>
          <div>
            <strong>Company's LinkedIn:</strong> {jobData.description}
          </div>
          <div>
            <strong>Company's Glassdoor Review:</strong> {jobData.description}
          </div>
          <div>
            <strong>Keywords:</strong> {jobData.description}
          </div>
          <div>
            <strong>Cover Letter Snippets:</strong> {jobData.description}
          </div>  
        </div>
        </JobDetails>
        <UserInfo user={jobData} />
      </JobInfo>
      <UserInfo>

      </UserInfo>
      {jobData.status === 'approved' ? (
        null
      ) : (
        <JobFeedback />
      )}
    </Container>
  );
};

export default JobPage;
