import React from 'react';
import styled from 'styled-components';

const ProfileContainer = styled.div`
  height: 100%;
  width: 200px;
  border-left: 1px solid #ddd; /* Border separating profile from the rest of the page */
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Username = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

const UserInfo = ({ user }) => {
  return (
    <ProfileContainer>
      <Username>{user.user.username}</Username>
    </ProfileContainer>
  );
};

export default UserInfo;
