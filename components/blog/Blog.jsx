import { BsXCircle } from "react-icons/bs";
import Modal from "react-modal";
import blogsData from "../../data/blogsData";
import Image from "next/image";
import { useState } from "react";
import Social from "../social/Social";
import CommentBox from "./CommentBox";
import { useTheme } from "next-themes";
import Comments from "./Comments";

import { BiLinkExternal, BiLogoDevTo } from "react-icons/bi";

const Blog = () => {
  const [singleData, setSingleData] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleBlogsData = (id) => {
    const find = blogsData.find((item) => item?.id === id);
    setSingleData(find);
    setIsOpen(true);
  };

  const handleModal = (id) => {
    handleBlogsData(id);
  };

  const blogDescriptionSplit = singleData?.description?.split("\n");

  return (
    <div className="grid gap-x-10 gap-y-7 mb-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-[40px]">
      {blogsData.map((item) => {
        return (
          <div
            data-aos="flip-left"
            data-aos-duration="1000"
            className="rounded-lg"
          >
            <div
              key={item.id}
              style={{
                background: `${theme === "dark" ? "#212425" : item?.bg}`,
              }}
              className="p-5 rounded-lg mb-2 h-full dark:border-[#212425] dark:border-2"
            >
              <div className="overflow-hidden rounded-lg">
                <Image
                  onClick={() => handleModal(item?.id)}
                  className="rounded-lg w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 h-[200px] object-cover"
                  src={item?.imgSmall}
                  alt="blog"
                  width={310}
                  height={200}
                />
              </div>
              <div className="flex mt-4 text-tiny text-gray-lite dark:text-[#A6A6A6]">
                <span>{item?.date}</span>
                <span className="pl-6 relative after:absolute after:h-1 after:w-1 after:bg-gray-lite after:rounded-full after:left-2 after:top-[50%] transform after:-translate-y-1/2">
                  {item?.category}
                </span>
              </div>
              <h3
                // onClick={() => setIsOpen(true)}
                onClick={() => handleModal(item?.id)}
                className="text-lg font-medium dark:text-white duration-300 transition cursor-pointer mt-3 pr-4 hover:text-[#ef4060] dark:hover:text-[#ef4060]"
              >
                {item?.title}
              </h3>
            </div>
          </div>
        );
      })}

      {/* Blog modal start  */}
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        className="outline-none flex items-center p-4 md:p-8  rounded-2xl my-8 "
      >
        <div className=" w-full md:w-10/12 flex items-center lg:w-[850px] bg-white dark:bg-[#323232] mx-auto rounded-xl p-4 md:p-8 absolute left-1/2 top-1/2 transform -translate-x-[50%]  -translate-y-[45%] md:-translate-y-[50%] shadow-lg xs:mt-30 sm:mt-10 lg:mt-5">
          <div className="scrollbarLight overflow-y-scroll max-h-[80vh]">
            {/* <div className="pr-3 pb-2"> */}
            <BsXCircle
              onClick={() => setIsOpen(false)}
              className="text-7xl cursor-pointer  absolute right-2 top-1 md:top-22 md:-right-12 md:-top-0  text-[#333] md:text-white transition transform hover:rotate-45 duration-300 ease-in-out "
            />
            <Image
              className=" w-full md:h-[450px]  object-cover rounded-xl mt-6"
              src={singleData?.img}
              alt="blog"
              width={700}
              height={400}
              loading="lazy"
            />
            <div className="flex mt-4 text-tiny text-black dark:text-white">
              <span>{singleData?.date}</span>
              {/* <span className="pl-6 relative after:absolute after:h-1 after:w-1 after:bg-gray-lite after:rounded-full after:left-2 after:top-[50%] transform after:-translate-y-1/2">
                  {singleData?.category}
                </span> */}
            </div>
            <h2 className="dark:text-white sm:text-3xl mt-2 font-medium">
              {singleData?.title}
            </h2>
            {blogDescriptionSplit?.map((item, j) => (
              <p
                className="dark:text-white font-normal text-[15px] sm:text-sm my-4"
                key={j}
              >
                {item}
              </p>
            ))}{" "}
            <p className="flex items-center justify-center">
              <div className="text-[40px]">
                {" "}
                <BiLogoDevTo />
              </div>
              <button className=" text-md font-medium dark:text-white duration-300 transition cursor-pointer px-2 py-1 hover:text-[#fff] dark:hover:text-[#fff] bg-[#BF7581] rounded">
                {" "}
                <a
                  href={singleData?.link}
                  target="_blank"
                  className="flex items-center"
                >
                  READ MORE <BiLinkExternal style={{ marginLeft: "5px" }} />
                </a>
              </button>
            </p>
            {/* </div> */}
          </div>
        </div>
      </Modal>
      {/* Blog modal End  */}
    </div>
  );
};

export default Blog;
