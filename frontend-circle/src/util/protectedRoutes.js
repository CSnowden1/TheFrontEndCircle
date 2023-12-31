// ProtectedRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useUser } from '../context/userContext';

function ProtectedRoute({ element }) {
  const { user } = useUser();

  if (!user) {
    console.log('User not authenticated. Redirecting to home.');
    return <Navigate to="/login" />;
  }

  return <Route element={element} />;
}

export default ProtectedRoute;
