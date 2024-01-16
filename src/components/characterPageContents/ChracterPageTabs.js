import React, { useState } from 'react';
import EquipmentTab from './Tabs/EquipmentTab';
import OwnedCharactersTab from './Tabs/OwnedCharactersTab';
import styled from 'styled-components';
import { StyledButton } from '../UI/StyeldButton';
import GemsTab from './Tabs/GemsTab';
import AvatarTab from './Tabs/AvatarTab';

const CharacterTabs = ({ equipment, siblings, gems, avatars }) => {
  const [activeTab, setActiveTab] = useState('equipment');

  return (
    <StyledTabs>
      <ButtonsContainer>
        <StyledButtons onClick={() => setActiveTab('equipment')}>장비</StyledButtons>
        <StyledButtons onClick={() => setActiveTab('gems')}>보석</StyledButtons>
        <StyledButtons onClick={() => setActiveTab('avatar')}>아바타</StyledButtons>
        <StyledButtons onClick={() => setActiveTab('characters')}>보유 캐릭터</StyledButtons>
      </ButtonsContainer>
      {activeTab === 'equipment' && <EquipmentTab equipments={equipment} gems={gems} />}
      {activeTab === 'avatar' && <AvatarTab avatars={avatars} />} 
      {activeTab === 'characters' && <OwnedCharactersTab siblings={siblings} />}
      {activeTab === 'gems' && <GemsTab gems={gems} />}
    </StyledTabs>
  );
};

export default CharacterTabs;



const StyledTabs = styled.div`
  background-color: ${props => props.theme.colors.background};
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const StyledButtons = styled(StyledButton)`
  flex: 1;
`;