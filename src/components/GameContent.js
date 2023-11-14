import React from 'react';
import useApi from '../util/useApi';
import styled from 'styled-components';


function GameContents() {
    const { data: abyssDungeonsData, isLoading: isLoadingAbyssDungeons } = useApi('/gamecontents/challenge-abyss-dungeons');
    const { data: guardianRaidsData, isLoading: isLoadingGuardianRaids } = useApi('/gamecontents/challenge-guardian-raids');
    const { data: calendarEventsData, isLoading: isLoadingCalendar } = useApi('/gamecontents/calendar');
  
  const abyssDungeons = Array.isArray(abyssDungeonsData) ? abyssDungeonsData : [];
  const guardianRaids = Array.isArray(guardianRaidsData) ? guardianRaidsData : [];
  const calendarEvents = Array.isArray(calendarEventsData) ? calendarEventsData : [];

  if (isLoadingAbyssDungeons || isLoadingGuardianRaids || isLoadingCalendar) {
    return <LoadingContainer>로딩 중...</LoadingContainer>;
  }
  console.log('Abyss Dungeons Data:', abyssDungeonsData);
  console.log('Guardian Raids Data:', guardianRaidsData);
  console.log('Calendar Events Data:', calendarEventsData);


  return (
    <ContentContainer>
      <Section>
        <h2>도전 어비스 던전</h2>
        <List>
          {abyssDungeons?.map((dungeon, index) => (
            <ListItem key={index}>{dungeon.name}</ListItem> 
          ))}
        </List>
      </Section>

      <Section>
        <h2>도전 가디언 레이드</h2>
        <List>
          {guardianRaids?.map((raid, index) => (
            <ListItem key={index}>{raid.name}</ListItem> 
          ))}
        </List>
      </Section>

      <Section>
        <h2>캘린더 이벤트</h2>
        <List>
          {calendarEvents?.map((event, index) => (
            <ListItem key={index}>{event.name}</ListItem> 
          ))}
        </List>
      </Section>
    </ContentContainer>
  );
}

export default GameContents;



const LoadingContainer = styled.div`
  text-align: center;
  padding: 20px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

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
