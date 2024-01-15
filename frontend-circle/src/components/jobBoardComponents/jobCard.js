import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CardContainer = styled.div`
  display: flex;
  align-items: baseline;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 15px;
  background-color: #FFFEFE;
  height: 11rem;
  width: 20rem;


  &:hover {
    cursor: pointer;
  }

`;

const JobTitle = styled.h3`
  margin-bottom: 10px;
  color: black;
`;

const JobDetails = styled.div`
  display: flex;
  flex-direction: column;
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
    <CardContainer to={`/job-board/jobs/${job._id}`}>
      <JobDetails>
      <JobTitle>{job.title}</JobTitle>
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
    </CardContainer >
  );
};

export default JobCard;
