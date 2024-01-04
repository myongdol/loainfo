import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import Footer from "./mainCotent/Footer";
import Header from "./mainCotent/Header";
import MainContent from "./mainCotent/MainContent";
import Sidebar from "./mainCotent/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import theme from "./styles/theme";
import CharacterPage from "./pages/CharacterPage";
import GuildPage from "./pages/GuildPage";


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
                <Route path="/guilds" element={<GuildPage />} />
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
  flex-direction: column; 

@media (min-width: 768px) {
  flex-direction: row; 
}
`;

const MainSection = styled.div`
  flex: 1;
  background-repeat: repeat;
  background-color: ${(props) => props.theme.colors.dark};;
`;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;