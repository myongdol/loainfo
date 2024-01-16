import React from 'react';
import styled from 'styled-components';

function AvatarTab({ avatars }) {
  if (!avatars || avatars.length === 0) {
    return <div>아바타 정보가 없습니다.</div>;
  }

  return (
    <StyledAvatarTab>

    </StyledAvatarTab>
  );
}

export default AvatarTab;

const StyledAvatarTab = styled.div`
  gap: 10px;
`;
