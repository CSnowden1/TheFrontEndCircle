import React from 'react';
import JobHistory from '../components/userComponets/SubmissionHistory';
import QuickJobSubmit from '../components/userComponets/QuickSubmit';
import { useUser } from '../context/userContext';
import { Link } from 'react-router-dom';


const Dashboard = ({  }) => {
  const { user } = useUser();
  
  return (
    <div>
      <h1>Welcome to your Dashboard, {user.user.username}!</h1>
      <h3>You have submitted {user.user.jobSubmissions.length} jobs</h3>
      <h3>Your Currently have {user.user.points} points</h3>
      <h3>You currently have {user.user.accessTickets.length} Access Tickets Available</h3>
      <QuickJobSubmit user={user} />
      <Link to="/dashboard/adminregister">Become An Admin</Link>
    </div>
  );
};

export default Dashboard;