import dynamic from "next/dynamic";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import Seo from "../components/seo/Seo";

const index = () => {
  return (
    <div className="bg-homeBg min-h-screen dark:bg-homeBg-dark bg-no-repeat bg-center bg-cover bg-fixed  md:pb-16 w-full">
      <Seo pageTitle="Home" />
      <Header />
      <Hero />
    </div>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
