import React, { useState } from "react";
import styled from "styled-components";
import EventRewardModal from "../../UI/EventRewardModal";
import { StyledButton } from "../../UI/StyeldButton";



const Rowen = ({ events }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = (event) => {
    setModalOpen(true);
  };

  const formatDateTime = (dateTimeStr) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateTimeStr).toLocaleString('ko-KR', options);
  };


  return (
    <Section>
      <h2>로웬 이벤트</h2>
      <EventContainer>
      {events.map((event, index) => (
        <EventItem key={index}>
          <h3>{event.ContentsName}</h3>
          <p>위치: {event.Location}</p>
          <ContentsIcon src={event.ContentsIcon}/>
          <ul>
          <p>로웬 일정</p>
            {event.StartTimes.map((startTime, timeIndex) => (
              <li key={timeIndex}>{formatDateTime(startTime)}</li>
            ))}
          </ul>
          <p>최소 아이템 레벨: {event.MinItemLevel}</p>
        </EventItem>
      ))}
    </EventContainer>
      <StyledButton onClick={handleOpenModal}>보상 보기</StyledButton>

      {modalOpen && (
        <EventRewardModal 
          isOpen={modalOpen} 
          onClose={() => setModalOpen(false)} 
          rewardItems={events[0].RewardItems || []} 
        />
      )}
    </Section>
  );
};

export default Rowen;



const Section = styled.section`
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.dark};
  margin: auto;
  display: flex;
  flex-direction: column;
`;

const ContentsIcon = styled.img`
 width: 120px;
 height: 120px;
`

const EventContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
`

const EventItem = styled.div`
  flex-basis: calc(25% - 20px);
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    flex-basis: calc(50% - 20px);
  }

  @media (max-width: 480px) {
    flex-basis: 100%;
  }
`;