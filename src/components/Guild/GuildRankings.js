import React, { useState } from 'react';
import useApi from '../../util/useApi';
import styled from 'styled-components';


const serverOptions = ['루페온', '실리안', '아만', '카마인', '카제로스', '아브렐슈드', '카단', '니나브'];

const GuildRankings = () => {
  const [selectedServer, setSelectedServer] = useState('루페온');
  const { data, isLoading, error } = useApi(`/guilds/rankings?serverName=${selectedServer}`);

  const handleServerChange = (e) => {
    setSelectedServer(e.target.value);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <GuildPageContainer>
        <select value={selectedServer} onChange={handleServerChange}>
            {serverOptions.map((server, index) => (
            <option key={index} value={server}>{server}</option>
            ))}
        </select>

      <ul>
        {data?.map((guild, index) => (
          <li key={index}>
            {guild.GuildName} - Rank: {guild.Rank}
          </li>
        ))}
      </ul>
    </GuildPageContainer>
  );
};

export default GuildRankings;



const GuildPageContainer = styled.div`
  background-color: ${(props) => props.theme.colors.background};
`;