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
import CalendarIsland from "../components/weeklyContents/calendarEvents/CalendarIsland";
import CouponInfo from "../components/CouponInfo";



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
  const [calendarIsland, setCalendarIsland] = useState([]);
  console.log(calendarEventsData);
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
        setCalendarIsland(calendarEventsData.filter(e => e.CategoryName === "섬"))
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
        <NoticeCouponContainer>
          <Notices 
            notices={currentNotices}
            itemsPerPage={itemsPerPage}
            totalItems={noticesData ? notices.length : 0}
            paginate={paginateNotices}
          />
          <CouponInfo />
        </NoticeCouponContainer>

        <ContentContainer>
          <AbyssDungeonContainer>
            <AbyssDungeonInfo />
          </AbyssDungeonContainer>
          <GuardianRaidsContainer>
            <GuardianRaidsInfo />
          </GuardianRaidsContainer>
          <RowenContainer>
            {rowen.length > 0 && <Rowen events={rowen} />}
          </RowenContainer>
        </ContentContainer>

        <CalendarContainer>
          {adventureIsland.length > 0 && <AdventureIsland events={adventureIsland} />}
          {chaosGate.length > 0 && <ChaosGate events={chaosGate} />}
          {fieldBoss.length > 0 && <FieldBoss events={fieldBoss} />}
        </CalendarContainer>

        {sailing.length > 0 && <Sailing events={sailing} />}
        {calendarIsland.length > 0 && <CalendarIsland events={calendarIsland} />}

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

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px; 
  align-items: stretch;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.dark};
  > * { 
    min-width: 0;
    flex: 1 1 auto;
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const AbyssDungeonContainer = styled.div`
  flex: 2;
  min-height: 350px;
`;

const GuardianRaidsContainer = styled.div`
  flex: 1;
  min-height: 350px;
`;

const RowenContainer = styled.div`
  flex: 3;
  min-height: 350px;
`;

const NoticeCouponContainer = styled.div`
  display: flex;
  > :first-child {
    flex: 7;
  }
  > :last-child {
    flex: 3;
  }
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

const CalendarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px; 
  align-items: stretch;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.dark};
  > * { 
    min-width: 0;
    flex: 1;
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;