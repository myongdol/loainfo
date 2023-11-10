import styled from "styled-components";
import SearchCharacter from "../components/SearchCharacter";

function Header() {
    return (
        <StyledHeader>
            헤더, 캐릭터명 검색 
            <SearchCharacter />
        </StyledHeader>
    )
};

export default Header;

const StyledHeader = styled.header`
  background-color: #333;
  color: white;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;