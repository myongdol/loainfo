import React from 'react';
import styled from 'styled-components';



const CharacterStats = ({ stats }) => {
  return (
    <StatsContainer>
      {stats.map((stat) => (
        <StatItem key={stat.Type}>
          <StatType>{stat.Type}</StatType> 
          <StatValue>{stat.Value}</StatValue>
        </StatItem>
      ))}
    </StatsContainer>
  );
};

export default CharacterStats;



const StatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 20px;
  min-width: 150px;
  max-width: 200px;
`;

const StatType = styled.div`
  background-color: ${(props) => props.theme.colors.container};
  color: white;
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  margin: 2px 10px 2px 0;
  transition: background-color 0.3s;
`;

const StatItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

const StatValue = styled.span`
  flex-grow: 1;
  text-align: right;
`;