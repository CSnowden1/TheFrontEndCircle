import React, { createContext, useContext, useState } from 'react';

// Normal User Context
const NormalUserContext = createContext();

// Admin Context
const AdminContext = createContext();

// Owner Context
const OwnerContext = createContext();

export const UserProvider = ({ children }) => {
  // Separate states for normal user, admin, and owner
  const [normalUser, setNormalUser] = useState(null);
  const [admin, setAdmin] = useState(null);
  const [owner, setOwner] = useState(null);

  // Login functions for each user role
  const loginNormalUser = (userData) => {
    setNormalUser(userData);
  };

  const loginAdmin = (adminData) => {
    setAdmin(adminData);
  };

  const loginOwner = (ownerData) => {
    setOwner(ownerData);
  };

  return (
    <NormalUserContext.Provider value={{ user: normalUser, login: loginNormalUser }}>
      <AdminContext.Provider value={{ user: admin, login: loginAdmin }}>
        <OwnerContext.Provider value={{ user: owner, login: loginOwner }}>
          {children}
        </OwnerContext.Provider>
      </AdminContext.Provider>
    </NormalUserContext.Provider>
  );
};

// Custom hooks for each user role
export const useNormalUser = () => {
  const context = useContext(NormalUserContext);
  if (!context) {
    throw new Error('useNormalUser must be used within a UserProvider');
  }
  return context;
};

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within a UserProvider');
  }
  return context;
};

export const useOwner = () => {
  const context = useContext(OwnerContext);
  if (!context) {
    throw new Error('useOwner must be used within a UserProvider');
  }
  return context;
};
