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
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: ${(props) => props.theme.colors.dark};
  flex: 1;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: row;
`;

const ListItem = styled.li`
  padding: 10px 0;
  flex: 1;
  &:last-child {
    border-bottom: none;
  }
`;

const DungeonImg = styled.img`
  width: 200px;
  height: 200px;
  margin-right: 10px;
`;

const RewardList = styled.ul`
  list-style: none;
  padding-left: 1px;
`;

const RewardItem = styled.li`
  display: flex;
`;

const RewardIcon = styled.img`
  width: 20px;
  height: 20px;
`;