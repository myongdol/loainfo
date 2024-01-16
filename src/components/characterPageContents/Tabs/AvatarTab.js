import React from 'react';
import styled from 'styled-components';

function AvatarTab({ avatars }) {
    
  if (!avatars || avatars.length === 0) {
    return <div>아바타 정보가 없습니다.</div>;
  }
  

  console.log(avatars);
  return (
    <StyledAvatarTab>
      {avatars.map((avatar, index) => (
        <AvatarItem key={index}>
          <AvatarIcon src={avatar.Icon} alt={`${avatar.Name} 아바타`} />
          <AvatarName>{avatar.Name}</AvatarName>
          <AvatarType>{avatar.Type}</AvatarType>
        </AvatarItem>
      ))}
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