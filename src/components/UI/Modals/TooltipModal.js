import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';


const TooltipModal = ({ isOpen, onClose, rawTooltipData }) => {
  const [parsedData, setParsedData] = useState([]);

  useEffect(() => {
    if (isOpen && rawTooltipData) {
      const parser = new DOMParser();
      const tooltipData = JSON.parse(rawTooltipData);
      const parsed = Object.keys(tooltipData).map(key => {
        const element = tooltipData[key];
        if (element.type === "ItemTitle" || element.type === "SingleTextBox") {
          const doc = parser.parseFromString(element.value, 'text/html');
          return { ...element, value: doc.body.textContent || "" };
        }
        return element;
      });
      setParsedData(parsed);
    }
  }, [isOpen, rawTooltipData]);

  if (!isOpen) return null;

  return (
    <ModalBackdrop onClick={onClose}>
      <ModalContainer>
        <ModalHeader>
          <ModalTitle>장비 상세 정보</ModalTitle>
          <CloseButton onClick={onClose}>X</CloseButton>
        </ModalHeader>
        <ModalBody>
          {parsedData.map((element, index) => (
            <div key={index}>
              <div dangerouslySetInnerHTML={{ __html: element.value }} />
            </div>
          ))}
        </ModalBody>
      </ModalContainer>
    </ModalBackdrop>
  );
};

export default TooltipModal;



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
  max-height: 60vh;
  overflow: auto;
  color: black;
  font-family: monospace;
  white-space: pre-wrap;
  word-break: break-all;
`;

const TooltipItem = styled.div`
  margin-bottom: 10px;
  color: #333;
  font-size: 14px;

  strong {
    font-weight: bold;
  }

  span {
    line-height: 1.5;
  }

  img {
    vertical-align: middle;
    width: 20px;
  }
`;

const SlotDataItem = styled.div`
`;

