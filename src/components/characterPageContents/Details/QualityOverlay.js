
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
  height: 14px;
  background-color: #FFFFFF;
  border-radius: 0 0 5px 5px;
`;

const QualityBarFilled = styled.div`
  background: ${props => props.backgroundColor};; 
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
  font-size: 1em;
  text-shadow: 0 0 3px #000;
  z-index: 1;
`;