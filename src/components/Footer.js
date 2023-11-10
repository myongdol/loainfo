import styled from "styled-components";

function Footer() {
    return (
        <StyledFooter>
            저작권 정보, 연락처, 깃헙 등 
        </StyledFooter>
    )
};

export default Footer;

const StyledFooter = styled.footer`
  background-color: #333;
  color: white;
  padding: 1rem;
  text-align: center;
`;