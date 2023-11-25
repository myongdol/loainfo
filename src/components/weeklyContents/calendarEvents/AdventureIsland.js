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

  const handleOpenModal = () => {
    setModalOpen(true);
  };
  
  return (
    <>
    <Section>
    <h2>모험 섬</h2>
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
      <StyeldBtn onClick={handleOpenModal}>보상 보기</StyeldBtn>

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
  padding: 15px;
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

const StyeldBtn = styled(StyledButton)`
  width: 100%;
  margin-top: 15px;
  text-align: center;
  justify-content: center;
  display: flex;
`;