import dynamic from "next/dynamic";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import Section from "../components/section/Section";
import Seo from "../components/seo/Seo";

const ContactPage = () => {
  return (
    <>
      <Seo pageTitle="Contact" />
      <Section index="04" kicker="Contact" title="Say" accent="hello.">
        <Contact />
      </Section>
      <Footer />
    </>
  );
};

export default dynamic(() => Promise.resolve(ContactPage), { ssr: false });
