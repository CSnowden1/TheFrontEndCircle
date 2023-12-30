import React, { useState } from 'react';
import { auth } from '../firebase-config';
import { createUserWithEmailAndPassword } from 'firebase/auth';



const states = ["Alabama", "Alaska", /* ... all other states ... */];



function RegisterForm() {
  const [formData, setFormData] = useState({
    username:'', email: '', confirmEmail: '', password: '', confirmPassword: '',
    firstName: '', lastName: '', city: '', state: '',
    experience: '', education: ''
  });

  const [isInUS, setIsInUS] = useState('');
  const [error, setError] = useState('');

  
  const handleUSChange = (event) => {
    setIsInUS(event.target.value);
  };

  const { username, email, confirmEmail, password, confirmPassword, firstName, lastName, city, state, experience, education } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const register = async (e) => {
    e.preventDefault();
    setError('');

    if (email !== confirmEmail) {
        return setError("Emails do not match!");
      }
    
      if (password !== confirmPassword) {
        return setError("Passwords do not match!");
      }
    
      if (parseInt(experience) > 2) {
        return setError("Only users with less than 2 years of experience are allowed.");
      }
    
      if (education === "degree") {
        return setError("Registration is only for self-taught developers or bootcamp graduates.");
      }
       
      if (isInUS !== 'yes') {
        return setError("Registration is only allowed for users in the United States.");
      }


      try {
        // Register with Firebase
        console.log('Registration Data:', {
          username,
          email,
          password,
          firstName,
          lastName,
          city,
          state,
          experience,
          education,
          isInUS: isInUS === 'yes',
        });
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log("Firebase Auth registration successful");
    
        // Then, send additional data to your server
        const response = await fetch('http://localhost:5000/api/users/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', },
          body: JSON.stringify({ 
            uid: userCredential.user.uid, // Include Firebase UID
            firstName, lastName, city, state, username, password, email,
            experience, education, isInUS: isInUS === 'yes' 
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
        <input type='username' name='username' value={username} onChange={handleChange} placeholder='Username' />
        <input type="email" name="email" value={email} onChange={handleChange} placeholder="Email" />
        <input type="email" name="confirmEmail" value={confirmEmail} onChange={handleChange} placeholder="Confirm Email" />
        <input type="password" name="password" value={password} onChange={handleChange} placeholder="Password" />
        <input type="password" name="confirmPassword" value={confirmPassword} onChange={handleChange} placeholder="Confirm Password" />
        <input type="text" name="firstName" value={firstName} onChange={handleChange} placeholder="First Name" />
        <input type="text" name="lastName" value={lastName} onChange={handleChange} placeholder="Last Name" />
        <p>Are you located in the United States?</p>
        <label>
          <input
            type="radio"
            name="isInUS"
            value="yes"
            checked={isInUS === 'yes'}
            onChange={handleUSChange}
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            name="isInUS"
            value="no"
            checked={isInUS === 'no'}  
            onChange={handleUSChange}
          />
          No
        </label> 
        <select name="state" value={formData.state} onChange={handleChange}>
          <option value="">Select State</option>
          {states.map((state) => (
            <option key={state} value={state}>{state}</option>
          ))}
        </select>
        <input type="text" name="city" value={city} onChange={handleChange} placeholder="City" />
        <input type="number" name="experience" value={experience} onChange={handleChange} placeholder="Years of Professional Experience" />
        <select name="education" value={education} onChange={handleChange}>
          <option value="">Select Education</option>
          <option value="degree">Degree</option>
          <option value="bootcamp">Bootcamp</option>
          <option value="self-taught">Self-Taught</option>
        </select>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegisterForm;
