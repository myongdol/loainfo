import styled from 'styled-components';
import { equipmentColors } from '../../styles/equipmentColors';
import QualityOverlay from './Details/QualityOverlay';


function CharacterEquipment({ equipments }) {
  if (!equipments || equipments.length === 0) {
    return <div>장비 정보가 없습니다.</div>;
  }
  console.log(equipments)

  const excludedTypes = ['문장', '나침반', '부적'];

  const filteredEquipments = equipments.filter(
    (equipment) => !excludedTypes.includes(equipment.Type)
  );
  
  const leftEquipmentTypes = ['무기', '투구', '상의', '하의', '장갑', '어깨'];
  const leftEquipments = filteredEquipments.filter(equipment => leftEquipmentTypes.includes(equipment.Type));
  const rightEquipments = filteredEquipments.filter(equipment => !leftEquipmentTypes.includes(equipment.Type));
  const qualityValue = equipments.Tooltip?.Element_001?.value?.qualityValue;

  function extractQualityValue(equipment) {
    try {
      const tooltipData = JSON.parse(equipment.Tooltip);
      return tooltipData?.Element_001?.value?.qualityValue;
    } catch (error) {
      console.error('Error extracting quality value', error);
      return null;
    }
  }

  return (
    <EquipmentContainer>
      <h3>장비 목록</h3>
      <EquipmentRow>
        <LeftEquipmentContainer>
          {leftEquipments.map((equipment, index) => {
            const qualityValue = extractQualityValue(equipment);
            return (
            <EquipmentItem key={index}>
              <EquipmentIcon src={equipment.Icon} alt={equipment.Type} grade={equipment.Grade} />
              <QualityOverlay qualityValue={qualityValue} />
              <EquipmentInfo>
                <EquipmentType>{equipment.Type}</EquipmentType>
                <EquipmentName>{equipment.Name}</EquipmentName>
                <EquipmentGrade>{equipment.Grade}</EquipmentGrade>
              </EquipmentInfo>
            </EquipmentItem>
            )
          })}
        </LeftEquipmentContainer>
        <RightEquipmentContainer>
          {rightEquipments.map((equipment, index) => {
            const qualityValue = extractQualityValue(equipment);
            return (
            <EquipmentItem key={index}>
              <EquipmentIcon src={equipment.Icon} alt={equipment.Type} grade={equipment.Grade} />
              <QualityOverlay qualityValue={qualityValue} />
              <EquipmentInfo>
                <EquipmentType>{equipment.Type}</EquipmentType>
                <EquipmentName>{equipment.Name}</EquipmentName>
                <EquipmentGrade>{equipment.Grade}</EquipmentGrade>
              </EquipmentInfo>
            </EquipmentItem>
            )
          })}
        </RightEquipmentContainer>
      </EquipmentRow>
    </EquipmentContainer>
  );
}

export default CharacterEquipment;



const EquipmentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  color: white;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
`;

const EquipmentItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const EquipmentIcon = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
  background-color: ${({ grade }) => equipmentColors[grade]?.background || '#FFFFFF'};
  border: 2px solid ${({ grade }) => equipmentColors[grade]?.border || '#FFFFFF'};
  border-radius: 5px;
  padding: 8px;
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
  gap: 10px;
  width: 100%;
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