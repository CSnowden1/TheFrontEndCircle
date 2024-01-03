import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const PendingJobs = ({jobData}) => {
  const [selectedJob, setSelectedJob] = useState(null);

  const handleJobSelect = (job) => {
    setSelectedJob(job);
  };

  const handleJobSubmit = (jobType, reasoning) => {
    // Logic to submit the job with assigned type and reasoning
    console.log(`Submitting job ${selectedJob._id} with type ${jobType} and reasoning ${reasoning}`);
  };

  return (
    <div>
      <h3>Pending Job Submissions</h3>
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
            <th>Action</th>
          </tr>
        </thead>
        <tbody>

          {jobData.map((job, index) => (
            <tr key={index}>
              <td>{job.company}</td>
              <td>{job.createdAt}</td>
              <td>{job.description}</td>
              <td>{job.jobLocationType}</td>
              <td>{job.location}</td>
              <td>{job.status}</td>
              <td>{job.title}</td>
              <td>{job.type}</td>
              <td>
                <button onClick={() => handleJobSelect(job)}>Review</button>
              </td>
              <td>
              <Link to={`/job-board/jobs/${job._id}`}>Review Website here</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedJob && (
        <div>
          <h4>Reviewing Job: {selectedJob.title}</h4>
          <form>
            <label>Job Type:</label>
            <input type="text" placeholder="Enter job type" />
            <label>Reasoning:</label>
            <textarea placeholder="Provide reasoning for feedback"></textarea>
            <button type="submit" onClick={(e) => handleJobSubmit(e)}>Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default PendingJobs;
