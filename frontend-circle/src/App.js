import React, { useState, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import JobSubmissionPage from './pages/JobSubmissionPage';
import JobBoardPage from './pages/JobBoardPage';
import Navigation from './components/nav';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Dashboard from './pages/Dashboard';
import AdminRequestPage from './pages/adminRequestPage';
import { UserProvider } from './context/userContext'; // Import UserProvider
import { useNormalUser } from './context/userContext';
import AdminLogin from './components/adminComponents/adminLogin'
import OwnerLogin from './components/ownerComponents/ownerLogin'
import JobPage from './components/jobBoardComponents/jobPage'

function ProtectedRoute({ children }) {
  const { user } = useNormalUser();

  if (!user) {
    console.log('User not authenticated. Redirecting to home.');
    return <Navigate to="/" />;
  }

  return <>{children}</>;
}

function App() {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
  };

  return (
    <UserProvider>
      <Router>
        <Header />
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/job-board" element={<ProtectedRoute><JobBoardPage /></ProtectedRoute>} />
          <Route path="/job-board/jobs/:jobId" element={<ProtectedRoute><JobPage /></ProtectedRoute>} />
          <Route path="/submit-job" element={<ProtectedRoute><JobSubmissionPage /></ProtectedRoute>} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard user={user} /></ProtectedRoute>} />
          <Route path="/dashboard/adminregister" element={<ProtectedRoute><AdminRequestPage /></ProtectedRoute>} />
          <Route path='/login' element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/admin" element={<ProtectedRoute><AdminLogin /></ProtectedRoute >}/>
          <Route path="/owner" element={<ProtectedRoute><OwnerLogin /></ProtectedRoute >}/>
        </Routes>
        <Footer />
      </Router>
    </UserProvider>
  );
}

export default App;
