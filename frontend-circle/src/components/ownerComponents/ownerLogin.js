import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useOwner } from '../../context/userContext';
import PendingJobs from '../adminComponents/pendingJobsTable';
import PendingAdmins from './adminRequestTable';

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

function OwnerLoginForm() {
  const { login } = useOwner();
  const [ownerEmail, setOwnerEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [ownerState, setOwnerState] = useState(null);
  const [pendingJobs, setPendingJobs] = useState(null);
  const [adminRequests, setAdminRequests] = useState(null);
  const [formVisible, setFormVisible] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('http://localhost:5000/api/owner/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          password,
          ownerEmail,
        }),
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.message || 'Error logging in');
      }

      const pendingJobSubmissions = await fetch('http://localhost:5000/api/jobs/pending', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      const adminRequests = await fetch('http://localhost:5000/api/owner/requests', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      const adminRequestData = await adminRequests.json();
      const pendingJobData = await pendingJobSubmissions.json();

      setPendingJobs(pendingJobData);
      setAdminRequests(adminRequestData);
      console.log(adminRequestData);
      console.log(pendingJobData);

      login(responseData);
      setOwnerState(responseData);
      console.log("Owner data fetched:", responseData);
      console.log(responseData.owner.username);
      navigate('/dashboard');
    } catch (error) {
      console.error("Error logging in: ", error);
      setError("Failed to log in. Please check your credentials.");
    }
  };

  return (
    <div>
      <Button onClick={() => setFormVisible(!formVisible)}>
        {formVisible ? 'Hide Form' : 'View Owner Login'}
      </Button>
      <FormContainer visible={formVisible}>
        <h2>Owner Login</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleLogin}>
          <input type="text" value={ownerEmail} onChange={(e) => setOwnerEmail(e.target.value)} placeholder="Email" />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
          <button type="submit">Login</button>
        </form>
        {ownerState && (
          <div>
            <h3>Welcome {ownerState.owner.username}!</h3>
            <PendingAdmins adminData={adminRequests} />
            <PendingJobs jobData={pendingJobs} />
            <div> <h3>Job Acceptance History</h3>
              {/* Add your content here */}
            </div>
          </div>
        )}
      </FormContainer>
    </div>
  );
}

export default OwnerLoginForm;
