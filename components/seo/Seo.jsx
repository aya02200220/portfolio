import Head from "next/head";

const Seo = ({ pageTitle }) => (
  <>
    <Head>
      <title>{pageTitle && `Aya's Portfolio`}</title>
    </Head>
  </>
);

export default Seo;
