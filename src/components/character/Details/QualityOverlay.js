
import React from 'react';
import styled from 'styled-components';


const QualityOverlay = ({ qualityValue }) => {
    const qualityColor = getQualityColor(qualityValue);

  return (
    <QualityBarWrapper>
      <QualityBarContainer>
        <QualityBarFilled width={qualityValue} backgroundColor={qualityColor} />
        <QualityBarRemaining width={100 - qualityValue} />
        <StyledQualityValue>{qualityValue}</StyledQualityValue>
      </QualityBarContainer>
    </QualityBarWrapper>
  );
};

// 임시색상
function getQualityColor(qualityValue) {
    if (qualityValue >= 100) return 'gold';
    if (qualityValue >= 90) return 'purple';
    if (qualityValue >= 70) return 'blue';
    if (qualityValue >= 30) return 'green';
    if (qualityValue >= 10) return 'yellow';
    return 'red';
  }

export default QualityOverlay;



const QualityBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const QualityBarContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 12px;
  background-color: #FFFFFF;
  border-radius: 0 0 5px 5px;
`;

const QualityBarFilled = styled.div`
  background-color: ${props => props.backgroundColor};
  width: ${props => props.width}%;
  height: 100%;
  transition: width 0.5s ease-in-out;
`;

const QualityBarRemaining = styled.div`
  background-color: rgba(255, 255, 255, 0.3);
  width: ${props => props.width}%;
`;

const StyledQualityValue = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #ffffff;
  font-size: 0.9em;
  text-shadow: 0 0 3px #000;
  z-index: 1;
`;