import styled from "styled-components";


function Sidebar() {
    return (
        <StyledSidebar>
            사이드 메뉴
        </StyledSidebar>
    )
};

export default Sidebar;

const StyledSidebar = styled.aside`
width: 250px; 
background-color: #e4e4e4;
padding: 1rem;
height: calc(100vh - 60px); 
box-sizing: border-box;
`;