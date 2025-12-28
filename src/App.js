import GlobalStyle from "./styles/global";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle /> {/* 글로벌 스타일 입니다. */}
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
