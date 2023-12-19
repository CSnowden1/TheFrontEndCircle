import React from 'react';
import JobHistory from '../components/userComponets/SubmissionHistory';
import QuickJobSubmit from '../components/userComponets/QuickSubmit';


function Dashboard({ user }) {
  return (
    <div>
      <h1>Welcome, {user.name}</h1>
      <JobHistory user={user} />
      <QuickJobSubmit />
    </div>
  );
}

export default Dashboard;
