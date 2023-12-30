import React, { useState, createContext, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import JobSubmissionPage from './pages/JobSubmissionPage';
import JobBoardPage from './pages/JobBoardPage';
import Navigation from './components/nav';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Dashboard from './pages/Dashboard'
import UserContext from './context/userContext';
import AdminRequestPage from  './pages/adminRequestPage';

function ProtectedRoute({ children }) {
  const { user } = useContext(UserContext);

  if (!user) {
    console.log('User not authenticated. Redirecting to home.');
    return <Navigate to="/" />;
  }

  return <AdminRequestPage user={user}>{children}</AdminRequestPage> && <Dashboard user={user}>{children}</Dashboard>;
}



function App() {
  const [user, setUser] = useState(null);


  const login = (userData) => {
    setUser(userData);
  };


  return (
    <UserContext.Provider value={{ user, login }}>
      <Router>
        <Header />
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/job-board" element={
            <ProtectedRoute>
              <JobBoardPage />
            </ProtectedRoute>
          } />
          <Route path="/submit-job" element={
          <ProtectedRoute>
            <JobSubmissionPage />
          </ProtectedRoute>
          } />
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          <Route path="/dashboard/adminregister" element={
             <ProtectedRoute>
                <AdminRequestPage />
            </ProtectedRoute>
          } /> 
          <Route path='/login' element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />        
        </Routes>
        <Footer />
      </Router>
    </UserContext.Provider>
  );
}

export default App;