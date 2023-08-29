import dynamic from "next/dynamic";
import Header from "../components/header/Header";
import About1 from "../components/about/about1";
import Skills from "../components/skills/Skills";
import Brand from "../components/brand/Brand";
import Footer from "../components/footer/Footer";
import Seo from "../components/seo/Seo";
import PersonalInfo from "../components/about/about1/PersonalInfo";

const index = () => {
  return (
    <div className="bg-homeBg min-h-screen dark:bg-homeBg-dark bg-no-repeat bg-center bg-cover bg-fixed  md:pb-16 w-full">
      <Seo pageTitle="About" />
      {/* End Head for Seo */}

      <Header />
      {/* End  Header */}

      <div className="container lg:rounded-2xl bg-white dark:bg-[#111111]  px-4 sm:px-5 md:px-10 lg:px-20">
        <div data-aos="fade">
          {/* Start top about info */}
          <div className="pt-12">
            <h2 className="after-effect after:left-52 mt-12 lg:mt-0 ">
              About Me
            </h2>
            {/* Page Title */}
            <About1 />
          </div>
          {/* End top about info */}

          {/* Start about service info */}

          <div className="pb-12 ">
            <h3 className="text-[25px] dark:text-white font-medium pb-5 mt-5 text-center">
              My Experience
            </h3>
            <div className="">
              {/* Experience information  */}

              <Skills />
            </div>
          </div>
          {/* End about service info */}

          {/* Start Common Footer  */}
          <Footer />
          {/* End Common Footer  */}
        </div>
        {/* End fade effect */}
      </div>
      {/* End container */}
    </div>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
