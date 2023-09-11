import dynamic from "next/dynamic";
import Header from "../components/header/Header";
import ContactForm from "../components/contact/ContactForm";
import Footer from "../components/footer/Footer";
import Address from "../components/contact/Address";
import SnsInfo from "../components/contact/SnsInfo";
import Seo from "../components/seo/Seo";

const index = () => {
  return (
    <div className="bg-homeBg min-h-screen  dark:bg-homeBg-dark bg-no-repeat bg-center bg-cover bg-fixed  md:pb-16 w-full">
      <Seo pageTitle="Contact" />
      {/* End Head for Seo */}

      <Header />
      {/* End  Header */}

      <div className="container lg:rounded-2xl bg-white dark:bg-[#333]  ">
        <div data-aos="fade-up" data-aos-duration="900">
          <div className="py-12 px-4 sm:px-5 md:px-10 lg:px-20">
            <h2 className="after-effect after:left-120 mb-[40px] mt-12  lg:mt-0">
              Contact
            </h2>

            <div className="flex flex-col md:flex-row justify-center space-x-6">
              <div className="w-full md:w-2/5 space-y-6">
                <SnsInfo />
                <Address />
              </div>
              {/* Start contact form */}
              {/* <div className="w-full mt-8 lg:mt-0 lg:w-[60%] xl:w-[70%]"> */}
              <div className="w-full lg:w-3/5 justify-center mt-8 lg:mt-0">
                <ContactForm />
              </div>
              {/* End contact form */}
              {/* End contact address block */}
              {/* <div className="w-full lg:w-[40%] xl:w-[30%] space-y-6"> */}

              {/* End contact address block */}
            </div>
          </div>
          {/* Start Common Footer  */}
          <Footer />
          {/* End Common Footer  */}
        </div>
        {/* End fade effect */}
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
