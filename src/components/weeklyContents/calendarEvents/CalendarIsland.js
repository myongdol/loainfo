import React, { useState } from "react";
import styled from "styled-components";
import useRemainingTimer from "../../../util/useRemainingTimer";
import { StyledButton } from "../../UI/StyeldButton";
import FieldBossRewardModal from "../../UI/FieldBossRewardModal";



const CalendarIsland = ({ events }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const remainingTime = useRemainingTimer(events);

  const handleOpenModal = () => {
    setModalOpen(true);
  };
  

  return (
    <>
     <h2>캘린더 섬</h2>
      <Section>
      {events.map((event, index) => (
        <IslandContainer key={index}>
          <ContentsIcon src={event.ContentsIcon} />
          <p>{event.ContentsName}</p>
          <p>등장 지역: {event.Location}</p>
          <p>시작 시간: {remainingTime}</p>
        </IslandContainer>
      ))}
      <StyeldBtn onClick={handleOpenModal}>섬 보상 보기</StyeldBtn>

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
  background-color: ${(props) => props.theme.colors.dark};
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