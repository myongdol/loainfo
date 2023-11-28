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
      <ContentsIcon src={events[0].ContentsIcon} />
      <div>
        <StyledButton onClick={handleOpenTimeModal}>등장지역, 남은 시간 보기</StyledButton>
        <StyledButton onClick={handleOpenModal}>항해별 보상 보기</StyledButton>
      </div>

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
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.dark};
  margin: auto;
`;

const ContentsIcon = styled.img`
  width: 120px;
  height: 120px;
`;