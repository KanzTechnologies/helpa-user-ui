import "../styles/globals.css";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, lightTheme } from "../theme";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      {getLayout(<Component {...pageProps} />)}
    </ThemeProvider>
  );
}

export default MyApp;
