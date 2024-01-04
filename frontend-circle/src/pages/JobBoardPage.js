import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';


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
        console.log(jobData);

        setJobs(jobData);
      } catch (error) {
        console.error("Error fetching Jobs: ", error);
        setError("Failed to fetch Jobs. Please check with an admin.");
      }
    };

    fetchJobs(); // Call the function when the component mounts
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div>
      <h2>Job Board</h2>
      <div>
        {error && <p>{error}</p>}
        {jobs && (
          <table>
            <thead>
              <tr>
                <th>Company</th>
                <th>Created At</th>
                <th>Description</th>
                <th>Job Location Type</th>
                <th>Location</th>
                <th>Status</th>
                <th>Title</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job, index) => (
                <tr key={index}>
                  <td>{job.company}</td>
                  <td>{job.createdAt}</td>
                  <td>{job.description}</td>
                  <td>{job.jobLocationType}</td>
                  <td>{job.location}</td>
                  <td>{job.status}</td>
                  <td>{job.title}</td>
                  <td>{job.type}</td>
                  <td><Link to={`/job-board/jobs/${job._id}`}>View Job</Link></td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default JobBoardPage;
