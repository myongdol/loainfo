import React, { useState } from 'react';
import GuildRankings from '../components/Guild/GuildRankings';
import styled from 'styled-components';



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
      <form onSubmit={handleSearchSubmit}>
        <input type="text" value={searchTerm} onChange={handleSearchChange} placeholder="길드 검색" />
        <button type="submit">Search</button>
      </form>
      <GuildRankings />
    </GuildPageContainer>
  );
};

export default GuildPage;



const GuildPageContainer = styled.div`
  background-color: ${(props) => props.theme.colors.dark};
  color: white;
`;