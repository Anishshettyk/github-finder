import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyles } from '../styles';

function MyApp({ Component, pageProps }) {
  MyApp.getInitialProps = async ({ Component, ctx }) => {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    pageProps.query = ctx.query;
    return { pageProps };
  };

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Component {...pageProps} />
      </>
    </ThemeProvider>
  );
}

export default MyApp;
