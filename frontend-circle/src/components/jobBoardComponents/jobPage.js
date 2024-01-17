import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import JobFeedback from './jobFeedback';
import UserInfo from './userInfo';

const JobInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  margin-right: .25rem;

`;

const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  margin: .25rem;
  margin-top: 20px;
  margin-right: 20px;
  background-color: white;
  border-radius: 1rem;
  height: 70vh;
  padding: 1rem 2rem;

`;

const Container = styled.div`
  display: flex;
`;

const JobDetails = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 1rem;
  height: 70vh;
  padding: 1rem 2rem;
  flex-basis: 3;


`;

const Title = styled.h2`
  margin-bottom: 10px;
  color: purple;
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
    <div>
      <Container>
        <JobInfo>
          <JobDetails>
            <div>
              <div>
                <Title>{jobData.company.charAt(0).toUpperCase() + jobData.company.slice(1)}</Title>
              </div>
              <div>
                {jobData.location}
              </div>
              <div>
                  {jobData.type}
              </div>
              <div>
                <div>Apply on Company Site</div>
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
        </JobInfo>
        <UserContainer>
            <div>
              User profile Picture
            </div>
            <div>
              Give option to Show Suer name or Real Name
            </div>
            <div>
              Quick Tag for users
            </div>
            <div>
              Number of submitted Jobs
            </div>
            <div>
              Collab Projects
            </div>
            <div>
              Tags
            </div>
            <div>
              <div>
                Links:
              </div>
            </div>
            <div>
              I am open to collabing on projects 
            </div>
        </UserContainer>
        
      </Container>
      {jobData.status === 'approved' ? (
        null
      ) : (
        <JobFeedback />
      )}
    </div>
  );
};

export default JobPage;
