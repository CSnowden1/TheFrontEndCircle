import React, { useState } from 'react';
import JobHistory from '../components/userComponets/SubmissionHistory';
import QuickJobSubmit from '../components/userComponets/QuickSubmit';
import { useNormalUser } from '../context/userContext';
import { Link } from 'react-router-dom';
import AdminLoginForm from '../components/adminComponents/adminLogin';
import OwnerLoginForm from '../components/ownerComponents/ownerLogin';

const Dashboard = () => {
  const { user, updateUser } = useNormalUser();
  const [purchaseError, setPurchaseError] = useState('');

  const handlePurchase = async () => {
    if (user.user.points < 5) {
      setPurchaseError('Not enough points to purchase an access ticket.');
    } else {
      try {
        const response = await fetch('http://localhost:5000/api/users/profile', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: user.user.username, // Pass the username to the backend
          }),
        });

        if (response.ok) {
          const updatedUser = { ...user.user, points: user.user.points - 5 };
          updateUser(updatedUser);
          setPurchaseError('Access ticket purchased successfully.');
        } else {
          // Handle error response
          setPurchaseError('Failed to purchase access ticket. Please try again.');
        }
      } catch (error) {
        console.error('Error purchasing access ticket:', error);
        setPurchaseError('Failed to purchase access ticket. Please try again.');
      }
    }
  };

  return (
    <div>
      <h1>Welcome to your Dashboard, {user.user.username}!</h1>
      <h1>Welcome to your Dashboard, {user.user.username}!</h1>
      <h3>X amount of jobs have been added in the last week. There are currently x amount of high value jobs on the boards. X amount of Mid value jobs and x and amount of low value jobs jobs</h3>
      <h3>You have submitted {user.user.jobSubmissions.length} jobs</h3>
      <h3>You currently have {user.user.points} points</h3>
      <h3>You currently have {user.user.accessTickets.length} Access Tickets Available</h3>
      <h3>Redeem An Access Ticket For 24 hours <button>Click Me</button></h3>
      <h3>
        Purchase an Access Ticket for 5 points{' '}
        <button onClick={handlePurchase}>Purchase</button>
      </h3>
      {purchaseError && <p style={{ color: 'red' }}>{purchaseError}</p>}
      <QuickJobSubmit user={user} />
      { user.user.isAdmin? <AdminLoginForm /> : <Link to="/dashboard/adminregister">Become An Admin</Link>   }
      { user.user.isOwner? <div><h2> Welcome to your Owner Account </h2> <OwnerLoginForm /> </div> : <h2>Learn More</h2> }
    </div>
  );
};

export default Dashboard;
