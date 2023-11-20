import React, { useState } from "react";
import styled from "styled-components";
import useRemainingTimer from "../../../util/useRemainingTimer";
import { StyledButton } from "../../UI/StyeldButton";
import FieldBossRewardModal from "../../UI/FieldBossRewardModal";



const FieldBoss = ({ events }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const remainingTime = useRemainingTimer(events);

  const handleOpenModal = () => {
    setModalOpen(true);
  };
  

  return (
    <Section>
      <h2>필드보스</h2>
      <ContentsIcon src={events[0].ContentsIcon} />
      <div>
        <p>등장 지역: {events.map(event => event.Location).join(', ')}</p>
        <p>시작 시간: {remainingTime}</p>
        <StyledButton onClick={handleOpenModal}>보스별 보상 보기</StyledButton>
      </div>

      {modalOpen && (
        <FieldBossRewardModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          events={events}
        />
      )}
    </Section>
  );
};

export default FieldBoss;



const Section = styled.section`
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.dark};
  margin: auto;
`;

const ContentsIcon = styled.img`
  width: 120px;
  height: 120px;
`;