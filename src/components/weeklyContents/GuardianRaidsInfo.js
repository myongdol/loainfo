import React from "react";
import styled from "styled-components";
import useApi from "../../util/useApi";



const GuardianRaidsInfo = () => {
    const { data: guardianRaidsData, isLoading, error} = useApi('/gamecontents/challenge-guardian-raids');
    const raids = guardianRaidsData?.Raids || [];
    const rewardItems = guardianRaidsData?.RewardItems || [];

    if (isLoading) return <div>로딩 중...</div>;
    if (error) return <div>에러 발생: {error.message}</div>;
  
    console.log('가디언 정보:', guardianRaidsData);

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