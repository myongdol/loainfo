import styled from "styled-components";
import Footer from "./mainCotent/Footer";
import Header from "./mainCotent/Header";
import MainContent from "./mainCotent/MainContent";
import Sidebar from "./mainCotent/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CharacterDetails from "./components/character/CharacterDetails";

function App() {
  return (
    <BrowserRouter>
    <AppContainer>
      <Header />
        <ContentContainer>
          <MainSection>
            <Routes>
              <Route path="/" element={<MainContent/>} />
              <Route path="/character/:characterName" element={<CharacterDetails />} />
            </Routes>
          </MainSection>
          <Sidebar />
        </ContentContainer>
      <Footer />
    </AppContainer>
    </BrowserRouter>
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
