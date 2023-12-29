import React, { useState, useContext} from 'react';
import { auth } from '../firebase-config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import UserContext from '../context/userContext';



function LoginForm() {
  const { login } = useContext(UserContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); // Add this line to get the navigate function

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("Logged in with Firebase!");

      // Fetch user data from your server
      const token = await userCredential.user.getIdToken(); // Get Firebase Auth token

      // Check if the token is valid (optional)
      // const isTokenValid = await validateTokenOnServer(token);

      const response = await fetch('http://localhost:5000/api/users/login', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`, // Send token for verification
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          password,
          email,
        }),
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.message || 'Error logging in');
      }


      login(responseData);
      console.log("User data fetched:", responseData);
      navigate('/dashboard');
    } catch (error) {
      console.error("Error logging in: ", error);
      setError("Failed to log in. Please check your credentials.");
    }
  };

  return (
    <div>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleLogin}>
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
