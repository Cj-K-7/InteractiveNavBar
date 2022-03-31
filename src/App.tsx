import { useRecoilValue } from "recoil";
import { ThemeProvider } from "styled-components";
import { isDark } from "./atoms";
import Router from "./Router";
import GlobalStyle from "./style/GlobalStyle";
import { dakrTheme, lightTheme } from "./style/theme";

function App() {
  const onDark = useRecoilValue(isDark);
  return (
    <ThemeProvider theme={onDark ? dakrTheme : lightTheme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
}

export default App;
