import styled from "styled-components";
import SearchCharacter from "../components/SearchCharacter";
import { ImHome } from "react-icons/im"
import { useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();
    function goHome() {
        navigate("/");
    };

    return (
        <StyledHeader>
            <StyledHomeIcon size="32" onClick={goHome}/>
            <SearchCharacter />
        </StyledHeader>
    )
};

export default Header;

const StyledHeader = styled.header`
  background-color: ${(props) => props.theme.colors.dark};
  color: white;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledHomeIcon = styled(ImHome)`
    padding-right: 20px;
    cursor: pointer;
    :hover {
        color: #0077cc;
    }
`;