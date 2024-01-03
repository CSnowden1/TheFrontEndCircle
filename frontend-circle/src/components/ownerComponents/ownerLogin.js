import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useOwner } from '../../context/userContext';
import PendingJobs from '../adminComponents/pendingJobsTable';
import PendingAdmins from './adminRequestTable';

function OwnerLoginForm() {
  const { login } = useOwner();
  const [ownerEmail, setOwnerEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [ownerState, setOwnerState] = useState(null);
  const [pendingJobs, setPendingJobs] = useState(null);
  const [adminRequests, setAdminRequests] = useState(null); // Additional state for owner data
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
      setOwnerState(responseData); // Set owner state with the fetched data
      console.log("Owner data fetched:", responseData);
      console.log(responseData.owner.username);
    } catch (error) {
      console.error("Error logging in: ", error);
      setError("Failed to log in. Please check your credentials.");
    }
  };

  return (
    <div>
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

          </div>
        </div>
      )}
    </div>
  );
}

export default OwnerLoginForm;
