import { AppProps } from "next/app";
import "../styles.css";
import Head from "next/head";

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Component {...pageProps} />
  </>
);

export default App;