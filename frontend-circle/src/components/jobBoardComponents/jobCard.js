import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CardContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 15px;
  background-color: #FFFEFE;
  height: 11rem;

`;

const JobTitle = styled.h3`
  margin-bottom: 10px;
`;

const JobDetails = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
`;

const ViewJobLink = styled(Link)`
  color: #3498db;
  text-decoration: none;
  font-weight: bold;
`;

const JobCard = ({ job, onClick }) => {
  return (
    <CardContainer onClick={() => onClick(job)}>
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
      </JobDetails>
      <ViewJobLink to={`/job-board/jobs/${job._id}`}>View Job</ViewJobLink>
    </CardContainer>
  );
};

export default JobCard;
