import React, { useState } from 'react';
import useApi from '../../util/useApi';
import styled from 'styled-components';
import { StyledButton } from '../UI/StyeldButton';


const serverOptions = ['루페온', '실리안', '아만', '카마인', '카제로스', '아브렐슈드', '카단', '니나브'];

const GuildRankings = () => {
  const [selectedServer, setSelectedServer] = useState('루페온');
  const { data, isLoading, error } = useApi(`/guilds/rankings?serverName=${selectedServer}`);

  const handleServerChange = (newServer) => {
    setSelectedServer(newServer);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <GuildPageContainer>
      <ServerButtonsContainer>
        {serverOptions.map((server, index) => (
          <StyledButtons
            key={index}
            onClick={() => handleServerChange(server)}
          >
            {server}
          </StyledButtons>
        ))}
      </ServerButtonsContainer>

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

const ServerButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  margin-bottom: 20px;
`;

const StyledButtons = styled(StyledButton)`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`;