import React from 'react';
import styled from 'styled-components';



const CharacterTendencies = ({ tendencies }) => {
  return (
    <TendenciesContainer>
      <h3>성향</h3>
      {tendencies.map((tendency) => (
        <TendencyBarContainer key={tendency.Type}>
          <TendencyLabel>
            <strong>{tendency.Type}</strong>
            <span>{tendency.Point} / {tendency.MaxPoint}</span>
          </TendencyLabel>

          <TendencyBarInner>
            <TendencyBar width={(tendency.Point / tendency.MaxPoint) * 100} />
            <TendencyBarRemainder width={(tendency.Point / tendency.MaxPoint) * 100} />
          </TendencyBarInner>
        </TendencyBarContainer>
      ))}
    </TendenciesContainer>
  );
};

export default CharacterTendencies;



const TendenciesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  min-width: 200px;
`;
    
const TendencyBarContainer = styled.div`
  background-color: rgb(21, 24, 29);
  border-radius: 5px;
  overflow: hidden;
  margin: 5px 0;
  width: 100%;
`;
    
const TendencyBar = styled.div`
  background-color: ${(props) => props.theme.colors.highlight};
  height: 10px;
  width: ${props => props.width}%;
  transition: width 0.5s ease-in-out; 
`;
    
const TendencyLabel = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 5px;
`;

const TendencyBarRemainder = styled.div`
  background-color: rgba(255, 255, 255, 0.3);
  height: 10px;
  width: ${props => 100 - props.width}%;
`;

const TendencyBarInner = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;