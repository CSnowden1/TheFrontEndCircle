
import React, { useState, useContext} from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import UserContext from '../../context/userContext';



function AdminLoginForm() {
  const { Adminlogin } = useContext(UserContext);

  const [adminId, setAdminId ] = useSate('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); // Add this line to get the navigate function

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {

      const response = await fetch('http://localhost:5000/api/admin/login', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`, // Send token for verification
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          password,
          adminId,
        }),
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.message || 'Error logging in');
      }


      login(responseData);
      console.log("User data fetched:", responseData);
      navigate('/dashboard');
    } catch (error) {
      console.error("Error logging in: ", error);
      setError("Failed to log in. Please check your credentials.");
    }
  };

  return (
    <div>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleLogin}>
        <input type="admin id" value={adminId} onChange={(e) => setAdminId(e.target.value)} placeholder="adminId" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <button type="submit">Login</button>
      </form>
      <p>
        Not an Admin? <Link to="/dashboard/adminregister">Send a request here</Link>
      </p>
    </div>
  );
}


export default LoginForm;
