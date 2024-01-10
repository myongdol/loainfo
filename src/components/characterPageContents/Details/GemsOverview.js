import React, { useState } from 'react';
import styled from 'styled-components';

function GemsOverview({ gems }) {
  const { Gems, Effects } = gems || {};
  const [hoveredIndex, setHoveredIndex] = useState(null);
  if (!Gems || Gems.length === 0) {
    return <div>보석에 대한 정보가 없습니다.</div>;
  }

  const sortedGems = [...Gems].sort((a, b) => b.Level - a.Level);

  return (
    <Container>
      {sortedGems.map((gem, index) => {
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
              <GemEffect>{effectName}</GemEffect>
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
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 20px;
  gap: 10px;
  padding: 10px;
  background-color: ${props => props.theme.colors.background};
`;

const GemItem = styled.div`
  background: ${props => props.theme.colors.container};
  border-radius: 8px;
  padding: 5px;
  margin: 10px 0;
  width: 100px;
  cursor: pointer;
  box-shadow: 0 2px 4px ${props => props.theme.colors.dark};
  text-align: center;
  color: ${props => props.theme.colors.text};
  position: relative;
`;

const GemIcon = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-bottom: 10px;
  border: 2px solid ${props => props.theme.colors.highlight};
`;

const GemLevel = styled.div`
  font-size: 12px;
  color: ${props => props.theme.colors.softBlueGrey};
`;


const GemEffect = styled.div`
  margin-top: 10px;
  font-size: 14px;
  width: 100%;
  color: #000;
  background-color: ${props => props.theme.colors.softBlueGrey};
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  display: none;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -100%);
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    border-width: 10px;
    border-style: solid;
    border-color: #88c9da transparent transparent transparent;
  }

  ${GemItem}:hover & {
    display: block;
  }
`;