import React, { useState } from 'react';
import styled from 'styled-components';
import JobHistory from '../components/userComponets/SubmissionHistory';
import QuickJobSubmit from '../components/userComponets/QuickSubmit';
import { useNormalUser } from '../context/userContext';
import { Link } from 'react-router-dom';
import AdminLoginForm from '../components/adminComponents/adminLogin';
import OwnerLoginForm from '../components/ownerComponents/ownerLogin';

const DashboardContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Heading = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const InfoSection = styled.div`
  margin-bottom: 20px;

  h3 {
    font-size: 18px;
    margin-bottom: 10px;
  }

  button {
    padding: 10px;
    background-color: #3498db;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    margin-top: 10px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #2980b9;
    }
  }

  p {
    color: red;
  }
`;

const AccessTicketSection = styled.div`
  margin-bottom: 20px;

  h3 {
    font-size: 18px;
    margin-bottom: 10px;
  }

  button {
    padding: 10px;
    background-color: #e74c3c;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    margin-top: 10px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #c0392b;
    }
  }
`;

const LearnMoreLink = styled(Link)`
  font-size: 18px;
  color: #3498db;
  text-decoration: none;
  font-weight: bold;
`;

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
    <DashboardContainer>
      <Heading>Welcome to your Dashboard, {user.user.username}!</Heading>
      <InfoSection>
        <h3>X amount of jobs have been added in the last week. There are currently x amount of high-value jobs on the boards. X amount of Mid-value jobs and x and amount of low-value jobs jobs</h3>
        <h3>You have submitted {user.user.jobSubmissions.length} jobs</h3>
        <h3>You currently have {user.user.points} points</h3>
        <h3>You currently have {user.user.accessTickets.length} Access Tickets Available</h3>
      </InfoSection>
      <AccessTicketSection>
        <h3>Redeem An Access Ticket For 24 hours <button>Click Me</button></h3>
        <h3>
          Purchase an Access Ticket for 5 points{' '}
          <button onClick={handlePurchase}>Purchase</button>
        </h3>
        {purchaseError && <p>{purchaseError}</p>}
      </AccessTicketSection>
      <QuickJobSubmit user={user} />
      { user.user.isAdmin? <AdminLoginForm /> : <LearnMoreLink to="/dashboard/adminregister">Become An Admin</LearnMoreLink>   }
      { user.user.isOwner? <div><h2> Welcome to your Owner Account </h2> <OwnerLoginForm /> </div> : <h2>Learn More</h2> }
    </DashboardContainer>
  );
};

export default Dashboard;
