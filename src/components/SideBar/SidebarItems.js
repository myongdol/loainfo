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
`;

const StyledImage = styled.img`
  width: 100%; 
  height: auto;
  object-fit: contain; 
`;