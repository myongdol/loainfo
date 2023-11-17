import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Notices from "../components/Notice";
import Events from "../components/Events";
import useApi from "../util/useApi";
import AbyssDungeonInfo from "../components/weeklyContents/AbyssDungeonInfo";
import GuardianRaidsInfo from "../components/weeklyContents/GuardianRaidsInfo";
import Rowen from "../components/weeklyContents/calendarEvents/Rowen";
import AdventureIsland from "../components/weeklyContents/calendarEvents/AdventureIsland";
import ChaosGate from "../components/weeklyContents/calendarEvents/ChaosGate";
import FieldBoss from "../components/weeklyContents/calendarEvents/FieldBoss";
import Sailing from "../components/weeklyContents/calendarEvents/Sailing";



const itemsPerPage = 10;


function MainContent() {
  const [notices, setNotices] = useState([]);
  const [currentPageNotices, setCurrentPageNotices] = useState(1);
  const { data: noticesData, isLoading: isLoadingNotices, error: errorNotices } = useApi('/news/notices');
  const { data: eventsData, isLoading: isLoadingEvents, error: errorEvents } = useApi('/news/events');
  const { data: calendarEventsData, isLoadingCalendar, error: errorCalendar } = useApi('/gamecontents/calendar');

  const [rowen, setRowen] = useState([]);
  const [adventureIsland, setAdventureIsland] = useState([]);
  const [chaosGate, setChaosGate] = useState([]);
  const [fieldBoss, setFieldBoss] = useState([]);
  const [sailing, setSailing] = useState([]);

  useEffect(() => {
    if (noticesData) { 
      setNotices(noticesData);

      }    
    }, [noticesData])

    useEffect(() => {
      if (calendarEventsData && calendarEventsData.length > 0) {
        setRowen(calendarEventsData.filter(e => e.CategoryName === "로웬"));
        setAdventureIsland(calendarEventsData.filter(e => e.CategoryName === "모험 섬"));
        setChaosGate(calendarEventsData.filter(e => e.CategoryName === "카오스게이트"));
        setFieldBoss(calendarEventsData.filter(e => e.CategoryName === "필드보스"));
        setSailing(calendarEventsData.filter(e => e.CategoryName === "항해"));
      }
    }, [calendarEventsData]);  


  const paginateNotices = (pageNumber) => {
    setCurrentPageNotices(pageNumber);
  };

  // 현재 페이지에 표시할 항목 계산
  const indexOfLastNotice = currentPageNotices * itemsPerPage;
  const indexOfFirstNotice = indexOfLastNotice - itemsPerPage;
  const currentNotices = noticesData ? noticesData.slice(indexOfFirstNotice, indexOfLastNotice) : [];

  if (isLoadingNotices || isLoadingEvents || isLoadingCalendar) {
    return <div>로딩 중...</div>;
  }
  if (errorNotices || errorEvents || errorCalendar) {
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

        {rowen.length > 0 && <Rowen events={rowen} />}
        {adventureIsland.length > 0 && <AdventureIsland events={adventureIsland} />}
        {chaosGate.length > 0 && <ChaosGate events={chaosGate} />}
        {fieldBoss.length > 0 && <FieldBoss events={fieldBoss} />}
        {sailing.length > 0 && <Sailing events={sailing} />}

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
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px; 
  align-items: stretch;
  margin: 0 auto;
  border-top: 1px solid ${(props) =>  props.theme.colors.highlight};
  > * { 
    min-width: 0;
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

