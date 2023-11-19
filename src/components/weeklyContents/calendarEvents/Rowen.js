import React, { useState } from "react";
import styled from "styled-components";
import EventRewardModal from "../../UI/EventRewardModal";
import { StyledButton } from "../../UI/StyeldButton";



const Rowen = ({ events }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = (event) => {
    setModalOpen(true);
  };


  return (
    <Section>
      <h2>로웬 이벤트</h2>
      
      {events.map((event, index) => (
        <div key={index}>
          <h3>{event.ContentsName}</h3>
          <p>위치: {event.Location}</p>
          <ContentsIcon src={event.ContentsIcon}/>
          <p>시작 시간:</p>
          <ul>
            {event.StartTimes.map((startTime, timeIndex) => (
              <li key={timeIndex}>{startTime}</li>
            ))}
          </ul>
          <p>최소 아이템 레벨: {event.MinItemLevel}</p>
        </div>
      ))}

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
  flex-direction: row;
`;

const ContentsIcon = styled.img`
 width: 120px;
 height: 120px;
`