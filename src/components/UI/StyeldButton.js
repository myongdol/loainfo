import styled from "styled-components";

export const StyledButton = styled.button`
  box-sizing: border-box;
  appearance: none;
  background-color: transparent;
  border: 2px solid ${props => props.theme.colors.softBlueGrey};
  border-radius: 0.6em;
  color: ${props => props.theme.colors.softBlueGrey}; 
  cursor: pointer;
  display: flex;
  align-self: center;
  font-size: ${props => props.fontSize || '1rem'};
  font-weight: 700;
  line-height: 1;
  margin: ${props => props.margin || '10px'};
  padding: ${props => props.padding || '1.2em 2.8em'};
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;

  &:hover,
  &:focus {
    color: #fff;
    outline: 0;
    box-shadow: 0 0 40px 40px ${props => props.theme.colors.highlight} inset;
  }

  transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
`;