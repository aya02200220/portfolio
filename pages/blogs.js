import Seo from "../components/seo/Seo";
import dynamic from "next/dynamic";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Blog from "../components/blog/Blog";

const index = () => {
  return (
    <div className="bg-homeBg min-h-screen dark:bg-homeBg-dark bg-no-repeat bg-center bg-cover bg-fixed  md:pb-16 w-full">
      <Seo pageTitle="Blog" />

      <div className="container lg:rounded-2xl bg-white dark:bg-[#333]   ">
        <div data-aos="fade-up" data-aos-duration="900">
          <div className="px-4 sm:px-5 md:px-10 lg:px-[60px]">
            <div className="py-12">
              <h2 className="after-effect after:left-32 mt-12 lg:mt-0">
                Blogs
              </h2>
              <Blog />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
