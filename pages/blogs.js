import dynamic from "next/dynamic";
import Blog from "../components/blog/Blog";
import Section from "../components/section/Section";
import Seo from "../components/seo/Seo";

const BlogsPage = () => {
  return (
    <>
      <Seo pageTitle="Blog" />
      <Section index="03" kicker="Blogs" title="Notes from" accent="the desk.">
        <Blog />
      </Section>
    </>
  );
};

export default dynamic(() => Promise.resolve(BlogsPage), { ssr: false });
