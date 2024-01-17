import React from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';


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

const ViewJobLink = styled(Link)`
  
  padding: 12px;
  background-color: #A56B91;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
  margin-right: .5rem;



  &:hover {
    text-decoration: underline;
  }
`;

const ActionBox = styled.div `
display: flex;
align-items: center;

`



const JobPreview = ({ job }) => {
    if (!job) {
        return <PreviewContainer>No job selected</PreviewContainer>;
      }

  return (
    
    <PreviewContainer>
      <JobTitle>{job.title}</JobTitle>
      <JobDetails>
        <div>
          <div>
            <h3>{job.company.charAt(0).toUpperCase() + job.company.slice(1)}</h3>
          </div>
          <div>
             {job.location}
          </div>
          <div>
             {job.type}
          </div>
          <div>
             {job.type}
          </div>
          <ActionBox>
          <ViewJobLink to={`/jobs/${job._id}`}>Apply Here</ViewJobLink>
            <div>Save Job</div>
          </ActionBox>  
        </div>
        <div>
          <strong>Skills:</strong> {job.description}
        </div>
        <div>
          <strong>Description:</strong> {job.description}
        </div>
      </JobDetails>
     
    </PreviewContainer>
  );
};

export default JobPreview;
