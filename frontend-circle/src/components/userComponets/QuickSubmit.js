import React, { useState } from 'react';

export default function QuickJobSubmit({ onJobSubmit }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    company: '',
    location: '',
    type: '',
    jobLocationType: '',
    // Include any other fields necessary
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Assuming 'onJobSubmit' is a function passed down to handle the submission
      await onJobSubmit(formData);
    } catch (error) {
      console.error('Error submitting job:', error);
    }
  };

  return (
    <div>
      <h2>Submit a New Job</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Job Title"
        />
        <button type="submit">Submit Job</button>
      </form>
    </div>
  );
}
