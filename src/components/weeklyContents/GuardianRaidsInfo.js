import React, { useState } from "react";
import styled from "styled-components";
import useApi from "../../util/useApi";
import GuardianRewardModal from "./GuardianRewardModal";
import { StyledButton } from "../UI/StyeldButton";


const GuardianRaidsInfo = () => {
    const { data: guardianRaidsData, isLoading, error} = useApi('/gamecontents/challenge-guardian-raids');
    const raids = guardianRaidsData?.Raids || [];
    const [modalOpen, setModalOpen] = useState(false);

    if (isLoading) return <div>로딩 중...</div>;
    if (error) return <div>에러 발생: {error.message}</div>;


    console.log('가디언 정보:', guardianRaidsData);

    return (
        <Section>
          <h2>도전 가디언 레이드</h2>
          <List>
            {raids.map((raid, index) => (
              <ListItem key={index}>
                <h3>{raid.Name}</h3>
                <GuardianImg src={raid.Image} />
              </ListItem>
            ))}
          </List>
        
      <StyledButton onClick={() => setModalOpen(true)}>
        레벨별 보상 아이템 보기
      </StyledButton>

      {modalOpen && (
        <GuardianRewardModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          guardianRaidsData={guardianRaidsData}
        />
      )}
        </Section>
    )
};
export default GuardianRaidsInfo;

const Section = styled.section`
  padding: 10px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
`;

const ListItem = styled.li`
  padding: 10px 0;
  color: ${(props) => props.theme.colors.text};
  flex: 1;
  overflow: hidden;

  &:last-child {
    border-bottom: none;
  }
`;

const GuardianImg = styled.img`
  max-width: 100%;
  height: auto;
  object-fit: cover;
`;
