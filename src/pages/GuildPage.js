import React, { useState } from 'react';
import GuildRankings from '../components/Guild/GuildRankings';

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
    <div>
      <form onSubmit={handleSearchSubmit}>
        <input type="text" value={searchTerm} onChange={handleSearchChange} placeholder="길드 검색" />
        <button type="submit">Search</button>
      </form>
      <GuildRankings />
    </div>
  );
};

export default GuildPage;