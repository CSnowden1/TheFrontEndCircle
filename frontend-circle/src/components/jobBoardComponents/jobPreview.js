import React from 'react';
import styled from 'styled-components';

const PreviewContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  height: 100vh;
  width: 80%;
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
`;

const ViewJobLink = styled.a`
  display: block;
  margin-top: 10px;
  text-decoration: none;
  color: #0366d6;
  font-weight: bold;

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
          <strong>Company:</strong> {job.company}
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
      <ViewJobLink to={`/job-board/jobs/${job._id}`}>View Job</ViewJobLink>
    </PreviewContainer>
  );
};

export default JobPreview;
