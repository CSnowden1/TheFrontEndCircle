import React from 'react';
import JobHistory from './JobHistory';
import QuickJobSubmit from './QuickJobSubmit';


function Dashboard({ user }) {
  return (
    <div>
      <h1>Welcome, {user.name}</h1>
      <JobHistory user={user} />
      <QuickJobSubmit onJobSubmit={handleJobSubmit} />
    </div>
  );
}

export default Dashboard;
