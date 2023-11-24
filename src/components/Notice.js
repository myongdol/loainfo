import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Pagination from './Pagination';


const Notices = ({ notices, itemsPerPage, totalItems, paginate }) => {
    return (
      <NoticesContainer>
        <h3>공지사항 바로가기</h3>
        <List>
          {notices.map((notice, index) => (
            <ListItem key={index}>
                <StyledLink to={notice.Link} target="_blank" rel="noopener noreferrer">
                {notice.Title}
                </StyledLink>
            </ListItem>
          ))}
        </List>
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={totalItems}
          paginate={paginate}
        />
      </NoticesContainer>
    );
  };
  
export default Notices;


const NoticesContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 10px;
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

