import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { MdClose } from 'react-icons/md';

const FieldBossRewardModal = ({ isOpen, onClose, events }) => {
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(events[0]);

  useEffect(() => {
    if (isOpen) setIsAnimatingOut(false);
  }, [isOpen]);

  if (!isOpen && !isAnimatingOut) return null;

  const handleSelectBoss = (event) => {
    setSelectedEvent(events[event.target.value]);
  };

  return (
    <>
      <ModalBackdrop onClick={() => setIsAnimatingOut(true)} />
      <ModalContainer $isAnimatingOut={isAnimatingOut} onAnimationEnd={() => isAnimatingOut && onClose()}>
        <ModalHeader>
          <ModalTitle>보상 아이템</ModalTitle>
          <Select onChange={handleSelectBoss}>
            {events.map((event, index) => (
              <option key={index} value={index}>{event.ContentsName}</option>
            ))}
          </Select>
          <CloseButton onClick={onClose}><MdClose /></CloseButton>
        </ModalHeader>
        <ModalBody>
          {selectedEvent.RewardItems.map((item, index) => (
            <Item key={index}>
              <img src={item.Icon} alt={item.Name} />
              <span>{item.Name}</span>
            </Item>
          ))}
        </ModalBody>
      </ModalContainer>
    </>
  );
};

export default FieldBossRewardModal;



const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 1;
  animation-name: ${fadeIn};
  animation-duration: 0.3s;
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 1050;
  width: 50vw;
  max-width: 500px;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 1rem;
  border-radius: 0.3rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  animation-name: ${fadeIn};
  animation-duration: 0.3s;
  animation-fill-mode: forwards;
  animation-name: ${({ $isAnimatingOut }) => $isAnimatingOut ? fadeOut : fadeIn};
`;

const CloseButton = styled.button`
  margin-left: auto;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #e5e5e5;
  color: ${(props) => props.theme.colors.dark};
`;

const ModalTitle = styled.h4`
  margin: 0;
  padding-right: 5%;
`;

const ModalBody = styled.div`
  padding-top: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0;
  color: ${(props) => props.theme.colors.dark};
  width: 45%;
  
  img {
    width: 30px;
  }
`;

const Select = styled.select`
    width: 8rem;
    height: 2.5rem;
    border: 1px solid black;
`;