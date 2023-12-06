import React from 'react';
import styled from 'styled-components';



const CharacterStats = ({ stats }) => {
  return (
    <StatsContainer>
      <h3>특성</h3>
      {stats.map((stat) => (
        <div key={stat.Type}>
          <StatTypeButton>{stat.Type}</StatTypeButton> {stat.Value}
        </div>
      ))}
    </StatsContainer>
  );
};

export default CharacterStats;



const StatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 20px;
  min-width: 150px;
  max-width: 200px;
`;

const StatTypeButton = styled.button`
  background-color: ${(props) => props.theme.colors.container};
  color: white;
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  margin: 2px 0;
  transition: background-color 0.3s;
`;