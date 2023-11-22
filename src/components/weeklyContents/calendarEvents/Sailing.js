import React, { useState } from "react";
import styled from "styled-components";
import FieldBossRewardModal from "../../UI/FieldBossRewardModal";
import { StyledButton } from "../../UI/StyeldButton";
import useRemainingTimer from "../../../util/useRemainingTimer";



const Sailing = ({ events }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const remainingTimes = useRemainingTimer(events);

  const handleOpenModal = () => {
    setModalOpen(true);
  };
  

  return (
    <Section>
      <h2>항해</h2>
      <ContentsIcon src={events[0].ContentsIcon} />
      <div>
        <p>등장 지역: {events.map(event => event.Location).join(', ')}</p>
        {events.map((event, index) => {
          const remainingTime = remainingTimes.find(time => time.eventId === event.id)?.time || '정보 없음';
          return <p key={index}>시작 시간 ({event.ContentsName}): {remainingTime}</p>;
        })}
        <StyledButton onClick={handleOpenModal}>항해별 보상 보기</StyledButton>
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

export default Sailing;



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