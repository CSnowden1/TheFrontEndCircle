import React from 'react';
import JobHistory from '../components/userComponets/SubmissionHistory';
import QuickJobSubmit from '../components/userComponets/QuickSubmit';
import { useNormalUser } from '../context/userContext';
import { Link } from 'react-router-dom';
import AdminLoginForm from '../components/adminComponents/adminLogin';
import OwnerLoginForm from '../components/ownerComponents/ownerLogin';


const Dashboard = ({  }) => {
  const { user } = useNormalUser();
  //Admin Logged in Data something or a null
  return (
    <div>
      <h1>Welcome to your Dashboard, {user.user.username}!</h1>
      <h3>You have submitted {user.user.jobSubmissions.length} jobs</h3>
      <h3>Your Currently have {user.user.points} points</h3>
      <h3>You currently have {user.user.accessTickets.length} Access Tickets Available</h3>
      <QuickJobSubmit user={user} />
      { user.user.isAdmin? <AdminLoginForm /> : <Link to="/dashboard/adminregister">Become An Admin</Link>   }
      { user.user.isOwner? <div><h2> Welcome to your Owner Account </h2> <OwnerLoginForm /> </div> : <h2>Learn More</h2> }
    </div>
  );
};

export default Dashboard;