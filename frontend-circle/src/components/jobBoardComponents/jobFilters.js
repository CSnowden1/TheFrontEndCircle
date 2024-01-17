import React, { useState } from 'react';
import styled from 'styled-components';

const FilterContainer = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #FFFEFE;
  display: flex;
  color: black;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 5rem;
`;

const FilterLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  font-size: 1rem;
  color: black;

`;

const FilterCheckbox = styled.input`
  margin-right: 8px;
  color: black;
`;




const FilterButton = styled.button`
  
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


const JobFilter = ({ onFilter }) => {
  const [filters, setFilters] = useState({
    hybrid: false,
    remote: false,
    onSite: false,
    clearanceNeeded: false,
    skills: false,
  });

  const handleFilterChange = (filterName) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: !prevFilters[filterName],
    }));
  };

  const applyFilters = () => {
    // You can use the onFilter function to pass the filter criteria to your backend or filter jobs locally
    onFilter(filters);
  };

  return (
    <FilterContainer>
      <FilterLabel>
        <FilterCheckbox
          type="checkbox"
          checked={filters.hybrid}
          onChange={() => handleFilterChange('hybrid')}
        />
        Hybrid
      </FilterLabel>
      <FilterLabel>
        <FilterCheckbox
          type="checkbox"
          checked={filters.remote}
          onChange={() => handleFilterChange('remote')}
        />
        Remote
      </FilterLabel>
      <FilterLabel>
        <FilterCheckbox
          type="checkbox"
          checked={filters.onSite}
          onChange={() => handleFilterChange('onSite')}
        />
        On-site
      </FilterLabel>
      <FilterLabel>
        <FilterCheckbox
          type="checkbox"
          checked={filters.clearanceNeeded}
          onChange={() => handleFilterChange('clearanceNeeded')}
        />
        Clearance Needed
      </FilterLabel>
      <FilterLabel>
        <FilterCheckbox
          type="checkbox"
          checked={filters.skills}
          onChange={() => handleFilterChange('skills')}
        />
        Skills
      </FilterLabel>
      <FilterButton onClick={applyFilters}>Apply Filters</FilterButton>
    </FilterContainer>
  );
};

export default JobFilter;
