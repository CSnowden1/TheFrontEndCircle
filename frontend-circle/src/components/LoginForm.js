import React, { useState, useContext } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { auth } from '../firebase-config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { useNormalUser } from '../context/userContext';

const LoginFormContainer = styled.div`
  max-width: 100%;
  margin: 5rem 35rem; /* Center the form */
  padding: 5rem 2rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #FFFEFE;
  color: #545854;
`;

const ErrorMessage = styled.p`
  color: #ff0000;
  margin-bottom: 10px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0;

  input {
    margin-bottom: 15px;
    padding: 1rem;
    width: 100%; /* Full width on small screens */
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    background-color: #FFFEFE;
    border: solid black 1px;
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

const RegisterLink = styled.p`
  margin-top: 15px;

  a {
    color: #3498db;
    text-decoration: none;
    font-weight: bold;
  }
`;

const Heading = styled.h2`
  color: black;
  padding-bottom: 2rem;
`;

const BodyBackgroundColor = createGlobalStyle`
  body {
    background-color: #f0f0f0; // Change this color to the desired background color
    height: 100vh;
  }
`;

function LoginForm() {
  const { login } = useNormalUser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('Logged in with Firebase!');

      const token = await userCredential.user.getIdToken();

      const response = await fetch('http://localhost:5000/api/users/login', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
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

      console.log('User data fetched:', responseData);
      navigate('/dashboard');
    } catch (error) {
      console.error('Error logging in:', error);
      setError('Failed to log in. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <LoginFormContainer>
      <BodyBackgroundColor />
      <Heading>Sign In</Heading>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <StyledForm onSubmit={handleLogin}>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <button type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </StyledForm>
      <RegisterLink>
        Don't have an account? <Link to="/register">Register here</Link>
      </RegisterLink>
    </LoginFormContainer>
  );
}

export default LoginForm;
