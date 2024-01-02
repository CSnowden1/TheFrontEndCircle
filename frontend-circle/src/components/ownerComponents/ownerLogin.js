import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useOwner } from '../../context/userContext';

function OwnerLoginForm() {
  const { login } = useOwner();
  const [ownerEmail, setOwnerEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [ownerState, setOwnerState] = useState(null);
  const [pendingJobs, setPendingJobs] = useState(null); // Additional state for owner data
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

      const pendingJobSubmissions = await fetch('http://localhost:5000/api/jobs/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      const pendingJobData = await pendingJobSubmissions.json();

      setPendingJobs(pendingJobData);

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
          <div> <h3>Pending Admin Request</h3>
          
          </div>
          <div> <h3>Pending Job Submissions</h3>
          <table>
      <thead>
        <tr>
          <th>Company</th>
          <th>Created At</th>
          <th>Description</th>
          <th>Job Location Type</th>
          <th>Location</th>
          <th>Status</th>
          <th>Title</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        {pendingJobs.map((job, index) => (
          <tr key={index}>
            <td>{job.company}</td>
            <td>{job.createdAt}</td>
            <td>{job.description}</td>
            <td>{job.jobLocationType}</td>
            <td>{job.location}</td>
            <td>{job.status}</td>
            <td>{job.title}</td>
            <td>{job.type}</td>
          </tr>
        ))}
      </tbody>
    </table>
          </div>
          <div> <h3>Job Acceptance History</h3>

          </div>
        </div>
      )}
    </div>
  );
}

export default OwnerLoginForm;
