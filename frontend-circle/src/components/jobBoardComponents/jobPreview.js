import React from 'react';
import styled from 'styled-components';

const PreviewContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  height: 100vh;
  width: 60%;
  background-color: #FFFEFE;
  position: sticky;
  top: 0px;
`;

const JobTitle = styled.h3`
  color: #333;
`;

const JobDetails = styled.div`
  margin-top: 10px;

  div {
    margin-bottom: 8px;
  }

  strong {
    margin-right: 8px;
  }


  h3 {
    color: #A56B91;
  }
`;

const ViewJobLink = styled.a`
  
  padding: 12px;
  background-color: #A56B91;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;



  &:hover {
    text-decoration: underline;
  }
`;

const JobPreview = ({ job }) => {
    if (!job) {
        return <PreviewContainer>No job selected</PreviewContainer>;
      }

  return (
    
    <PreviewContainer>
      <JobTitle>{job.title}</JobTitle>
      <JobDetails>
        <div>
          <h3>{job.company.charAt(0).toUpperCase() + job.company.slice(1)}</h3>
        </div>
        <div>
          <ViewJobLink to={`/job-board/jobs/${job._id}`}>Apply Here</ViewJobLink>
        </div>
        <div>
          <strong>Location:</strong> {job.location}
        </div>
        <div>
          <strong>Type:</strong> {job.type}
        </div>
        <div>
          <strong>Description:</strong> {job.description}
        </div>
      </JobDetails>
     
    </PreviewContainer>
  );
};

export default JobPreview;
