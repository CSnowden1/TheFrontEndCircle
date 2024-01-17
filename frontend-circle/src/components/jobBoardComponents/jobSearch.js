import React, { useState } from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
  max-width: 800px;
  height: 4rem;
  margin: 20px auto;
  border: 1px solid #ddd;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #FFFEFE;
  position: sticky;
  top: 5px;
  padding: 10px;
`;

const SearchInput = styled.input`
  flex: 1;
  height: 100%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid transparent;
  border-radius: 5px;
  color: #333;

  input {
    background-color: #F0F0F0;
    margin: 0;
    padding: 0;
  }


  
`;

const SearchButton = styled.button`
  padding: 12px;
  background-color: #A56B91;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;



  &:hover {
    text-decoration: underline;
  }
`;

const JobSearch = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // You can perform the search logic here and call onSearch with the search term
    onSearch(searchTerm);
  };

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder="Search for jobs..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <SearchButton onClick={handleSearch}>Search</SearchButton>
    </SearchContainer>
  );
};

export default JobSearch;
