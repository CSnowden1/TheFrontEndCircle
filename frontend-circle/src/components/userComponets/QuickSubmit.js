import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #FFFEFE;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Heading = styled.h2`
  color: #333;
  text-align: center;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

  input,
  textarea,
  select {
    margin-bottom: 15px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    background-color: #FFF;
  }

  select {
    width: 100%;
  }

  button {
    padding: 12px;
    background-color: #A56B91;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #45a049;
    }

    &:disabled {
      background-color: #ddd;
      cursor: not-allowed;
    }
  }
`;

export default function QuickJobSubmit({ user }) {
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
    <FormContainer>
      <Heading>Submit a New Job</Heading>
      <StyledForm onSubmit={handleSubmit}>
        <input
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Job Title"
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Job Description"
        />
        <input
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="Company"
        />
        <input
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="Location"
        />
        <input
          name="link"
          value={formData.link}
          onChange={handleChange}
          placeholder="Link to job"
        />
        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
        >
          <option value="" disabled>Select Job Type</option>
          <option value="full-time">Full Time</option>
          <option value="part-time">Part Time</option>
        </select>
        <select
          name="jobLocationType"
          value={formData.jobLocationType}
          onChange={handleChange}
        >
          <option value="" disabled>Select Job Location Type</option>
          <option value="onsite">Onsite</option>
          <option value="remote">Remote</option>
        </select>
        <button type="submit">Submit Job</button>
      </StyledForm>
    </FormContainer>
  );
}
