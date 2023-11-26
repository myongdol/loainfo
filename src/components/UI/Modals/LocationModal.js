import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { MdClose } from 'react-icons/md';

const LocationModal = ({ isOpen, onClose, locations }) => {
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  const startClosingAnimation = () => {
    setIsAnimatingOut(true);
  };

  const onAnimationEnd = () => {
    if (isAnimatingOut) onClose();
  };

  useEffect(() => {
    if (isOpen) setIsAnimatingOut(false);
    console.log('Locations:', locations);
  }, [isOpen, locations]);

  if (!isOpen && !isAnimatingOut) return null;

  return (
    <>
      <ModalBackdrop onClick={startClosingAnimation} />
      <ModalContainer $isAnimatingOut={isAnimatingOut} onAnimationEnd={onAnimationEnd}>
        <ModalHeader>
          <ModalTitle>등장 지역</ModalTitle>
          <CloseButton onClick={onClose}><MdClose /></CloseButton>
        </ModalHeader>
        <ModalBody>
            {locations.split(', ').map((location, index) => (
                <LocationItem key={index}>{location}</LocationItem> 
            ))}
        </ModalBody>
      </ModalContainer>
    </>
  );
};

export default LocationModal;




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
`;

const ModalBody = styled.div`
  padding-top: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  color: black;
`;

const LocationItem = styled.p`
  margin: 5px; 
  padding: 5px;
  flex-basis: 45%; 
  box-sizing: border-box;
  text-align: center;
`;