import React from 'react';
import JobHistory from '../components/userComponets/SubmissionHistory';
import QuickJobSubmit from '../components/userComponets/QuickSubmit';
import UserContext from '../context/userContext';
import { Link } from 'react-router-dom';
import AdminRequest from '../components/adminComponents/adminRequest'


const AdminRequestPage = ({ user }) => {

  return (
    <div>
      <h1>Welcome to your Dashboard, {user.user.username}!</h1>
        <AdminRequest />
    </div>
  );
};

export default AdminRequestPage;