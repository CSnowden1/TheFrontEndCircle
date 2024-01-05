import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import JobCard from '../components/jobBoardComponents/jobCard'; // Import the JobCard component

const JobBoardContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Heading = styled.h2`
  color: #333;
`;

const ErrorMessage = styled.p`
  color: #ff0000;
`;

const JobList = styled.div`
  margin-top: 20px;
`;

const JobBoardPage = () => {
  const [error, setError] = useState(null);
  const [jobs, setJobs] = useState(null);

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
      } catch (error) {
        console.error("Error fetching Jobs: ", error);
        setError("Failed to fetch Jobs. Please check with an admin.");
      }
    };

    fetchJobs();
  }, []);

  return (
    <JobBoardContainer>
      <Heading>Job Board</Heading>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <JobList>
        {jobs && jobs.map((job) => <JobCard key={job._id} job={job} />)}
      </JobList>
    </JobBoardContainer>
  );
};

export default JobBoardPage;
