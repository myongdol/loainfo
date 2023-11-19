import React, { useEffect, useState } from "react";
import styled from "styled-components";
import EventRewardModal from "../../UI/EventRewardModal";
import { StyledButton } from "../../UI/StyeldButton";



const ChaosGate = ({ events }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [remainingTime, setRemainingTime] = useState("");

  const handleOpenModal = () => {
    setSelectedEvent(events[0]);
    setModalOpen(true);
  };

  useEffect(() => {
    const calculateRemainingTime = () => {
      const now = new Date();
      const futureTimes = events.flatMap(event => event.StartTimes)
                                .map(time => new Date(time + 'Z'))
                                .filter(time => time > now);
    
      if (futureTimes.length === 0) {
        return '출현하지 않는 날입니다.';
      }
    
      const nextTime = futureTimes.sort()[0];
      let delta = Math.abs(nextTime - now) / 1000;
      const hours = Math.floor(delta / 3600) % 24;
      delta -= hours * 3600;
      const minutes = Math.floor(delta / 60) % 60;
      delta -= minutes * 60;
      const seconds = Math.floor(delta % 60);
    
      return `${hours}시간 ${minutes}분 ${seconds}초 남음`;
    };
    
    setRemainingTime(calculateRemainingTime());
    const timer = setInterval(() => {
      setRemainingTime(calculateRemainingTime());
    }, 1000);
  
    return () => clearInterval(timer);
  }, [events]);

 
  return (
    <Section>
      <h2>카오스 게이트</h2>
      <ContentsIcon src={events[0].ContentsIcon} />
      <div>
        <p>등장 지역: {events.map(event => event.Location).join(', ')}</p>
        <p>시작 시간: {remainingTime}</p>
        <StyledButton onClick={handleOpenModal}>보상 보기</StyledButton>
      </div>

      {modalOpen && selectedEvent && (
        <EventRewardModal 
          isOpen={modalOpen} 
          onClose={() => setModalOpen(false)} 
          rewardItems={selectedEvent.RewardItems || []} 
        />
      )}
    </Section>
  );
};

export default ChaosGate;



const Section = styled.section`
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.dark};
  margin: auto;
`;

const ContentsIcon = styled.img`
  width: 120px;
  height: 120px;
`;