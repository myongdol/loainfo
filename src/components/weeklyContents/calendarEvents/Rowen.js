import React, { useEffect, useState } from "react";
import styled from "styled-components";
import EventRewardModal from "../../UI/Modals/EventRewardModal";
import { StyledButton } from "../../UI/StyeldButton";



const Rowen = ({ events }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [todayEvents, setTodayEvents] = useState([]);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const today = new Date().toLocaleDateString('en-CA')

  useEffect(() => {
    const filteredEvents = events.filter(event => 
      event.StartTimes.some(time => time.startsWith(today))
    );
    setTodayEvents(filteredEvents);
  }, [events, today]);

  const formatDateTime = (dateTimeStr) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateTimeStr).toLocaleString('ko-KR', options);
  };
  
  const extractName = (name) => {
    const match = name.match(/프라이겔리|리베르탄|툴루비크/);
    return match ? match[0] : name;
};

  return (
    <Section>
      <h2>로웬 이벤트</h2>
      <EventContainer>
      {events.map((event, index) => (
        <EventItem key={index}>
          <h4>{extractName(event.ContentsName)}</h4>
          <div>최소 아이템 레벨: {event.MinItemLevel}</div>
          <ContentsIcon src={event.ContentsIcon}/>
          <ul>
            {todayEvents.length > 0 && todayEvents.includes(event) ? 
              event.StartTimes.filter(time => time.startsWith(today)).map((startTime, timeIndex) => (
                <li key={timeIndex}>{formatDateTime(startTime)}</li>
              )) : 
              <NoEventMsg>오늘은 로웬 이벤트가 없습니다.</NoEventMsg>
            }
          </ul>
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
  margin: auto;
  display: flex;
  flex-direction: column;
`;

const ContentsIcon = styled.img`
 width: 100px;
 height: 100px;
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

const NoEventMsg = styled.li`
  color: #daa035;
`