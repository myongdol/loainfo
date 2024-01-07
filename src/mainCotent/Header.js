import styled from "styled-components";
import SearchCharacter from "../components/SearchCharacter";
import { ImHome } from "react-icons/im"
import { useNavigate } from "react-router-dom";
import { FaFlag } from "react-icons/fa";

function Header() {
    const navigate = useNavigate();
    function goHome() {
        navigate("/");
    };
    function goGuildPage() {
        navigate("/guilds")
    };

    return (
        <StyledHeader>
            <StyledHomeIcon size="32" onClick={goHome}/>
            <SearchCharacter />

            <GuildIconContainer>
                <StyledFlagIcon size="32" onClick={goGuildPage}/>
                <GuildText>길드</GuildText>
            </GuildIconContainer>
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
  border-bottom: 4px solid ${(props) => props.theme.colors.container};
`;

const StyledHomeIcon = styled(ImHome)`
    padding-right: 20px;
    cursor: pointer;
    :hover {
        color: #0077cc;
    }
`;

const GuildIconContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  flex-direction: column;
  padding-left: 20px;
  
  &:hover {
    color: #0077cc;
  }
`;

const StyledFlagIcon = styled(FaFlag)`
  margin-top: 10px;
`;

const GuildText = styled.span`
  margin-top: 4px;
  font-size: 1rem;
`;