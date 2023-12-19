import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import sanitizeHtml from 'sanitize-html';



const TooltipModal = ({ isOpen, onClose, rawTooltipData }) => {
  const [parsedData, setParsedData] = useState([]);

  useEffect(() => {
    if (isOpen && rawTooltipData) {
      try {
        const tooltipData = typeof rawTooltipData === 'string' ? JSON.parse(rawTooltipData) : rawTooltipData;
        setParsedData(Object.entries(tooltipData));
      } catch (error) {
        console.error('Error parsing tooltip data:', error);
      }
    }
  }, [isOpen, rawTooltipData]);

  function getQualityColor(qualityValue) {
    if (qualityValue >= 100) {
      return 'linear-gradient(to right, #E68F34, #FF9231, #FFC739)';
    }
    if (qualityValue >= 90) {
      return 'linear-gradient(to right, #7A1890, #9B0CD4, #B50CFF)';
    }
    if (qualityValue >= 70) {
      return 'linear-gradient(to right, #0A5EA4, #10A6EF, #10C7FF)';
    }
    if (qualityValue >= 30) {
      return 'linear-gradient(to right, #397108, #B2FC10, #CFFF10)'
    }
    if (qualityValue >= 10) {
      return 'linear-gradient(to right, #FAE410, #FFEE0C, #FFF90D)'
    };
    return 'linear-gradient(to right, #FF521B, #FF6518)';
  }
  
  const renderQualityBar = (qualityValue) => {
    const qualityColor = getQualityColor(qualityValue);
    return (
      <QualityBarWrapper>
        <QualityBarContainer>
          <QualityBarFilled width={qualityValue} backgroundColor={qualityColor} />
          <QualityBarRemaining width={qualityValue} />
          <QualityValue>{qualityValue}</QualityValue>
        </QualityBarContainer>
      </QualityBarWrapper>
    );
  };



  const renderContent = ([key, element], index) => {
    console.log(element)
    if (key === 'Element_000' && element.type === 'NameTagBox') {
      const parser = new DOMParser();
      const doc = parser.parseFromString(element.value, 'text/html');
      const textContent = doc.body.textContent || "";

      return <StyledText key={index}>{textContent}</StyledText>;
    }


    if (element.type === "ItemTitle") {
      const itemTitleDetails = [];
      let qualityValue;
      let iconPath;

      for (const detailKey in element.value) {
        if (detailKey === "qualityValue") {
          qualityValue = element.value[detailKey];
        }
      }

      if (element.value.slotData && element.value.slotData.iconPath) {
        iconPath = element.value.slotData.iconPath;
      }

      if (qualityValue !== undefined) {
        itemTitleDetails.push(
          <ItemContainer key={`${key}-container`}>
            {iconPath && <StyledImage src={iconPath} alt="Icon" />}
            {renderQualityBar(qualityValue)}
          </ItemContainer>
        );
      }

      return <div key={index}>{itemTitleDetails}</div>;
    }


    switch (element.type) {
      case "SingleTextBox":
      case "MultiTextBox":
      case "ItemPartBox":
      case "Progress":
        return (
          <TooltipItem key={index} dangerouslySetInnerHTML={{ __html: sanitizeHtml(element.value) }} />
        );
      default:
        return (
          <TooltipItem key={index}>
            {JSON.stringify(element.value, null, 2)}
          </TooltipItem>
        );
    }
  };


  if (!isOpen) return null;

  return (
    <ModalBackdrop onClick={onClose}>
       <ModalContainer onClick={event => event.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>장비 상세 정보</ModalTitle>
          <CloseButton onClick={onClose}>X</CloseButton>
        </ModalHeader>
        <ModalBody>
          {parsedData.map(renderContent)}
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
  background-color: ${(props) => props.theme.colors.background};
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
  color: white;
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
  color: ${(props) => props.theme.colors.text};
`;

const ModalTitle = styled.h4`
  margin: 0;
`;

const ModalBody = styled.div`
  max-height: 60vh;
  overflow: auto;
  font-family: monospace;
  white-space: pre-wrap;
  word-break: break-all;
  color: ${(props) => props.theme.colors.text};
`;

const TooltipItem = styled.div`
  margin-bottom: 10px;
  color: ${(props) => props.theme.colors.text};
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


const StyledText = styled.p`
  text-align: center;
  color: #E3C7A1;
  margin: 0;
`;

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const StyledImage = styled.img`
  width: 80px;
  height: auto;
`;

const QualityBarContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
  width: 100%;
  height: 16px;
  position: relative;
  background-color: #FFFFFF;
  border-radius: 0 0 5px 5px;
`;

const QualityBarWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;


const QualityBarFilled = styled.div`
  background: ${props => props.backgroundColor};
  width: ${props => props.width}%;
  height: 100%;
  transition: width 0.5s ease-in-out;
`;

const QualityBarRemaining = styled.div`
  width: ${props => 100 - props.width}%;
  height: 100%;
`;

const QualityValue = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #ffffff;
  font-size: 1em;
  text-shadow: 0 0 3px #000;
  z-index: 1;
`;
