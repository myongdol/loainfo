import React, { useState } from "react";
import styled from "styled-components";
import FieldBossRewardModal from "../../UI/Modals/FieldBossRewardModal";
import { StyledButton } from "../../UI/StyeldButton";
import useAdventureTimer from "../../../util/useAdventureTimer";
import RemainingTimeModal from "../../UI/Modals/RemainingTimeModal";



const Sailing = ({ events }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const remainingTimes = useAdventureTimer(events);
  const [timeModalOpen, setTimeModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };
  
  const handleOpenTimeModal = () => {
    setTimeModalOpen(true);
  };

  return (
    <Section>
      <h2>항해 협동</h2>
      <EventItemContainer>
        <ContentsIcon src={events[0].ContentsIcon} />
        <div>
          <StyeldBtn onClick={handleOpenTimeModal}>등장지역, 남은 시간 보기</StyeldBtn>
          <StyeldBtn onClick={handleOpenModal}>항해별 보상 보기</StyeldBtn>
        </div>
      </EventItemContainer>

      {modalOpen && (
        <FieldBossRewardModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          events={events}
        />
      )}

        {timeModalOpen && (
          <RemainingTimeModal
            isOpen={timeModalOpen}
            onClose={() => setTimeModalOpen(false)}
            remainingTimes={remainingTimes}
          />
        )}
    </Section>
  );
};

export default Sailing;



const Section = styled.section`
  padding: 10px;
  border-radius: 10px;
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.dark};
  margin: auto;
`;

const ContentsIcon = styled.img`
  width: 120px;
  height: 120px;
`;

const EventItemContainer = styled.div`
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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