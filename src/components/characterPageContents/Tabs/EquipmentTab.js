import styled from 'styled-components';
import { equipmentColors } from '../../../styles/equipmentColors';
import QualityOverlay from '../Details/QualityOverlay';
import { useState } from 'react';
import TooltipModal from '../../UI/Modals/TooltipModal';
import GemsOverview from '../Details/GemsOverview';


const breakpoints = {
  small: '480px',
  medium: '768px',
  large: '1024px',
};


function EquipmentTab({ equipments, gems }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTooltip, setCurrentTooltip] = useState(null);

  if (!equipments || equipments.length === 0) {
    return <div>장비 정보가 없습니다.</div>;
  }

  const excludedTypes = ['문장', '나침반', '부적'];
  const excludedQualityTypes = ['어빌리티 스톤', '팔찌'];

  const filteredEquipments = equipments.filter(
    (equipment) => !excludedTypes.includes(equipment.Type)
  );
  
  const leftEquipmentTypes = ['무기', '투구', '상의', '하의', '장갑', '어깨'];
  const leftEquipments = filteredEquipments.filter(equipment => leftEquipmentTypes.includes(equipment.Type));
  const rightEquipments = filteredEquipments.filter(equipment => !leftEquipmentTypes.includes(equipment.Type));



  const handleItemClick = (tooltip) => {
    setCurrentTooltip(JSON.parse(tooltip));
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };


  function extractQualityValue(equipment) {
    try {
      const tooltipData = JSON.parse(equipment.Tooltip);
      return tooltipData.Element_001.value.qualityValue;
    } catch (error) {
      console.error('Error extracting quality value', error);
      return null;
    }
  }

  function extractSetEffect(equipment) {
    try {
      const tooltipData = JSON.parse(equipment.Tooltip);
      const parser = new DOMParser();
      const setNameHtml = parser.parseFromString(tooltipData.Element_009.value.firstMsg, 'text/html');
      const setLevelHtml = parser.parseFromString(tooltipData.Element_009.value.itemData.Element_000.label, 'text/html');
      const setName = setNameHtml.body.textContent || ""; // '사멸' 텍스트 추출
      const setLevel = setLevelHtml.body.textContent || ""; // 'Lv.2' 텍스트 추출
      return setName && setLevel ? `${setName} ${setLevel}` : null;
    } catch (error) {
      console.error('Error extracting set effect', error);
      return null;
    }
  }

  return (
    <>
    <EquipmentContainer>
      <h3>장비 목록</h3>
      <EquipmentRow>
        <LeftEquipmentContainer>
          {leftEquipments.map((equipment, index) => {
            const qualityValue = extractQualityValue(equipment);
            const setEffect = extractSetEffect(equipment);
            return (
            <EquipmentItem key={index} onClick={() => handleItemClick(equipment.Tooltip)}>
              <EquipmentIconWrapper>
                <EquipmentIcon src={equipment.Icon} alt={equipment.Type} grade={equipment.Grade} />
                <QualityOverlay qualityValue={qualityValue} />
              </EquipmentIconWrapper>
              <EquipmentInfo>
                <EquipmentType>{equipment.Type}</EquipmentType>
                <EquipmentName>{equipment.Name}</EquipmentName>
                <EquipmentGrade>{equipment.Grade}</EquipmentGrade>
                {setEffect && <SetEffectDisplay>{setEffect}</SetEffectDisplay>}
              </EquipmentInfo>
            </EquipmentItem>
            )
          })}
        </LeftEquipmentContainer>
        <RightEquipmentContainer>
          {rightEquipments.map((equipment, index) => {
            const qualityValue = extractQualityValue(equipment);
            const isExcludedType = excludedQualityTypes.includes(equipment.Type);
            return (
            <EquipmentItem key={index} onClick={() => handleItemClick(equipment.Tooltip)}>
              <EquipmentIconWrapper>
                <EquipmentIcon src={equipment.Icon} alt={equipment.Type} grade={equipment.Grade} />
                {!isExcludedType && <QualityOverlay qualityValue={qualityValue} />}
              </EquipmentIconWrapper>
              <EquipmentInfo>
                <EquipmentType>{equipment.Type}</EquipmentType>
                <EquipmentName>{equipment.Name}</EquipmentName>
                <EquipmentGrade>{equipment.Grade}</EquipmentGrade>
              </EquipmentInfo>
            </EquipmentItem>
            )
          })}
        </RightEquipmentContainer>
        <TooltipModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          rawTooltipData={currentTooltip}
        />
      </EquipmentRow>
    </EquipmentContainer>

    <GemsContainer>
      <GemsOverview gems={gems} />
    </GemsContainer>
    </>
  );
}

export default EquipmentTab;



const EquipmentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  color: white;
  background-color: ${props => props.theme.colors.darkbackground};
  border-radius: 10px;
`;

const EquipmentItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  position: relative;
`;

const EquipmentIconWrapper = styled.div`
  position: relative;
  width: 60px; 
  height: 60px;
  padding: 0;
  border-radius: 5px;
  overflow: hidden;
`;

const EquipmentIcon = styled.img`
  width: 40px;
  height: 42px;
  background-color: ${({ grade }) => equipmentColors[grade]?.background || '#FFFFFF'};
  border: 2px solid ${({ grade }) => equipmentColors[grade]?.border || '#FFFFFF'};
  border-radius: 5px;
  padding: 10px;
  display: block;
`;

const EquipmentInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const EquipmentType = styled.span`
  font-weight: bold;
`;

const EquipmentName = styled.span`
  font-size: 0.9em;
`;

const EquipmentGrade = styled.span`
  font-size: 0.8em;
  color: #d4af37;
`;

const EquipmentRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 25px;
  width: 100%;
  flex-direction: row;

  @media (max-width: ${breakpoints.medium}) {
    flex-direction: column;
    gap: 10px;
  }
`;

const LeftEquipmentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const RightEquipmentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const SetEffectDisplay = styled.div`
  color: #d4af37;
  font-size: 0.8em;
`;

const GemsContainer = styled.div`
  margin-top: 20px; 
  color: white;
`;