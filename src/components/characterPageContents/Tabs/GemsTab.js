import React from 'react';
import styled from 'styled-components';

function GemsTab({ gems }) {
  const { Gems, Effects } = gems || {};
  console.log('GemsTab - 보석 데이터:', gems);
  
  if (!gems || gems.length === 0) {
    return <div>보석에 대한 정보가 없습니다.</div>;
  }

  return (
    <StyledGemsTab>
      {Gems.map((gem, index) => {
        const effect = Effects && Effects[index] ? Effects[index] : null;
        
        console.log(Effects);
        console.log(Gems)
        return (
          <GemItem key={index}>
            <GemIcon src={gem.Icon} alt={`레벨 ${gem.Level} 보석`} name={gem.Name}/>
            <GemName dangerouslySetInnerHTML={{ __html: gem.Name }} />
            <GemDetail>레벨: {gem.Level}</GemDetail>
            <GemDetail>{effect ? effect.Description : '설명 없음'}</GemDetail>
            {effect && effect.Icon && (
              <SkillIcon src={effect.Icon} alt={`${effect.Name} 스킬 아이콘`} />
            )}
            {effect && effect.Name && (
              <GemEffect>{effect.Name}</GemEffect>
            )}
          </GemItem>
        );
      })}
    </StyledGemsTab>
  );
}

export default GemsTab;

const StyledGemsTab = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  gap: 10px;
`;

const GemItem = styled.div`
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 10px;
  width: calc(25% - 20px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: ${props => props.theme.colors.text};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: ${props => props.theme.colors.container};
`;

const GemIcon = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-bottom: 10px;
  border: 2px solid ${props => props.name.includes('멸화') ? props.theme.colors.redHighlight 
                                                     : props.name.includes('홍염') ? props.theme.colors.lighterHighlight 
                                                     : props.theme.colors.highlight};
`;

const GemName = styled.div`
  font-size: 16px;
  color: ${props => props.theme.colors.text};
  font-weight: bold;
`;

const GemDetail = styled.div`
  font-size: 14px;
  color: ${props => props.theme.colors.text};
  margin: 5px 0;
`;

const GemEffect = styled.div`
  font-size: 14px;
  color: ${props => props.theme.colors.text};
  margin-top: 10px;
`;

const SkillIcon = styled.img`
  width: 40px;
  height: 40px;
  margin-top: 10px;
`;