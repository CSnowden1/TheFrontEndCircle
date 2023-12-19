import React, { useState } from 'react';
import { auth } from '../firebase-config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useHistory } from 'react-router-dom';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const login = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("Logged in with Firebase!");

      // Fetch user data from your server
      const token = await userCredential.user.getIdToken(); // Get Firebase Auth token
      const response = await fetch('/userdata', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`, // Send token for verification
          'Content-Type': 'application/json'
        },
      });

      const userData = await response.json();

      if (!response.ok) {
        throw new Error(userData.message || 'Error fetching user data');
      }

      console.log("User data fetched:", userData);
      history.push('/dashboard'); // Navigate to dashboard after successful login
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
