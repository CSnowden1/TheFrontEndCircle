import React, { useState } from 'react';
import styled from 'styled-components';
import JobHistory from '../components/userComponets/SubmissionHistory';
import QuickJobSubmit from '../components/userComponets/QuickSubmit';
import { useNormalUser } from '../context/userContext';
import { Link } from 'react-router-dom';
import AdminLoginForm from '../components/adminComponents/adminLogin';
import OwnerLoginForm from '../components/ownerComponents/ownerLogin';

const DashboardContainer = styled.div`
  margin: 0 auto;
  padding: 5rem 18rem
  color: black;
`;

const Heading = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;

`;
const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
  font-size: 1rem;

  h4 {
    font-size: 1rem;
    margin-bottom: 10px;
    color: black;
  }

`;

const InfoSection = styled.div`
  display: flex;
  flex-direction: row;
  padding: 2rem;
  border-radius: 1rem;
  margin: 5rem 18rem;
  border: solid #545854  .25px;
  align-items:center;
  justify-content: space-between;
  background-color: #FFFEFE;
  

  h3 {
    font-size: 18px;
    margin-bottom: 10px;
    color: black;
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


const AccountLogin = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 5rem 18rem;

`;


const LearnMoreLink = styled(Link)`
  font-size: 18px;
  color: #3498db;
  text-decoration: none;
  font-weight: bold;
`;

const StatStack = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


  h3 {
    font-size: 3rem;
    color: black;
  }

  p {
    font-size: 1rem
        color: black;
  }


  button {
    padding: 10px;
    background-color: transparent;
    color: #A56B91;
    border: solid #A56B91 .5px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    margin-top: 10px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #c0392b;
      color: white;
    }

    a {
      color: #A56B91;
    }
`;

const CircularImage = styled.img`
  border-radius: 50%;
  max-width: 100px; 
  height: auto; 
  display: block;
  margin: 0 auto;
  margin-right: .5rem;
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
      <InfoSection>
      <Heading>
        <CircularImage
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd2qp0siotla746.cloudfront.net%2Fimg%2Fuse-cases%2Fprofile-picture%2Ftemplate_0.jpg&f=1&nofb=1&ipt=07b50593471f3bff21914bba6e815d549d233884e367d533108f8641061a1eb3&ipo=images"
          alt="Profile"
        />
          <UserInfo>
            Chris Snowden | {user.user.username}
            <h4>Frontend Developer</h4>
            <h4>54 Followers</h4>
          </UserInfo>
      </Heading>
        <StatStack>
          <h3>{user.user.jobSubmissions.length}</h3>
          <p>Job Submissions</p>
          <button><Link to="/submit-job">Submit Job</Link></button>
        </StatStack>
        <StatStack>
          <h3>{user.user.points}</h3>
          <p>Points</p>
          <button onClick={handlePurchase}>Purchase Ticket</button>
          {purchaseError && <p>{purchaseError}</p>}
        </StatStack>
        <StatStack>
          <h3>{user.user.accessTickets.length} </h3>
          <p>Access Tickets</p>  
          <button>Redeem Ticket</button>
        </StatStack>
      </InfoSection>
      <AccountLogin>
        { user.user.isAdmin? <AdminLoginForm /> : <LearnMoreLink to="/dashboard/adminregister">Become An Admin</LearnMoreLink>   }
        { user.user.isOwner? <OwnerLoginForm />  : null  }
      </AccountLogin>
      <QuickJobSubmit user={user} />
  </DashboardContainer>
  );
};

export default Dashboard;
