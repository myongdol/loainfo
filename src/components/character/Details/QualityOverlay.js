
import React from 'react';
import styled from 'styled-components';


const QualityOverlay = ({ qualityValue }) => {
  const qualityText = getQualityText(qualityValue);
  return <QualityText>{qualityText}</QualityText>;
};

function getQualityText(qualityValue) {
  if (qualityValue >= 90) return '전설';
  if (qualityValue >= 70) return '유물';
  return '일반';
}

export default QualityOverlay;



const QualityText = styled.div`
  color: blue;    
`;