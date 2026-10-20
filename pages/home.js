import dynamic from "next/dynamic";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import Seo from "../components/seo/Seo";

const HomePage = () => {
  return (
    <>
      <Seo pageTitle="Home" />
      <Header />
      <Hero />
    </>
  );
};

export default dynamic(() => Promise.resolve(HomePage), { ssr: false });
