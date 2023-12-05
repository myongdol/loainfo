import styled from 'styled-components';

function CharacterEquipment({ equipments }) {
  return (
    <EquipmentContainer>
      <h3>장비</h3>
      {equipments.map((equipment, index) => (
        <EquipmentItem key={index}>
          <EquipmentIcon src={equipment.Icon} alt={equipment.Type} />
          <EquipmentInfo>
            <EquipmentType>{equipment.Type}</EquipmentType>
            <EquipmentName>{equipment.Name}</EquipmentName>
            <EquipmentGrade>{equipment.Grade}</EquipmentGrade>
          </EquipmentInfo>
        </EquipmentItem>
      ))}
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
  margin-top: 20px;
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