import dynamic from "next/dynamic";
import About from "../components/about/about1";
import Skills from "../components/skills/Skills";
import Section from "../components/section/Section";
import Seo from "../components/seo/Seo";

const AboutPage = () => {
  return (
    <>
      <Seo pageTitle="About" />
      <Section index="01" kicker="About" title="About" accent="me.">
        <About />
        <Skills />
      </Section>
    </>
  );
};

export default dynamic(() => Promise.resolve(AboutPage), { ssr: false });
