import dynamic from "next/dynamic";
// import Header from "../components/header/Header";
// import Footer from "../components/footer/Footer";
import Works1 from "../components/works/Works1";
import Works from "../components/works/Works";
import Seo from "../components/seo/Seo";

const index = () => {
  return (
    <div className="bg-homeBg min-h-screen dark:bg-homeBg-dark bg-no-repeat bg-center bg-cover bg-fixed  md:pb-16 w-full">
      <Seo pageTitle="Works" />

      <div className="container lg:rounded-2xl bg-white dark:bg-[#333]   ">
        <div data-aos="fade-up" data-aos-duration="900">
          <div className=" mb-8 px-4 sm:px-5 md:px-10 lg:px-[60px]">
            <div className="py-12">
              <h2 className="after-effect after:left-40 mt-12 lg:mt-0 pb-2">
                Works
              </h2>
              {/* <Works1 /> */}
              <Works />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
