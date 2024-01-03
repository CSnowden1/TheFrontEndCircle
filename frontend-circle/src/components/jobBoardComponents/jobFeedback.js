import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

const JobFeedback = () => {
  const { jobId } = useParams();
  const [formData, setFormData] = useState({
    reviewType: '',
    description: '',
    clearance: '',
    datePosted: '',
    jobHost: '',
    addJob: '',
  });
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/api/jobs/${jobId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Failed to update job: ${response.statusText}`);
      }

      console.log('Job updated successfully');
      history.push('/dashboard');
    } catch (error) {
      console.error('Error updating job:', error);
      setError('Failed to update job. Please try again.');
    }

    setFormData({
      reviewType: '',
      description: '',
      clearance: '',
      datePosted: '',
      jobHost: '',
      addJob: '',
    });
  };

  useEffect(() => {
    setError(null);
  }, [jobId]);
  return (
    <div>
      <h2>Job Feedback Form</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          What is the job type:
          <select name="reviewType" value={formData.reviewType} onChange={handleInputChange}>
            <option value="">Select...</option>
            <option value="Remote">Fully Remote</option>
            <option value="hybrid">Hybrid</option>
            <option value="onSite">onSite</option>
          </select>
        </label>

        <br />

        <label>
          Do you need a security clearance?
          <select name="clearance" value={formData.clearance} onChange={handleInputChange}>
            <option value="">Select...</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </label>

        <br />

        <label>
          How long ago was the job posted?
          <select name="datePosted" value={formData.datePosted} onChange={handleInputChange}>
            <option value="">Select...</option>
            <option value="new">0-3 Days</option>
            <option value="old">4-7 Days</option>
            <option value="dead">Week ago plus</option>
          </select>
        </label>

        <br />

        <label>
          Is the application hosted by the hiring company?
          <select name="jobHost" value={formData.jobHost} onChange={handleInputChange}>
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
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="What are your thoughts"
          />
        </label>

        <br />
        <label>
          Should we accept this job?
          <select name="addJob" value={formData.addJob} onChange={handleInputChange}>
            <option value="">Select...</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
         </select>
        </label>


        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default JobFeedback;
