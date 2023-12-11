import React from 'react';
import styled from 'styled-components';

const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <Container>
      {pageNumbers.map(number => (
        <li key={number} className="page-item">
            <PageItems href="#!" onClick={(e) => {
            e.preventDefault(); 
            paginate(number);
            }} className="page-link">
            {number}
            </PageItems>
        </li>
        ))}
      </Container>
    </nav>
  );
};

export default Pagination;

const Container = styled.ul`
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: center;
    gap: 8px;
    cursor: pointer;
`

const PageItems = styled.a`
    text-decoration: none;
    color: ${(props) => props.theme.colors.text};
    padding: 5px 10px;
    border: 1px solid #ddd;
    &:hover,
    &:focus {
      color: #fff;
      outline: 0;
      box-shadow: 0 0 40px 40px ${props => props.theme.colors.highlight} inset;
    }

  transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
`;

