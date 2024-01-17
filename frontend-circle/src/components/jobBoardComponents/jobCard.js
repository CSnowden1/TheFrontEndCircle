import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Tag from '../resuableComponents/tag'

const CardContainer = styled.div`
  display: flex;
  align-items: baseline;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 15px;
  background-color: #FFFEFE;
  height: auto;
  width: 20rem;


  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 1000px) {
    height: 20rem;
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




const JobCard = ({ job, isSelected, onClick }) => {
  return (
    <CardContainer 
      to={`/job-board/jobs/${job._id}`}
      style={{ border: isSelected ? '2px solid #A56B91' : 'none' }}
      onClick={onClick}
    >
      <JobDetails>
        <JobTitle>{job.title}</JobTitle>
        <div>
          {job.company}
        </div>
        <div>
          {job.location}
        </div>
        <div>
        {job.type}
        </div>
        <div>
        <Tag />
        <div>
          Havoc Thoughts
        </div>
          <strong>Posted:</strong> 3 days ago   
        </div>
         
      </JobDetails>
    </CardContainer>
  );
};

export default JobCard;
