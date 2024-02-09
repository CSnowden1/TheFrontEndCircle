import styled from 'styled-components';
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useNormalUser } from '../../context/userContext';



const SearchContainer = styled.div`
  background-color: #A56B91; 
  padding: 20px;
  margin: 0;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30rem;
`;

const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
  width: 100%;
  box-sizing: content-box;
  padding: 0px;
  position: relative;
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
`;

const SearchInput = styled.input`
  padding: 24px;
  width: 300px;
  border: none;
  border-radius: 5px;
  width: 100%;
`;

const SearchButton = styled.button`
  padding: 10px 20px;
  background-color: white;
  color: #A56B91;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: #e04e00; // Darker orange on hover
  }
`;

const JobSearchSection = () => {
  
    const [searchTerm, setSearchTerm] = useState(''); // State for the search term
    const auth = useContext(useNormalUser); // Use your AuthContext here
    const navigate = useNavigate();
  
    const handleSearch = (e) => {
      e.preventDefault();
  
      if (!auth.isLoggedIn) {
        navigate('/login'); // Redirect to login if not logged in
      } else {
        // Implement the search functionality here
        console.log('Search Term:', searchTerm);
      }
    };


  return (
    <SearchContainer>
      <SearchForm onSubmit={handleSearch}>
        <SearchInput
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for jobs..."
        />
        <SearchButton type="submit">Find Jobs</SearchButton>
      </SearchForm>
    </SearchContainer>
  );
};

export default JobSearchSection;
