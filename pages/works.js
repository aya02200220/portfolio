import dynamic from "next/dynamic";
import Works from "../components/works/Works";
import Section from "../components/section/Section";
import Seo from "../components/seo/Seo";

const WorksPage = () => {
  return (
    <>
      <Seo pageTitle="Works" />
      <Section index="02" kicker="Works" title="Selected" accent="works.">
        <Works />
      </Section>
    </>
  );
};

export default dynamic(() => Promise.resolve(WorksPage), { ssr: false });
