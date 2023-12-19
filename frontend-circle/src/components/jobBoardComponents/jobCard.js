import React from 'react';

function JobBoardCard({ job }) {
  return (
    <div className="job-board-card">
      <h3>{job.title}</h3>
      <p><strong>Company:</strong> {job.company}</p>
      <p><strong>Type:</strong> {job.type}</p>
      <p><strong>Location:</strong> {job.jobLocationType}</p>
      <p><strong>Date Posted:</strong> {new Date(job.createdAt).toLocaleDateString()}</p>
      <p><strong>Key Skills:</strong> {job.keySkills.join(', ')}</p>
      <a href={job.link} target="_blank" rel="noopener noreferrer">Apply Here</a>
    </div>
  );
}

export default JobBoardCard;
