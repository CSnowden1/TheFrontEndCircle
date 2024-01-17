import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import JobCard from '../components/jobBoardComponents/jobCard'; // Import the JobCard component
import JobSearch from '../components/jobBoardComponents/jobSearch'
import JobFilters from '../components/jobBoardComponents/jobFilters'
import JobPreview from '../components/jobBoardComponents/jobPreview'

const JobBoardContainer = styled.div`
  width: 100%;
  padding: 5rem 18rem;


  @media screen and (max-width: 1000px) {
    padding: 2rem;
}

`;

const JobBox = styled.div`
display: flex;

`

const Heading = styled.h2`
  color: #333;
`;

const ErrorMessage = styled.p`
  color: #ff0000;
`;

const JobList = styled.div`
  margin-right: 15px;
`;


const JobBoardPage = () => {
  const [error, setError] = useState(null);
  const [jobs, setJobs] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const getJobs = await fetch('http://localhost:5000/api/jobs/approved', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const jobData = await getJobs.json();
        setJobs(jobData);

        // Set the first job as the default selected job
        if (jobData && jobData.length > 0) {
          setSelectedJob(jobData[0]);
        }
      } catch (error) {
        console.error("Error fetching Jobs: ", error);
        setError("Failed to fetch Jobs. Please check with an admin.");
      }
    };

    fetchJobs();
  }, []);

  const handleJobClick = (job) => {
    
    setSelectedJob(job);
  };

 // JobBoardPage component

return (
  <JobBoardContainer>
    <JobSearch />
    <JobFilters />
    {error && <ErrorMessage>{error}</ErrorMessage>}
    <JobBox>
      <JobList>
        {jobs &&
          jobs.map((job) => (
            <JobCard
              key={job._id}
              job={job}
              isSelected={selectedJob && job._id === selectedJob._id}
              onClick={() => handleJobClick(job)}
            />
          ))}
      </JobList>
      <JobPreview job={selectedJob} />
    </JobBox>
  </JobBoardContainer>
);
          }
          
export default JobBoardPage;
