import dynamic from "next/dynamic";
import Header from "../components/header/Header";
import About from "../components/about/about1";
import Skills from "../components/skills/Skills";
import Footer from "../components/footer/Footer";
import Seo from "../components/seo/Seo";
import PersonalInfo from "../components/about/about1/PersonalInfo";

const index = () => {
  return (
    <div className="bg-homeBg min-h-screen dark:bg-homeBg-dark bg-no-repeat bg-center bg-cover bg-fixed  md:pb-16 w-full">
      <Seo pageTitle="About" />

      <div className="container lg:rounded-2xl bg-white dark:bg-[#333]  px-4 sm:px-5 md:px-10 lg:px-20">
        <div data-aos="fade-up" data-aos-duration="900">
          {/* Start top about info */}
          <div className="pt-12">
            <h2 className="after-effect after:left-52 mt-12 lg:mt-0 ">
              About Me
            </h2>
            <About />
          </div>

          <div className="pb-12 ">
            <h3 className="text-[25px] dark:text-white font-medium pb-5 mt-5 text-center">
              Skill Sets
            </h3>
            <div className="">
              <Skills />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
