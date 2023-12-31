import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';

function RegisterForm({ user }) {
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: '',
    github: '',
    linkedIn: '',
    reason: '',
  });

  const [error, setError] = useState('');

  const { password, confirmPassword, linkedIn, github, reason } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const register = async (e) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      return setError("Passwords do not match!");
    }

    try {
      // Register with Firebase
      console.log('Registration Data:', {
        email: user.user.email, // Assuming email is available in the user object
        password,
        github,
        linkedIn,
        reason,
      });

      // Send additional data to your server
      const response = await fetch('http://localhost:5000/api/admin/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          linkedIn,
          github,
          reason,
          username: user.user.username,
          password,
          email: user.user.email,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Error during registration');
      }

      console.log("Server-side registration successful!");
      // Redirect to login page or dashboard after registration
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={register}>
        <input type="link" name="linkedIn" value={linkedIn} onChange={handleChange} placeholder="LinkedIn URL" />
        <input type="link" name="github" value={github} onChange={handleChange} placeholder="GitHub URL" />
        <input type="text" name="reason" value={reason} onChange={handleChange} placeholder="Why do you want to be an Admin" />
        <input type="password" name="password" value={password} onChange={handleChange} placeholder="Admin Password" />
        <input type="password" name="confirmPassword" value={confirmPassword} onChange={handleChange} placeholder="Confirm Admin Password" />
        <button type="submit">Send Request</button>
      </form>
    </div>
  );
}

export default RegisterForm;
