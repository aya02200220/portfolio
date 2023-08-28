import dynamic from "next/dynamic";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Works1 from "../components/works/Works1";
import Seo from "../components/seo/Seo";

const index = () => {
  return (
    <div className="bg-homeBg min-h-screen dark:bg-homeBg-dark bg-no-repeat bg-center bg-cover bg-fixed  md:pb-16 w-full">
      <Seo pageTitle="Works" />
      {/* End Head for Seo */}

      <Header />
      {/* End  Header */}

      <div className="container lg:rounded-2xl bg-white dark:bg-[#111111]  ">
        <div data-aos="fade">
          <div className=" mb-8 px-4 sm:px-5 md:px-10 lg:px-[60px]">
            <div className="py-12">
              <h2 className="after-effect  after:left-48 mt-12  lg:mt-0">
                Portfolio
              </h2>
              <Works1 />
            </div>
          </div>
          {/* End portfolio */}

          {/* call footer */}
          <Footer />
        </div>
        {/* End fade effect */}
      </div>
      {/* End container */}
    </div>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
