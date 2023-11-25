import React, { useState } from "react";
import styled from "styled-components";
import EventRewardModal from "../../UI/EventRewardModal";
import { StyledButton } from "../../UI/StyeldButton";
import useRemainingTimer from "../../../util/useRemainingTimer";



const ChaosGate = ({ events }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const remainingTimes = useRemainingTimer(events);

  const handleOpenModal = () => {
    setSelectedEvent(events[0]);
    setModalOpen(true);
  };

  const nextStartTime = remainingTimes.length > 0 ? remainingTimes[0].time : '정보 없음';

  return (
    <Section>
      <h2>카오스 게이트</h2>
      <ContentsIcon src={events[0].ContentsIcon} />
      <div>
        <p>등장 지역: {events.map(event => event.Location).join(', ')}</p>
        <p>시작 시간: {nextStartTime}</p>
        <StyledButton onClick={handleOpenModal}>보상 보기</StyledButton>
      </div>

      {modalOpen && selectedEvent && (
        <EventRewardModal 
          isOpen={modalOpen} 
          onClose={() => setModalOpen(false)} 
          rewardItems={selectedEvent.RewardItems || []} 
        />
      )}
    </Section>
  );
};

export default ChaosGate;



const Section = styled.section`
  padding: 10px;
`;

const ContentsIcon = styled.img`
  width: 120px;
  height: 120px;
`;