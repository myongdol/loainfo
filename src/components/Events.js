import styled from 'styled-components';
import Pagination from './Pagination';
import { Link } from 'react-router-dom';


const Events = ({ events, itemsPerPage, totalItems, paginate }) => {
  return (
    <>
      <h1>진행중인 이벤트</h1>
      <List>
        {events.map((event, index) => (
          <ListItem key={index}>
            <StyledLink to={event.Link} target="_blank" rel="noopener noreferrer">
             <div>
              {event.Title}
             </div>
              {event.Thumbnail}
            </StyledLink>
          </ListItem>
        ))}
      </List>
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={totalItems}
        paginate={paginate}
      />
    </>
  );
};

export default Events;



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


