import { useEffect, useState } from "react";
import styled from "styled-components";
import Notices from "../components/Notice";
import Events from "../components/Events";
import useApi from "../util/useApi";


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
       <Notices 
        notices={currentNotices}
        itemsPerPage={itemsPerPage}
        totalItems={noticesData ? notices.length : 0}
        paginate={paginateNotices}
       />

      <Events
        events={eventsData}
        itemsPerPage={itemsPerPage}
      />
      </StyledMainContent>
    );
};

export default MainContent;

const StyledMainContent = styled.main`
  flex: 1;
  padding: 1rem;
  background-color: #ece7e7;
`;