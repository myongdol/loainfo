import React, { useState } from "react";
import styled from "styled-components";
import useRemainingTimer from "../../../util/useRemainingTimer";
import { StyledButton } from "../../UI/StyeldButton";
import FieldBossRewardModal from "../../UI/Modals/FieldBossRewardModal";
import LocationModal from "../../UI/Modals/LocationModal";


const FieldBoss = ({ events }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const remainingTimes = useRemainingTimer(events);
  const [locationModalOpen, setLocationModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleLocationModalOpen = () => {
    setLocationModalOpen(true);
  };
  
  const nextStartTime = remainingTimes.length > 0 ? remainingTimes[0].time : '정보 없음';


  return (
    <Section>
      <Title>필드보스</Title>
      <EventItemContainer>
        <ContentsIcon src={events[0].ContentsIcon} />
        <EventDetails>
          <EventInfo> 시작 시간
            <StartTime>{nextStartTime}</StartTime>
          </EventInfo>
          <StyeldBtn onClick={handleLocationModalOpen}>등장지역 보기</StyeldBtn>
          <StyeldBtn onClick={handleOpenModal}>보스별 보상 보기</StyeldBtn>
        </EventDetails>
      </EventItemContainer>

      {modalOpen && (
        <FieldBossRewardModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          events={events}
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

export default FieldBoss;



const Section = styled.section`
  padding: 10px;
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