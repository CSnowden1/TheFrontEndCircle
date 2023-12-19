import React, { useState } from 'react';
import { auth } from '../firebase-config';
import { createUserWithEmailAndPassword } from 'firebase/auth';



const states = ["Alabama", "Alaska", /* ... all other states ... */];



function RegisterForm() {
  const [formData, setFormData] = useState({
    email: '', confirmEmail: '', password: '', confirmPassword: '',
    firstName: '', lastName: '', city: '', state: '',
    experience: '', education: ''
  });

  const [isInUS, setIsInUS] = useState('');
  
  const handleUSChange = (event) => {
    setIsInUS(event.target.value);
  };

  const { email, confirmEmail, password, confirmPassword, firstName, lastName, city, state, experience, education } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const register = async (e) => {
    e.preventDefault();

    if (email !== confirmEmail) {
      return alert("Emails do not match!");
    }

    if (password !== confirmPassword) {
      return alert("Passwords do not match!");
    }

    if (state !== "United States") {
      return alert("Registration is only allowed for users in the United States.");
    }

    if (parseInt(experience) > 2) {
      return alert("Only users with less than 2 years of experience are allowed.");
    }

    if (education === "degree") {
      return alert("Registration is only for self-taught developers or bootcamp graduates.");
    }

    if (isInUS !== 'yes') {
        return alert("Registration is only allowed for users in the United States.");
      }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("Registered successfully!");
      // Redirect to login page or dashboard after registration
    } catch (error) {
      console.error("Error during registration: ", error);
    }
  };

  return (
    <div>
      <form onSubmit={register}>
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
