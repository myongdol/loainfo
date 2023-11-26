import React, { useState } from "react";
import styled from "styled-components";
import EventRewardModal from "../../UI/Modals/EventRewardModal";
import { StyledButton } from "../../UI/StyeldButton";
import useRemainingTimer from "../../../util/useRemainingTimer";
import LocationModal from "../../UI/Modals/LocationModal";


const ChaosGate = ({ events }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const remainingTimes = useRemainingTimer(events);
  const [locationModalOpen, setLocationModalOpen] = useState(false);

  const handleOpenModal = () => {
    setSelectedEvent(events[0]);
    setModalOpen(true);
  };

  const handleLocationModalOpen = () => {
    setLocationModalOpen(true);
  };


  const nextStartTime = remainingTimes.length > 0 ? remainingTimes[0].time : '정보 없음';

  return (
    <Section>
        <Title>카오스 게이트</Title>
      <EventItemContainer>
        <ContentsIcon src={events[0].ContentsIcon} />
        <EventDetails>
          <EventInfo>시작 시간
            <StartTime>{nextStartTime}</StartTime>
          </EventInfo>
          <StyeldBtn onClick={handleLocationModalOpen}>등장지역 보기</StyeldBtn>
          <StyeldBtn onClick={handleOpenModal}>보상 보기</StyeldBtn>
        </EventDetails>
      </EventItemContainer>
      
      {modalOpen && selectedEvent && (
        <EventRewardModal 
          isOpen={modalOpen} 
          onClose={() => setModalOpen(false)} 
          rewardItems={selectedEvent.RewardItems || []} 
        />
      )}

      {locationModalOpen && (
        <LocationModal 
          isOpen={locationModalOpen} 
          onClose={() => setLocationModalOpen(false)} 
          locations={events.map(event => event.Location).join(', ')}
        />
      )}
    </Section>
  );
};

export default ChaosGate;



const Section = styled.section`
  padding: 15px;
`;

const Title = styled.h2`
  padding-bottom: 30px;
`;

const EventItemContainer = styled.div`
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ContentsIcon = styled.img`
  width: 120px;
  height: 120px;
`;

const EventDetails = styled.div`
  flex-grow: 1;
`;

const EventInfo = styled.p`
  margin: 5px 0; 
  white-space: pre-wrap;
`;

const StartTime = styled.span`
  display: block;
  color: ${(props) => props.theme.colors.orange}
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