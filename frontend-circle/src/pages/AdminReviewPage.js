import React, { useEffect, useState } from 'react';

function AdminReviewPage() {
  const [jobPostings, setJobPostings] = useState([]);

  useEffect(() => {
    // TODO: Fetch pending job postings from the backend
  }, []);

  const handleApproval = (jobId, isApproved) => {
    // TODO: Send approval or rejection to the backend
    console.log('Job ID:', jobId, 'Approved:', isApproved);
  };

  return (
    <div>
      <h2>Review Job Postings</h2>
      {jobPostings.map(job => (
        <div key={job.id}>
          <h3>{job.title}</h3>
          <p>{job.description}</p>
          {/* Add more job details */}
          <button onClick={() => handleApproval(job.id, true)}>Approve</button>
          <button onClick={() => handleApproval(job.id, false)}>Reject</button>
          {/* Optionally add a field for rejection reason */}
        </div>
      ))}
    </div>
  );
}

export default AdminReviewPage;
