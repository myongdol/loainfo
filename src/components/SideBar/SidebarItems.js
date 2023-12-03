import styled from "styled-components";



const SidebarItems = ({ href, src, alt, children }) => (
    <StyledLink href={href} target="_blank" rel="noopener noreferrer">
        <StyledImage src={src} alt={alt} />
        {children}
    </StyledLink>
);

export default SidebarItems;


const StyledLink = styled.a`
  text-decoration: none;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 5px;
  width: 100%;
  font-weight: bold;
  background-color: ${(props) => props.theme.colors.background};
  border: 3px solid ${(props) => props.theme.colors.softBlueGrey};
  &:hover {
    outline: 0;
    box-shadow: 0 0 40px 40px ${props => props.theme.colors.highlight} inset;
  }
  
  @media (max-width: 768px) {
    flex-basis: calc(50% - 10px);
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    flex-basis: 100%;
    font-size: 1rem;
  }
`;

const StyledImage = styled.img`
  width: 80%; 
  height: auto;
  object-fit: contain; 
  margin-bottom: 5px;

  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
  }

  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
  }
`;