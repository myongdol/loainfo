import React, { useState } from "react";
import styled from "styled-components";
import { StyledButton } from "../../UI/StyeldButton";
import FieldBossRewardModal from "../../UI/Modals/FieldBossRewardModal";
import useAdventureTimer from "../../../util/useAdventureTimer";



const AdventureIsland = ({ events }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const remainingTimes = useAdventureTimer(events);

  const todayEvents = events.filter(event =>
    event.StartTimes.some(startTime => new Date(startTime).toDateString() === new Date().toDateString())
  );

  const handleOpenModal = () => {
    setModalOpen(true);
  };
  
  return (
    <Section>
    <h2>모험 섬</h2>
      <EventContainer>
        {todayEvents.length > 0 ? (
          todayEvents.slice(0, 3).map((event, index) => {
            const remainingTime = remainingTimes.find(time => time.eventId === event.id)?.time || '정보 없음';
            return (
              <EventItemContainer key={index}>
                <Title>{event.ContentsName}</Title>
                <ContentsIcon src={event.ContentsIcon}/>
                <EventInfo>
                  <RemainingTime>{remainingTime}</RemainingTime>
                </EventInfo>
              </EventItemContainer>
            );
            })
        ) : (
          <p>오늘은 모험섬이 등장하지 않습니다.</p>
        )}
      </EventContainer>
      <StyeldBtn onClick={handleOpenModal}>모험섬 별 보상 보기</StyeldBtn>

      {modalOpen && (
        <FieldBossRewardModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          events={todayEvents}
        />
      )}
    </Section>
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
  min-height: 150px;

  @media (max-width: 1024px) {
    width: calc(33% - 20px);
  }

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

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }

  @media (max-width: 480px) {
    width: 60px;
    height: 60px;
  }
`;

const StyeldBtn = styled(StyledButton)`
  width: 100%;
  margin-top: 15px;
  text-align: center;
  justify-content: center;
  display: flex;

  @media (max-width: 480px) {
    font-size: 1.2em;
  }
`;

const Title = styled.h3`
  font-size: 1em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 30px;

  @media (max-width: 768px) {
    font-size: 0.9em;
  }

  @media (max-width: 480px) {
    font-size: 0.8em;
  }
`;

const EventInfo = styled.p`
  margin: 5px 0; 
`;

const RemainingTime = styled.span`
  display: block;
  color: ${(props) => props.theme.colors.orange}
`;