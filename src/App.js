import styled from "styled-components";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import MainContent from "./pages/MainContent";
import Sidebar from "./pages/Sidebar";

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
