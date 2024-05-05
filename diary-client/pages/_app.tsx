import { AppProps } from "next/app";
import "../styles.css";
import Head from "next/head";
import { AuthProvider } from "@/context/auth";

const App = ({ Component, pageProps }: AppProps) => (
  <AuthProvider>
    <>
      <Head>
        <title />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  </AuthProvider>
);

export default App;
