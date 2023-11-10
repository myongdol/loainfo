import styled from "styled-components";
import Content from "../components/Content";



function MainContent() {

    return (
      <StyledMainContent>
        주요 콘텐츠 
        <Content serverName="characterName" />
      </StyledMainContent>
    );
};

export default MainContent;

const StyledMainContent = styled.main`
  flex: 1;
  padding: 1rem;
  background-color: #f5f5f5;
`;