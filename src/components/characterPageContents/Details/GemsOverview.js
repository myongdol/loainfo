import React, { useState } from 'react';
import styled from 'styled-components';

function GemsOverview({ gems }) {
  const { Gems, Effects } = gems || {};
  const [hoveredIndex, setHoveredIndex] = useState(null);
  if (!Gems || Gems.length === 0) {
    return <div>보석에 대한 정보가 없습니다.</div>;
  }

  return (
    <Container>
      {Gems.map((gem, index) => {
        const effectName = Effects && Effects[index] ? Effects[index].Name : null;

        return (
          <GemItem 
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          > 
            <GemIcon src={gem.Icon} alt={`레벨 ${gem.Level} 보석`} />
            <GemLevel>{gem.Level}레벨</GemLevel>
            {hoveredIndex === index && effectName && (
              <GemEffect>효과: {effectName}</GemEffect>
            )}
          </GemItem>
          )
        })}
      </Container>
  );
}

export default GemsOverview;



const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  background-color: ${props => props.theme.colors.background};
`;

const GemItem = styled.div`
  background: ${props => props.theme.colors.container};
  border-radius: 8px;
  padding: 10px;
  margin: 10px 0;
  width: 90%;
  box-shadow: 0 2px 4px ${props => props.theme.colors.dark};
  text-align: center;
  color: ${props => props.theme.colors.text};
`;

const GemIcon = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-bottom: 10px;
  border: 2px solid ${props => props.theme.colors.highlight};
`;

const GemLevel = styled.div`
  font-size: 14px;
  color: ${props => props.theme.colors.softBlueGrey};
`;


const GemEffect = styled.div`
  margin-top: 10px;
  font-size: 14px;
  color: #000;
  background-color: ${props => props.theme.colors.softBlueGrey};
  padding: 5px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;