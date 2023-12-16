import React, { useState, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import JobSubmissionPage from './pages/JobSubmissionPage';
import JobBoardPage from './pages/JobBoardPage';
import Navigation from './components/nav';



export const UserContext = createContext(null);


function App() {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Router>
        <Header />
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/submit-job" element={<JobSubmissionPage />} />
        <Route path="/job-board" element={<JobBoardPage />} />
      </Routes>
        <Navigation />
        <Footer />
      </Router>
    </UserContext.Provider>

  );
}

export default App;