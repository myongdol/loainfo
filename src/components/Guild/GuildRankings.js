import React, { useState } from 'react';
import useApi from '../../util/useApi';
import styled from 'styled-components';
import { StyledButton } from '../UI/StyeldButton';
import { useNavigate } from 'react-router-dom';


const serverOptions = ['루페온', '실리안', '아만', '카마인', '카제로스', '아브렐슈드', '카단', '니나브'];

const GuildRankings = () => {
  const [selectedServer, setSelectedServer] = useState('루페온');
  const { data, isLoading, error } = useApi(`/guilds/rankings?serverName=${selectedServer}`);
  const navigate = useNavigate();

  const handleServerChange = (newServer) => {
    setSelectedServer(newServer);
  };

  const handleClickMasterName = (MasterName) => {
    navigate(`/character/${MasterName}`);
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
            isActive={selectedServer === server}
          >
            {server}
          </StyledButtons>
        ))}
      </ServerButtonsContainer>

      <GuildList>
        <GuildListHeader>
          <GuildRank>순위</GuildRank>
          <GuildName>길드명</GuildName>
          <GuildMaster>길드장</GuildMaster>
        </GuildListHeader>
        {data?.map((guild, index) => (
          <GuildItem key={index}>
            <GuildRank>#{guild.Rank}</GuildRank>
            <GuildName>{guild.GuildName}</GuildName>
            <GuildMaster onClick={() => handleClickMasterName(guild.MasterName)}>{guild.MasterName}</GuildMaster>
          </GuildItem>
        ))}
      </GuildList>
    </GuildPageContainer>
  );
};

export default GuildRankings;



const GuildPageContainer = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  padding: 20px;
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
  background-color: ${({ isActive, theme }) => isActive ? theme.colors.highlight : "transparent"};
  border: 2px solid ${({ isActive, theme }) => isActive ? theme.colors.highlight : theme.colors.softBlueGrey};

  &:hover,
  &:focus {
    color: #fff;
    box-shadow: ${({ isActive, theme }) => isActive ? "none" : `0 0 40px 40px ${theme.colors.highlight} inset`};
  }
`;

const GuildList = styled.ul`
  list-style: none;
  padding: 0;
`;

const GuildListHeader = styled.li`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.highlight};
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  color: white;
  font-weight: bold;
`;

const GuildItem = styled.li`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.container};
  margin: 10px 0;
  padding: 10px;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.text};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const GuildRank = styled.span`
  width: 50px;
  font-weight: bold;
`;

const GuildName = styled.span`
  flex: 1;
  text-align: center;
`;

const GuildMaster = styled.span`
  width: 150px;
  text-align: right;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;