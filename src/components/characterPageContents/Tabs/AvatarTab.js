import React, { useState } from 'react';
import styled from 'styled-components';
import TooltipModal from '../../UI/Modals/TooltipModal';

function AvatarTab({ avatars }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAvatarTooltip, setSelectedAvatarTooltip] = useState(null);
    
  if (!avatars || avatars.length === 0) {
    return <div>아바타 정보가 없습니다.</div>;
  }

  const handleAvatarClick = (tooltip) => {
    setSelectedAvatarTooltip(tooltip);
    setIsModalOpen(true);
  };

  console.log(avatars);
  return (
    <StyledAvatarTab>
      {avatars.map((avatar, index) => (
        <AvatarItem key={index} onClick={() => handleAvatarClick(avatar.Tooltip)}>
          <AvatarIcon src={avatar.Icon} alt={`${avatar.Name} 아바타`} />
          <AvatarName>{avatar.Name}</AvatarName>
          <AvatarType>{avatar.Type}</AvatarType>
        </AvatarItem>
      ))}
      {isModalOpen && (
        <TooltipModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
          rawTooltipData={selectedAvatarTooltip} 
        />
      )}
    </StyledAvatarTab>
  );
}

export default AvatarTab;



const StyledAvatarTab = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const AvatarItem = styled.div`
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const AvatarIcon = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

const AvatarName = styled.div`
  font-size: 16px;
  color: ${props => props.theme.colors.text};
  margin-bottom: 5px;
`;

const AvatarType = styled.div`
  font-size: 14px;
  color: ${props => props.theme.colors.text};
`;

const AvatarDetail = styled.div`
  font-size: 12px;
  color: ${props => props.theme.colors.text};
  margin: 3px 0;
`;