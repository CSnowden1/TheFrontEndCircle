import React, { useState, createContext, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import JobSubmissionPage from './pages/JobSubmissionPage';
import JobBoardPage from './pages/JobBoardPage';
import Navigation from './components/nav';
import LoginForm from './components/LoginForm';



export const UserContext = createContext(null);

function ProtectedRoute({ children }) {
  const { user } = useContext(UserContext);

  if (!user) {
    return <Navigate to="/" />;
  }

  return children;
}

function App() {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Router>
        <Header />
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/submit-job" element={
            <ProtectedRoute>
              <JobSubmissionPage />
            </ProtectedRoute>
          } />
          <Route path="/job-board" element={<JobBoardPage />} />
          {/* Consider adding a route for the LoginForm */}
        </Routes>
        <Footer />
      </Router>
    </UserContext.Provider>
  );
}

export default App;