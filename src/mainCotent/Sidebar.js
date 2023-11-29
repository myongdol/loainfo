import styled from "styled-components";
import SidebarItems from "../components/SideBar/SidebarItems";


function Sidebar() {
    return (
        <StyledSidebar>
            <SidebarItems
              href="https://lostark.game.onstove.com/Main"
              src="/Images/lostark.png"
              alt="게임 공식 홈페이지"
            >
              공식 홈페이지
            </SidebarItems>
        </StyledSidebar>
    )
};

export default Sidebar;

const StyledSidebar = styled.aside`
width: 180px; 
background-color: #e4e4e4;
padding: 0.25rem;
box-sizing: border-box;
background-color: ${(props) => props.theme.colors.dark};

@media (max-width: 768px) {
    width: 100px;
  }
`;