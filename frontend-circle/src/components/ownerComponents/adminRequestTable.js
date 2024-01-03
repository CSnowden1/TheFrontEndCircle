import React from 'react';


export default function pendingAdmins({adminData}) {

    return <>
        <div> <h3>Pending Admin Request</h3>
          <table>
      <thead>
        <tr>
          <th>User ID</th>
          <th>Username</th>
          <th>Email</th>
          <th>Password</th>
          <th>Is Admin</th>
          {/* Add more columns as needed */}
        </tr>
      </thead>
      <tbody>
        {adminData.map((user, index) => (
          <tr key={index}>
            <td>{user._id}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.password}</td>
            <td>{user.isAdmin ? 'Yes' : 'No'}</td>
          </tr>
        ))}
      </tbody>
    </table>
          </div>
    
    </>
}