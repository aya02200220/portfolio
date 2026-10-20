import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Roboto+Slab:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=M+PLUS+Rounded+1c:wght@500;700;800&family=Open+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />

        <meta name="description" content="Aya Ishimura Portfolio" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="keywords"
          content=" cv, portfolio, react nextjs portfolio, resume"
        />
        <meta name="ibthemes" content="ATFN" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
