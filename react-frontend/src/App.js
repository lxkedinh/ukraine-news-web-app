// React imports

// styled-components imports
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";

// component imports
import { StyledApp } from "./Components/styled/App.styled";
import { WebsiteTitle } from "./Components/styled/WebsiteTitle.styled";
import ArticleCardGrid from "./Components/ArticleCardGrid";
import { LoadArticleButton } from "./Components/styled/LoadArticleButton.styled";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StyledApp>
        <WebsiteTitle>Ukraine Invasion News Feed</WebsiteTitle>
        <ArticleCardGrid />
        <LoadArticleButton>Load More</LoadArticleButton>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
