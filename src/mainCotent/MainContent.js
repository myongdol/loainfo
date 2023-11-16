import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Notices from "../components/Notice";
import Events from "../components/Events";
import useApi from "../util/useApi";
import AbyssDungeonInfo from "../components/weeklyContents/AbyssDungeonInfo";
import CalendarEventsInfo from "../components/weeklyContents/CalendarEventsInfo";
import GuardianRaidsInfo from "../components/weeklyContents/GuardianRaidsInfo";



const itemsPerPage = 10;


function MainContent() {
  const [notices, setNotices] = useState([]);
  const [currentPageNotices, setCurrentPageNotices] = useState(1);
  const { data: noticesData, isLoading: isLoadingNotices, error: errorNotices } = useApi('/news/notices');
  const { data: eventsData, isLoading: isLoadingEvents, error: errorEvents } = useApi('/news/events');

  useEffect(() => {
    if (noticesData) { 
      setNotices(noticesData);

      }    
    }, [noticesData])


  const paginateNotices = (pageNumber) => {
    setCurrentPageNotices(pageNumber);
  };

  // 현재 페이지에 표시할 항목 계산
  const indexOfLastNotice = currentPageNotices * itemsPerPage;
  const indexOfFirstNotice = indexOfLastNotice - itemsPerPage;
  const currentNotices = noticesData ? noticesData.slice(indexOfFirstNotice, indexOfLastNotice) : [];

  if (isLoadingNotices || isLoadingEvents) {
    return <div>로딩 중...</div>;
  }
  if (errorNotices || errorEvents) {
    return <div>데이터를 불러오는 중 에러가 발생했습니다.</div>
  }


    return (
      <StyledMainContent>
      
      <Events
        events={eventsData}
        itemsPerPage={itemsPerPage}
      />
      <Notices 
        notices={currentNotices}
        itemsPerPage={itemsPerPage}
        totalItems={noticesData ? notices.length : 0}
        paginate={paginateNotices}
      />

      <GuardianAbyssContainer>
        <AbyssDungeonInfo />
        <GuardianRaidsInfo />
      </GuardianAbyssContainer>

      <CalendarEventsInfo />
      </StyledMainContent>
    );
};

export default MainContent;

const StyledMainContent = styled.main`
  flex: 1;
  padding: 1rem;
  background-color: ${(props) => props.theme.colors.dark};
  color: #ffffff;
`;

const GuardianAbyssContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  gap: 10px; 
  align-items: stretch;
  border-top: 1px solid ${(props) =>  props.theme.colors.highlight};
  > * { 
    flex: 1;
    min-width: 0;
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;