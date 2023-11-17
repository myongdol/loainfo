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
width: 150px; 
background-color: #e4e4e4;
padding: 1rem;
box-sizing: border-box;
`;