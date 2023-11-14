import React from "react";
import useApi from "../../util/useApi";
import styled from "styled-components";



const CalendarEventsInfo = () => {
    const { data: calendarEventsData, isLoading, error } = useApi('/gamecontents/calendar');
    const calendarEvents = Array.isArray(calendarEventsData) ? calendarEventsData : [];

    if (isLoading) return <div>로딩 중...</div>;
    if (error) return <div>에러 발생: {error.message}</div>;
  
    console.log('캘린더 이벤트 정보:', calendarEventsData);

    return (
        <Section>
            <h2>캘린더 이벤트</h2>
            <List>
            {calendarEvents?.map((event, index) => (
                <ListItem key={index}>{event.name}</ListItem> 
            ))}
            </List>
        </Section>
    )
};

export default CalendarEventsInfo;



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
