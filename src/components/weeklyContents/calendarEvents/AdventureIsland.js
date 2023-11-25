import React, { useState } from "react";
import styled from "styled-components";
import useRemainingTimer from "../../../util/useRemainingTimer";
import { StyledButton } from "../../UI/StyeldButton";
import FieldBossRewardModal from "../../UI/FieldBossRewardModal";



const AdventureIsland = ({ events }) => {

  const today = new Date().toISOString().split('T')[0];
  const [modalOpen, setModalOpen] = useState(false);
  const remainingTimes = useRemainingTimer(events);
  
  const todayEvents = events.filter(event =>
    event.StartTimes.some(startTime => startTime.includes(today))
  );
  // console.log(today)
  // console.log(todayEvents)

  const handleOpenModal = () => {
    setModalOpen(true);
  };
  
  return (
    <>
    <h2>모험 섬</h2>
    <Section>
      <EventContainer>
        {todayEvents.length > 0 ? (
          todayEvents.slice(0, 3).map((event, index) => {
            const remainingTime = remainingTimes.find(time => time.eventId === event.id)?.time || '정보 없음';
            return (
              <EventItemContainer key={index}>
                <h3>{event.ContentsName}</h3>
                <ContentsIcon src={event.ContentsIcon}/>
                <p>위치: {event.Location}</p>
                <p>시작 시간: {remainingTime}</p>
              </EventItemContainer>
            );
            })
        ) : (
          <p>오늘은 모험섬이 등장하지 않습니다.</p>
        )}
      </EventContainer>
      <StyledButton onClick={handleOpenModal}>보상 보기</StyledButton>

      {modalOpen && (
        <FieldBossRewardModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          events={todayEvents}
        />
      )}
    </Section>
    </>
  );
};

export default AdventureIsland;



const Section = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.dark};
  margin: auto;
  flex-direction: column;
`;

const EventContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
`

const EventItemContainer = styled.div`
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