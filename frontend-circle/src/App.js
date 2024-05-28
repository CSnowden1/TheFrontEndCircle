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
import BlogPage from './pages/blog';
import AboutUsPage from './pages/AboutUs';
import CareerResourcesPage from './pages/Resources';
import CareerAdvicePage from './pages/Advice';
import styled from 'styled-components';
import InterviewTips from './pages/careerGird/interviewTips';
import CodingPrep from './pages/careerGird/freelanceGuide';
import NetworkingTips from './pages/careerGird/codingPrep';
import FreelancingGuides from './pages/careerGird/networkingTips';
import ResumeSamples from './pages/careerGird/resumeSamples';
import PortfolioGuide from './pages/careerGird/portfolioGuide';
import LearnMorePage from './pages/LearnMore';



const Layout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;


const MainContent = styled.div`
  flex: 1;
`;



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
        <Layout>
        <Header />
        <Navigation />
        <MainContent>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/advice" element={<CareerAdvicePage />} />
          <Route path="/resources" element={<CareerResourcesPage />} />
          <Route path="/job-board" element={<ProtectedRoute><JobBoardPage /></ProtectedRoute>} />
          <Route path="/jobs/:jobId" element={<ProtectedRoute><JobPage /></ProtectedRoute>} />
          <Route path="/submit-job" element={<ProtectedRoute><JobSubmissionPage user={user} /></ProtectedRoute>} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard user={user} /></ProtectedRoute>} />
          <Route path="/dashboard/adminregister" element={<ProtectedRoute><AdminRequestPage /></ProtectedRoute>} />
          <Route path='/login' element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/admin" element={<ProtectedRoute><AdminLogin /></ProtectedRoute >}/>
          <Route path="/owner" element={<ProtectedRoute><OwnerLogin /></ProtectedRoute >}/>
          <Route path="/interview-tips" element={<InterviewTips/>} />
          <Route path="/coding-prep" element={<CodingPrep />} />
          <Route path="/networking-tips" element={ <NetworkingTips/>} />
          <Route path="/freelancing-guides" element={<FreelancingGuides />} />
          <Route path="/resume-samples" element={<ResumeSamples />} />
          <Route path="/portfolio-guide" element={ < PortfolioGuide /> } />
          <Route path="/learn-more" element={< LearnMorePage />} />

        </Routes>
        </MainContent>
        <Footer />
        </Layout>
      </Router>
    </UserProvider>
  );
}

export default App;
