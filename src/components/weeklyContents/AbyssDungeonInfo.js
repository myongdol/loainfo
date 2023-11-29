import React from "react";
import useApi from "../../util/useApi";
import styled from "styled-components";


const AbyssDungeonInfo = () => {
    const { data: abyssDungeonsData, isLoading , error } = useApi('/gamecontents/challenge-abyss-dungeons');
    const abyssDungeons = Array.isArray(abyssDungeonsData) ? abyssDungeonsData : [];

    if (isLoading) return <div>로딩 중...</div>;
    if (error) return <div>에러 발생: {error.message}</div>;
  
    console.log('어비스 던전 정보:', abyssDungeonsData);

    return (
        <Section>
            <h2>도전 어비스 던전</h2>
            <List>
            {abyssDungeons?.map((dungeon, index) => (
                <ListItem key={index}>
                     <h3>{dungeon.AreaName} <br/>{dungeon.Name}</h3> 
                        <h4>
                          시작: {dungeon.StartTime} <br />
                          종료: {dungeon.EndTime}
                        </h4>
                        <DungeonImg src={dungeon.Image}/>
                        {dungeon.RewardItems && (
                            <RewardList>
                                {dungeon.RewardItems.map((reward, rewardIndex) => (
                                    <RewardItem key={rewardIndex}>
                                        <RewardIcon src={reward.Icon} alt={reward.Name} />
                                        {reward.Name} ({reward.Grade})
                                    </RewardItem>
                                ))}
                            </RewardList>
                        )}
                </ListItem> 
            ))}
            </List>
      </Section>
    )
};

export default AbyssDungeonInfo;



const Section = styled.section`
  padding: 20px;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const ListItem = styled.li`
  padding: 10px;
  flex: 1;
  border-bottom: none;
  max-width: calc(50% - 20px);

  @media (max-width: 768px) {
    max-width: calc(100% - 20px);
  }

  @media (max-width: 480px) {
    max-width: 100%;
  }
`;

const DungeonImg = styled.img`
  width: 100%;
  height: auto;
  margin-right: 10px;
  max-width: 260px;
  min-height: 260px;
`;

const RewardList = styled.ul`
  list-style: none;
  padding-left: 1px;
`;

const RewardItem = styled.li`
  display: flex;
  align-items: center;
`;

const RewardIcon = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 5px;
`;