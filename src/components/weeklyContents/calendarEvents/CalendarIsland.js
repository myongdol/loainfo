import React, { useState } from "react";
import styled from "styled-components";
import { StyledButton } from "../../UI/StyeldButton";
import FieldBossRewardModal from "../../UI/Modals/FieldBossRewardModal";
import useAdventureTimer from "../../../util/useAdventureTimer";


const CalendarIsland = ({ events }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const remainingTimes = useAdventureTimer(events);

  const handleOpenModal = () => {
    setModalOpen(true);
  };
  

  return (
    <>
     <h2>캘린더 섬</h2>
      <Section>
      {events.map((event, index) => {
        const remainingTime = remainingTimes.find(time => time.eventId === event.ContentsName)?.time || '정보 없음';
        return (
        <IslandContainer key={index}>
          <ContentsIcon src={event.ContentsIcon} />
          <p>{event.ContentsName}</p>
          <RemainingTime>{remainingTime}</RemainingTime>
        </IslandContainer>
        );
      })}
      <StyeldBtn onClick={handleOpenModal}>섬별 보상 보기</StyeldBtn>

      {modalOpen && (
        <FieldBossRewardModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          events={events}
        />
      )}
      </Section>
    </>
  );
};

export default CalendarIsland;



const Section = styled.section`
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: ${(props) => props.theme.colors.text};
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
`;

const IslandContainer = styled.div`
  width: calc(25% - 20px); 
  margin: 10px;
  text-align: center;

  @media (max-width: 768px) {
    width: calc(50% - 20px); 
  }

  @media (max-width: 480px) {
    width: 100%; 
  }
`;

const ContentsIcon = styled.img`
  width: 120px;
  height: 120px;
`;

const StyeldBtn = styled(StyledButton)`
  width: 100%;
  margin-top: 15px;
  text-align: center;
  justify-content: center;
  display: flex;
`;

const RemainingTime = styled.span`
  display: block;
  color: ${(props) => props.theme.colors.orange}
`;