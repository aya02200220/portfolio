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

      <div className="container lg:rounded-2xl bg-white dark:bg-[#333] ">
        <div data-aos="fade-up" data-aos-duration="900">
          <div className="py-12 px-5 md:px-10 lg:px-20">
            <h2 className="after-effect after:left-120 mb-0 md:mb-[40px] mt-12 lg:mt-0">
              Contact
            </h2>

            <div className="flex flex-col md:flex-row justify-center gap-4 space-y-6 md:space-y-0">
              <div className="order-1 md:order-2 w-full md:w-3/5 mt-8 lg:mt-0">
                <ContactForm />
              </div>

              <div className="order-2 md:order-1 w-full md:w-2/5 space-y-6">
                <SnsInfo />
                <Address />
              </div>
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
