import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import Footer from "./mainCotent/Footer";
import Header from "./mainCotent/Header";
import MainContent from "./mainCotent/MainContent";
import Sidebar from "./mainCotent/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import theme from "./styles/theme";
import CharacterPage from "./components/CharacterPage";


function App() {
  return (
    <BrowserRouter>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppContainer>
        <Header />
          <ContentContainer>
            <MainSection>
              <Routes>
                <Route path="/" element={<MainContent/>} />
                <Route path="/character/:characterName" element={<CharacterPage />} />
              </Routes>
            </MainSection>
            <Sidebar />
          </ContentContainer>
        <Footer />
      </AppContainer>
    </ThemeProvider>
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

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;