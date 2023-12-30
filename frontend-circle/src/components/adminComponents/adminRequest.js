import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';


function RegisterForm() {
  const [formData, setFormData] = useState({
    password: '', confirmPassword: '', github: '', linkedIn: '', reason: ''
  });

  const [error, setError] = useState('');

  const { username, email, password, confirmPassword, linkedIn, github, reason } = formData;

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
          username,
          email,
          password,
          gitHub,
          linkedIn,
          reason
        });
    
        // Then, send additional data to your server
        const response = await fetch('http://localhost:5000/api/admin/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', },
          body: JSON.stringify({ 
            uid: userCredential.user.uid, // Include Firebase UID
            linkedIn, github, reason, username, password, email 
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
        <input type="link" name="LinkedIn" value={linkedIn} onChange={handleChange} placeholder='LinkedIn URL' />
        <input type="link" name="GitHub" value={github} onChange={handleChange} placeholder='GitHub URL' /> 
        <input type="text" name="Reason" value={reason} onChange={handleChange} placeholder='Why Do you Want to be an Admin' />
        <input type="password" name="password" value={password} onChange={handleChange} placeholder="Admin Password" />
        <input type="password" name="password" value={password} onChange={handleChange} placeholder="Confirm Admin Password" />
        <button type="submit">Send Request</button>
      </form>
    </div>
  );
}

export default RegisterForm;
