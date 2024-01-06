import React, { useState } from 'react';
import GuildRankings from '../components/Guild/GuildRankings';
import styled from 'styled-components';
import { MdOutlineSearch } from 'react-icons/md';



const GuildPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log('Searching for:', searchTerm);
  };

  return (
    <GuildPageContainer>
      <SearchBarContainer  onSubmit={handleSearchSubmit}>
        <SearchInput type="text" value={searchTerm} onChange={handleSearchChange} placeholder="길드 검색" />
        <StyledSearchIcon size="20px" onClick={handleSearchSubmit} />
      </SearchBarContainer>
      <GuildRankings />
    </GuildPageContainer>
  );
};

export default GuildPage;



const GuildPageContainer = styled.div`
  background-color: ${(props) => props.theme.colors.dark};
  color: white;
`;

const SearchBarContainer = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  height: 2.5rem;
  padding: 0 0.75rem;
  border-radius: 0.375rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  background-color: #E5E7EB;
  border: 1px solid #E5E7EB;
  max-width: 60%;
  width: 450px;
  margin: 10px auto 0;
`;

const SearchInput = styled.input`
  flex: 1;
  border: none;
  padding: 0.5rem;
  padding-right: 2rem;
  font-size: 1rem;
  background-color: #E5E7EB;

  &:focus {
    outline: none;
  }
`;

const StyledSearchIcon = styled(MdOutlineSearch)`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #000000;
  cursor: pointer;
`;
