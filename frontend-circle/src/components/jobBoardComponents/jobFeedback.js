import React, { useState } from 'react'

export default function JobFeedback() {
    const [reviewType, setReviewType] = useState(''); // State for dropdown
    const [description, setDescription] = useState('');
    const [clearance, setClearance] = useState('');
    const [datePosted, setDatePosted ] = useState('');
    const [jobHost, setJobHost ] = useState('');


    
  const handleReviewTypeChange = (event) => {
    setReviewType(event.target.value);
  };

  const handleDateChange = (event) => {
    setDatePosted(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleClearanceChange = (event) => {
    setClearance(event.target.value);
  };

  const handleJobHostChange = (event) => {
    setJobHost(event.target.value);
  };


  const handleSubmit = (event) => {
    event.preventDefault();

    // Assuming onSubmit is a function passed as a prop
 //   onSubmit({
 //     reviewType,
//      description,
//      isAdminOverwrite: isAdmin, // Indicates whether admin is overwriting data
 //   });

    // Clear form fields after submission
    setReviewType('');
    setDescription('');
    setClearance('');
  };

  return (
         <div>
            <p>Status: Review Mode</p>
                <form onSubmit={handleSubmit}>
            <label>
                What is the job type:
                <select value={reviewType} onChange={handleReviewTypeChange}>
                <option value="">Select...</option>
                <option value="Remote">Fully Remote</option>
                <option value="hybrid">Hybrid</option>
                <option value="onSite">onSite</option>
                </select>
            </label>
            <label>
                Do you need a security clearance?
                <select value={clearance} onChange={handleClearanceChange}>
                <option value="">Select...</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
                </select>
            </label>
            <label>
                How long ago was the job posted?
                <select value={datePosted} onChange={handleDateChange}>
                <option value="">Select...</option>
                <option value="new">0-3 Days</option>
                <option value="old">4-7</option>
                <option value="dead">Week ago plus</option>
                </select>
            </label>
            <label>
                Is the application hosted by the hiring company? Ensure the application isn't from a job board or a recruiter.
                <select value={jobHost} onChange={handleJobHostChange}>
                <option value="">Select...</option>
                <option value="employer">Yes: Application is on Hiring Companies Website</option>
                <option value="job board">No: Application is on a Job Board</option>
                <option value="recruiter">No: Application is on a Recruitment Website</option>                
                </select>
            </label>


            <br />

            <label>
                What are your thoughts on this job? Would you apply to it? Does this job bring value to our community?
                <textarea
                value={description}
                onChange={handleDescriptionChange}
                placeholder="What are you thoughts"
                />
            </label>

            <br />

            <button type="submit">Submit</button>
        </form>
    </div>
  )
}
