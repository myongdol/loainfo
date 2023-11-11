import styled from "styled-components";




function MainContent() {

    return (
      <StyledMainContent>
        메인화면
      </StyledMainContent>
    );
};

export default MainContent;

const StyledMainContent = styled.main`
  flex: 1;
  padding: 1rem;
  background-color: #f5f5f5;
`;