import React, { useState } from 'react';
import styled from 'styled-components';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { useAdmin } from '../../context/userContext';
import PendingJobs from '../adminComponents/pendingJobsTable';

const FormContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #FFFEFE;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: ${({ visible }) => (visible ? 'block' : 'none')};
`;

const Button = styled.button`
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
`;

function AdminLoginForm() {
  const { login } = useAdmin();
  const [adminId, setAdminId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [adminState, setAdminState] = useState(null);
  const [pendingJobs, setPendingJobs] = useState(null);
  const [formVisible, setFormVisible] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('http://localhost:5000/api/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          password,
          adminId,
        }),
      });

      const pendingJobSubmissions = await fetch('http://localhost:5000/api/jobs/pending', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const responseData = await response.json();
      const pendingJobData = await pendingJobSubmissions.json();

      if (!response.ok) {
        throw new Error(responseData.message || 'Error logging in');
      }

      setPendingJobs(pendingJobData);
      login(responseData);
      setAdminState(responseData);
      console.log("Admin data fetched:", responseData);
      navigate('/dashboard');
    } catch (error) {
      console.error("Error logging in: ", error);
      setError("Failed to log in. Please check your credentials.");
    }
  };

  return (
    <div>
      <Button onClick={() => setFormVisible(!formVisible)}>
        {formVisible ? 'Hide Form' : 'View Admin Login'}
      </Button>
      <FormContainer visible={formVisible}>
        <h2>Admin Login</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleLogin}>
          <input type="admin id" value={adminId} onChange={(e) => setAdminId(e.target.value)} placeholder="adminId" />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
          <button type="submit">Login</button>
        </form>
        <p>
          Not an Admin? <Link to="/dashboard/adminregister">Send a request here</Link>
        </p>
        {adminState && (
          <div>
            <h3>Welcome, {adminState.username}!</h3>
            <PendingJobs jobData={ pendingJobs } />
          </div>
        )}
      </FormContainer>
    </div>
  );
}

export default AdminLoginForm;
