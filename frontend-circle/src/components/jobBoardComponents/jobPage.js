import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import JobFeedback from './jobFeedback';

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
      <h2>Job Post Details for Job ID: {jobId}</h2>
      <p>Title: {jobData.title}</p>
      <p>Description: {jobData.description}</p>
      
      
      {jobData.status === 'accepted' ? (
        <p>Status: Live Mode</p>
      ) : (
        <JobFeedback />
      )}
    </div>
  );
};

export default JobPage;
