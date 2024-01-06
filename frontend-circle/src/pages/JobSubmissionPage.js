import React, { useState } from 'react';
import { useNormalUser } from '../context/userContext';

const JobSubmissionPage = () => {
  const { user, updateUser } = useNormalUser();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    company: '',
    location: '',
    type: '',
    jobLocationType: '',
    link: '',
    user: `${user.user.username}`,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value, user: `${user.user.username}` });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Assuming 'onJobSubmit' is a function passed down to handle the submission
      console.log(formData);

      // API call to submit job data
      const response = await fetch('http://localhost:5000/api/jobs/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Error submitting job');
      }

      console.log('Job submitted successfully:', data);

      // Optionally, reset the form after submission
      setFormData({
        title: '',
        description: '',
        company: '',
        location: '',
        type: '',
        jobLocationType: '',
        link: '', // Reset 'link' field
      });
    } catch (error) {
      console.error('Error submitting job:', error);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Submit a New Job</h2>
      <form style={styles.form} onSubmit={handleSubmit}>
        <label>
          Job Title
          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter job title"
          />
        </label>

        <label>
          Job Description
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter job description"
          />
        </label>

        <label>
          Company
          <input
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Enter company name"
          />
        </label>

        <label>
          Location
          <input
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Enter job location"
          />
        </label>

        <label>
          Job Type
          <select name="type" value={formData.type} onChange={handleChange}>
            <option value="" disabled>Select job type</option>
            <option value="full-time">Full Time</option>
            <option value="part-time">Part Time</option>
          </select>
        </label>

        <label>
          Job Location Type
          <select name="jobLocationType" value={formData.jobLocationType} onChange={handleChange}>
            <option value="" disabled>Select job location type</option>
            <option value="onsite">Onsite</option>
            <option value="remote">Remote</option>
          </select>
        </label>

        <label>
          Link to Job
          <input
            name="link"
            value={formData.link}
            onChange={handleChange}
            placeholder="Enter link to job"
          />
        </label>

        <button type="submit" style={styles.submitButton}>
          Submit Job
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    padding: '20px',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '400px',
    width: '100%',
  },
  submitButton: {
    backgroundColor: '#007BFF',
    color: '#fff',
    padding: '10px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '20px',
  },
};

export default JobSubmissionPage;
