import Image from "next/image";
import {
  FiUser,
  FiCode,
  FiFilePlus,
  FiExternalLink,
  // IoLogoGithub,
} from "react-icons/fi";
import { IoLogoGithub } from "react-icons/io";

import { BsXCircle } from "react-icons/bs";
import Masonry from "react-masonry-css";
import Modal from "react-modal";
import portfolioData from "../../data/worksData";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Github } from "react-bootstrap-icons";

Modal.setAppElement("#__next");

const Works1 = () => {
  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    600: 1,
  };

  // start dynamic portfolio with slug
  const [singleData, setSingleData] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const handlePortfolioData = (id) => {
    const find = portfolioData.find((item) => item?.id === id);
    setSingleData(find);
    setIsOpen(true);
  };

  const handleModal = (id) => {
    handlePortfolioData(id);
  };
  // End dynamic portfolio with slug

  // start filter data based on function
  const [category, setCategory] = useState("All");

  const handleSearch = (text) => {
    handleData(text);
    setCategory(text);
  };
  useEffect(() => {
    setCategory("All");
    handleData("All");
  }, []);

  const [data, setData] = useState(portfolioData);

  // fillter portfilo data
  const handleData = (text) => {
    if (text === "All") {
      setData(portfolioData);
    } else {
      const findData = portfolioData.filter((item) => item.tag === text);
      setData(findData);
    }
  };

  return (
    <>
      {/* Portfilo fillter tab start */}
      <ul className="mt-[0px] flex w-full justify-start md:justify-end flex-wrap font-medium pb-6">
        <li
          className={`${
            category === "All" ? "text-[#d54b87]" : "filter-btn "
          } mr-4 md:mx-4`}
          onClick={() => handleSearch("All")}
        >
          All
        </li>
        <li
          className={`${
            category === "Web application" ? "text-[#d54b87]" : "filter-btn"
          } mr-4 md:mx-4`}
          onClick={() => handleSearch("Web application")}
        >
          Web application
        </li>
        <li
          className={`${
            category === "Website" ? "text-[#d54b87]" : "filter-btn"
          } mr-4 md:mx-4`}
          onClick={() => handleSearch("Website")}
        >
          Website
        </li>
        <li
          className={`${
            category === "E-commerce" ? "text-[#d54b87]" : "filter-btn ml-0"
          } mr-4 md:mx-4`}
          onClick={() => handleSearch("E-commerce")}
        >
          E-commerce
        </li>
      </ul>
      {/* End portfolio filter tab */}

      {/* Start portfolio items */}
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {data.map((item) => (
          <div
            className="rounded-lg p-6 dark:border-[2px] border-[#212425]"
            style={{
              background: `${theme === "dark" ? "transparent" : item?.bg}`,
            }}
            key={item.id}
            onClick={() => handleModal(item?.id)}
          >
            <div className="overflow-hidden rounded-lg">
              <Image
                className="w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-[266px] object-cover" // h-[300px] object-cover を追加
                src={item.imgSmall}
                width={310}
                height={266}
                priority
                alt="portfolio Image"
              />
            </div>
            <span className="pt-5 text-[14px] font-normal text-gray-lite block dark:text-[#A6A6A6]">
              {item.tag}
            </span>
            <h2 className="font-medium cursor-pointer text-xl duration-300 transition hover:text-[#d54b87] dark:hover:text-[#d54b87] dark:text-white mt-2">
              {item.title}
            </h2>
          </div>
        ))}
      </Masonry>
      {/* End portfolio items */}

      {/* Start Modal for portfolio items */}

      {/* モーダルの内容 */}

      <div className="fixed z-50">
        <Modal
          isOpen={isOpen}
          onRequestClose={() => setIsOpen(false)}
          className=" outline-none flex items-center  p-4 md:p-8  rounded-2xl my-8"
        >
          {/* <div className=" w-full md:w-10/12 flex items-center   lg:w-[850px] bg-white dark:bg-[#323232] mx-auto rounded-xl p-4 md:p-8 absolute left-1/2 top-1/2 transform -translate-x-[50%] -translate-y-[50%] shadow-lg "> */}
          <div className="w-full md:w-10/12 flex items-center lg:w-[850px] bg-white dark:bg-[#323232] mx-auto rounded-xl p-4 md:p-8 absolute left-1/2 top-1/2 md:top-1/2 lg:top-1/2 transform -translate-x-[50%] -translate-y-[50%] md:-translate-y-[50%] lg:-translate-y-[50%] shadow-lg mt-10 lg:mt-0">
            <div className=" overflow-y-scroll max-h-[70vh] lg:max-h-[80vh] no-scrollbar">
              {/* close button */}
              <BsXCircle
                onClick={() => setIsOpen(false)}
                className="text-7xl cursor-pointer  absolute right-2 -top-12 md:-right-10 md:-top-8 z-50  text-white transition transform hover:rotate-45 duration-300 ease-in-out "
              />
              {/* <h2 className="text-[#ef4060] dark:hover:text-[#d54b87] text-4xl text-center font-bold">
                {singleData.tag} Project
              </h2> */}

              <div className="grid grid-cols-1 lg:grid-cols-2 my-6">
                <div className="space-y-2">
                  <p className="dark:text-white flex items-center text-[15px]  sm:text-lg ">
                    <FiFilePlus className="sm:text-lg hidden sm:block mr-2  md:text-xl" />
                    Project :&nbsp;{" "}
                    <span className="font-medium "> Website</span>
                  </p>
                  <p className="dark:text-white flex items-center text-[15px]  sm:text-lg ">
                    <FiCode className="text-lg mr-2 hidden sm:block " />
                    {/* Languages :&nbsp; */}
                    <span className="font-medium ">
                      {singleData?.languages}
                    </span>
                  </p>
                </div>

                <div className="space-y-2">
                  <p className="dark:text-white flex items-center mt-2 lg:mt-0 text-[15px]  sm:text-lg ">
                    <IoLogoGithub className="text-lg mr-2 hidden sm:block" />
                    {/* Preview :&nbsp; */}
                    <span className="font-medium transition-all duration-300 ease-in-out hover:text-[#ef4060] ">
                      <a
                        href={singleData?.gitlink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {"Github"}
                      </a>
                    </span>
                  </p>
                  <p className="dark:text-white flex items-center text-[15px] sm:text-lg ">
                    <FiExternalLink className="text-lg mr-2 hidden sm:block" />
                    Website :&nbsp;
                    <span className="font-medium transition-all duration-300 ease-in-out hover:text-[#ef4060] ">
                      <a
                        href={singleData?.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {singleData?.linkText}
                      </a>
                    </span>
                  </p>
                </div>
              </div>

              <p
                className="dark:text-white  text-2line font-normal text-[15px] sm:text-sm"
                style={{ whiteSpace: "pre-line" }}
              >
                {singleData?.description}
              </p>
              <a
                href={singleData?.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="w-full md:h-[450px]  h-auto object-cover rounded-xl mt-6"
                  src={singleData?.img}
                  alt="blog details image"
                  width={620}
                  height={420}
                  loading="lazy"
                />
              </a>
            </div>
          </div>
        </Modal>
      </div>
      {/* End Modal for portfolio items */}
    </>
  );
};

export default Works1;
