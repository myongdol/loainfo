import styled from "styled-components";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <AppContainer>
      <Header />
        <ContentContainer>
          <MainSection>
            <MainContent />
          </MainSection>
          <Sidebar />
        </ContentContainer>
      <Footer />
    </AppContainer>
  );
}

export default App;


const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const ContentContainer = styled.div`
  display: flex;
  flex: 1;
`;

const MainSection = styled.div`
  flex: 1;
`;
