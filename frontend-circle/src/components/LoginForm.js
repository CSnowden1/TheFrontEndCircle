import React, { useState } from 'react';
import { auth } from '../firebase-config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate


function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const login = async (e) => {
    e.preventDefault();
    setError('');
  
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("Logged in with Firebase!");
  
      // Fetch user data from your server
      const token = await userCredential.user.getIdToken(); // Get Firebase Auth token
      const response = await fetch('http://localhost:5000/api/users/login', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`, // Send token for verification
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
          password, email
        }),
      });
  
      const responseData = await response.text(); // Capture the response text
      console.log("Server response:", responseData); // Log the entire response
  
      let userData;
      try {
        userData = JSON.parse(responseData); // Try to parse the response text as JSON
      } catch (jsonError) {
        // Handle the case where the response is not valid JSON
        console.error("Error parsing JSON: ", jsonError);
        throw new Error("Invalid server response");
      }
  
      if (!response.ok) {
        throw new Error(userData.message || 'Error fetching user data');
      }
  
      console.log("User data fetched:", userData);
      navigate('/dashboard');
    } catch (error) {
      console.error("Error logging in: ", error);
      setError("Failed to log in. Please check your credentials."); // Display login error
    }
  };
  
  
  

  return (
    <div>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={login}>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <Link to="/register">Register here</Link>
      </p>
    </div>
  );
}

export default LoginForm;
