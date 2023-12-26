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
  flex-wrap: wrap;
  align-items: flex-start;
  width: 100%;
  border-top: 2px solid ${props => props.theme.colors.container};
  border-bottom: 2px solid ${props => props.theme.colors.container};
`;

const StatType = styled.div`
  background-color: ${(props) => props.theme.colors.container};
  color: white;
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  margin: 2px 10px 2px 0;
  transition: background-color 0.3s;
  width: 90px;
`;

const StatItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;
  width: calc(50% - 10px);

  &:nth-child(2n) {
    margin-right: 0;
  }
`;

const StatValue = styled.span`
  text-align: right;
  white-space: nowrap;
  padding-right: 5px;
`;