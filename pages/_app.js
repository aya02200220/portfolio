import Head from "next/head";
import { ThemeProvider } from "next-themes";
import "../styles/globals.css";
import "../styles/custom.css";
import "../styles/tokens.css";
import { LanguageProvider } from "../components/context/LanguageContext";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <LanguageProvider>
        <ThemeProvider attribute="class">
          <Component {...pageProps} />
        </ThemeProvider>
      </LanguageProvider>
    </>
  );
}
