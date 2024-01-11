import React from 'react';
import styled from 'styled-components';
import theme from '../../../styles/theme';

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
          <GemItem key={index} >
            <GemIcon src={gem.Icon} alt={`레벨 ${gem.Level} 보석`} />
            <GemName dangerouslySetInnerHTML={{ __html: gem.Name }} />
            <GemDetail>레벨: {gem.Level}</GemDetail>
            <GemDetail>{effect ? effect.Description : '설명 없음'}</GemDetail>
            {effect && effect.Icon && (
              <SkillIcon src={effect.Icon} alt={`${effect.Name} 스킬 아이콘`} />
            )}
            {effect && effect.Name && (
              <GemEffect>효과 이름: {effect.Name}</GemEffect>
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
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const GemItem = styled.div`
  background: #f0f0f0;
  border-radius: 8px;
  padding: 10px;
  margin: 10px 0;
  width: 90%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const GemIcon = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

const GemName = styled.div`
  font-size: 16px;
  color: #333;
  font-weight: bold;
`;

const GemDetail = styled.div`
  font-size: 14px;
  color: ${theme.colors.dark};
  margin: 5px 0;
`;

const GemEffect = styled.div`
  margin-top: 10px;
  font-size: 14px;
  color: #000000;
`;

const SkillIcon = styled.img`
  width: 40px;
  height: 40px;
  margin-top: 10px;
`;