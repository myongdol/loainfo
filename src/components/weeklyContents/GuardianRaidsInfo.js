import React, { useState } from "react";
import styled from "styled-components";
import useApi from "../../util/useApi";
import GuardianRewardModal from "./GuardianRewardModal";


const GuardianRaidsInfo = () => {
    const { data: guardianRaidsData, isLoading, error} = useApi('/gamecontents/challenge-guardian-raids');
    const raids = guardianRaidsData?.Raids || [];

    const [modalOpen, setModalOpen] = useState(false);
    const [rewardItems, setRewardItems] = useState([]);
    const [selectedItemLevel, setSelectedItemLevel] = useState(null);
    const itemLevels = [1250, 1415, 1460, 1490, 1540, 1580, 1610, 1630];

    if (isLoading) return <div>로딩 중...</div>;
    if (error) return <div>에러 발생: {error.message}</div>;
  
    console.log('가디언 정보:', guardianRaidsData);

    const fetchRewardItems = (expeditionItemLevel) => {
      setSelectedItemLevel(expeditionItemLevel);
      const items = guardianRaidsData?.RewardItems.find(
        (item) => item.ExpeditionItemLevel === expeditionItemLevel
      )?.Items || [];
      setRewardItems(items);
      setModalOpen(true);
    };

    return (
        <Section>
            <h2>도전 가디언 레이드</h2>
            <List>
                {raids?.map((raid, index) => (
                <ListItem key={index}>
                    <h3>{raid.Name}</h3>
                    <h4>{raid.Description}</h4>
                    <GuardianImg src={raid.Image}/>
                </ListItem> 
                ))}
                
            </List>
            <button onClick={() => {
            fetchRewardItems(1250);
            setModalOpen(true);
            }}>
            보상 아이템 보기
            </button>

            <GuardianRewardModal
              isOpen={modalOpen}
              onClose={() => setModalOpen(false)}
              title={`보상 아이템 - 아이템 레벨 ${selectedItemLevel}`}
            >
              
            <div>
              <label htmlFor="itemLevelSelect">아이템 레벨 선택:</label>
              <select
                id="itemLevelSelect"
                onChange={(e) => fetchRewardItems(Number(e.target.value))}
              >
                {itemLevels.map((level) => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
              </select>
            </div>
              {rewardItems.map((item, index) => (
                <Item key={index}>
                  <img src={item.Icon} alt={item.Name} />
                  <span>{item.Name}</span>
                </Item>
              ))}
            </GuardianRewardModal>
        </Section>
    )
};

export default GuardianRaidsInfo;



const Section = styled.section`
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  padding: 10px 0;
  border-bottom: 1px solid #eee;

  &:last-child {
    border-bottom: none;
  }
`;

const GuardianImg = styled.img`
  width: 200px;
  height: 150px;
  margin-right: 10px;
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0;
  
  img {
    width: 30px;
  }
`;