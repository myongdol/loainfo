import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Pagination from "../components/Pagination";
import { Link } from "react-router-dom";

const APIKEY = process.env.REACT_APP_API_KEY;
const baseURL = 'https://developer-lostark.game.onstove.com/';
const itemsPerPage = 10;

const api = axios.create({
  baseURL: baseURL,
  headers: {
    'accept': 'application/json',
    'Authorization': `Bearer ${APIKEY}`
  }
});


function MainContent() {
  const [notices, setNotices] = useState([]);
  const [events, setEvents] = useState([]);
  const [currentPageNotices, setCurrentPageNotices] = useState(1);
  const [currentPageEvents, setCurrentPageEvents] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  

  useEffect(() => {
    // 공지사항 가져오기
    api.get('/news/notices')
      .then(response => {
        setNotices(response.data);
      })
      .catch(error => {
        console.error('공지사항을 불러오는 중 에러가 발생했습니다.', error);
      });

    // 진행 중인 이벤트 가져오기
    api.get('/news/events')
      .then(response => {
        setEvents(response.data);
      })
      .catch(error => {
        console.error('이벤트 정보를 불러오는 중 에러가 발생했습니다.', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const paginateNotices = (pageNumber) => {
    setCurrentPageNotices(pageNumber);
  };

  const paginateEvents = (pageNumber) => {
    setCurrentPageEvents(pageNumber);
  };

  // 현재 페이지에 표시할 항목 계산
  const indexOfLastNotice = currentPageNotices * itemsPerPage;
  const indexOfFirstNotice = indexOfLastNotice - itemsPerPage;
  const currentNotices = notices.slice(indexOfFirstNotice, indexOfLastNotice);

  const indexOfLastEvent = currentPageEvents * itemsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - itemsPerPage;
  const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent);

  if (isLoading) {
    return <div>로딩 중...</div>;
  }



    return (
      <StyledMainContent>
      <h1>공지사항</h1>
      <List>
        {currentNotices.map((notice, index) => (
          <ListItem key={index}>
            <StyledLink to={notice.Link} target="_blank" rel="noopener noreferrer">
            {notice.Title}
            </StyledLink>
          </ListItem> 
        ))}
      </List>
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={notices.length}
        paginate={paginateNotices}
      />

      <h1>진행중인 이벤트</h1>
      <List>
        {currentEvents.map((event, index) => (
          <ListItem key={index}>
            <StyledLink to={event.Link} target="_blank" rel="noopener noreferrer">
              {event.Title}
            </StyledLink>
            </ListItem>
        ))}
      </List>
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={events.length}
        paginate={paginateEvents}
      />
      </StyledMainContent>
    );
};

export default MainContent;

const StyledMainContent = styled.main`
  flex: 1;
  padding: 1rem;
  background-color: #f5f5f5;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  background-color: #ffffff;
  border-bottom: 1px solid #dddddd;
  padding: 10px;
  margin: 5px 0;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f8f8f8;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #0077cc;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;
