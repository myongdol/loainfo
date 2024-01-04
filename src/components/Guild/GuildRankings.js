import React from 'react';
import useApi from '../../util/useApi';

const GuildRankings = () => {
  const { data, isLoading, error } = useApi('/guilds/rankings');

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Guild Rankings</h1>
    </div>
  );
};

export default GuildRankings;