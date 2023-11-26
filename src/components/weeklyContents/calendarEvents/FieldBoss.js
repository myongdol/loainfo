import React, { useState } from "react";
import styled from "styled-components";
import useRemainingTimer from "../../../util/useRemainingTimer";
import { StyledButton } from "../../UI/StyeldButton";
import FieldBossRewardModal from "../../UI/Modals/FieldBossRewardModal";



const FieldBoss = ({ events }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const remainingTimes = useRemainingTimer(events);

  const handleOpenModal = () => {
    setModalOpen(true);
  };
  
  const nextStartTime = remainingTimes.length > 0 ? remainingTimes[0].time : '정보 없음';


  return (
    <Section>
      <h2>필드보스</h2>
      <ContentsIcon src={events[0].ContentsIcon} />
      <div>
        <p>등장 지역: {events.map(event => event.Location).join(', ')}</p>
        <p>시작 시간: {nextStartTime}</p>
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
`;

const ContentsIcon = styled.img`
  width: 120px;
  height: 120px;
`;