import React, { useState } from 'react';

function JobSubmissionPage() {
  const [jobTitle, setJobTitle] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the form submission logic
    console.log('Job Title:', jobTitle);
    // Submit to backend or service
  };

  return (
    <div>
      <h2>Submit a Job Posting</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Job Title:</label>
          <input
            type="text"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
          />
        </div>
        {/* Add more form fields here */}
        <button type="submit">Submit Job</button>
      </form>
    </div>
  );
}

export default JobSubmissionPage;
