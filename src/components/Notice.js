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
  border-right: 2px solid ${(props) => props.theme.colors.container};
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  padding: 10px;
  margin: 5px 0;
  transition: background-color 0.2s;
  transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;

  &:hover{
    color: #000000;
    outline: 0;
    box-shadow: 0 0 40px 40px ${props => props.theme.colors.highlight} inset;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: 500;
  display: block;

  &:hover {
    text-decoration: underline;
  }
`;

