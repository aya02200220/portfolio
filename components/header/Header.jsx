import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import { useState, useEffect } from "react";
import HeaderMenu from "../../data/HeaderMenu";
import Image from "next/image";
import DarkMode from "../mode/DarkMode";
import DarkModeMobile from "../mode/DarkModeMobile";
import { isActiveLink } from "../../utilis/linkActiveChecker";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import { smoothScroll } from "../Scroll";
import SwitchLanguage from "../mode/SwitchLanguage";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleLinkClick = (e, targetID) => {
    e.preventDefault();
    smoothScroll(targetID.substring(1)); // "#"を取り除くためにsubstringを使用
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="px-5 fixed z-10">
        <header
          className={`flex justify-between items-center fixed top-0 left-0 right-0 transition-all duration-500 ${
            scrolled
              ? theme === "dark"
                ? "bg-opacity-70 bg-[#333]"
                : "bg-opacity-70 bg-[#fff]"
              : ""
          } `}
        >
          <div className=" flex justify-between w-full px-4 md:px-4 lg:px-5 bg-[#BF7581] lg:bg-transparent lg:dark:bg-transparent dark:bg-[#333333] ">
            <div className="flex justify-between w-full items-center space-x-4 my-2 lg:my-3 ">
              <Link className="text-5xl font-semibold " href="/">
                <Image
                  className="h-[28px] lg:h-[35px]"
                  width={95}
                  height={35}
                  priority
                  src={
                    theme === "dark"
                      ? "/images/logo/dark-logo.png"
                      : "/images/logo/logo.png"
                  }
                  alt="logo"
                />
              </Link>

              {/* start mobile menu toggle and mode btn */}
              <div className="flex items-center">
                <div className="lg:hidden">
                  <SwitchLanguage />
                </div>

                <DarkModeMobile />
                {!menuOpen ? (
                  <span
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="lg:opacity-0 lg:invisible visible opacity-100  bg-[#BA6F7B] w-[40px] h-[40px] rounded-full flex justify-center cursor-pointer items-center text-white dark:text-white text-3xl ml-3 "
                  >
                    <AiOutlineMenu />
                  </span>
                ) : (
                  <span
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="lg:opacity-0 cursor-pointer lg:invisible visible opacity-100  bg-[#BA6F7B] w-[40px] h-[40px] rounded-full flex justify-center items-center text-white text-3xl ml-3  "
                  >
                    <AiOutlineClose />
                  </span>
                )}
              </div>
              {/* End mobile menu toggle and mode btn */}
            </div>
          </div>
          {/* End flex */}

          {/* mobile nav menu start */}
          <nav
            className={`mdr-0 lg:mr-10 ${
              menuOpen ? "block  dark:bg-[#333333]" : "hidden lg:block"
            } `}
          >
            {/* Menu items start  */}

            <ul
              className={`${
                menuOpen
                  ? "block lg:hidden  absolute left-0 rounded-b-[20px] top-14 w-full bg-white dark:bg-[#212425] drop-shadow-lg py-4 "
                  : "flex my-0 "
              }`}
            >
              {HeaderMenu.map((item) => (
                <li key={item.id} className="mb-1">
                  <Link
                    className={`${
                      isActiveLink(item.routePath, router.asPath)
                        ? "rounded-md  cursor-pointer font-poppins bg-white text-gray-lite font-medium mx-2.5 flex text-xtiny py-2.5 px-2 md:px-4 xl:px-5 items-center transition-all duration-300 ease-in-out dark:hover:text-white dark:bg-[#212425] hover:text-white hover:bg-gradient-to-r from-[#E7A3AB] to-[#BF7581] dark:text-[#A6A6A6] linked bg-gradient-to-r "
                        : "px-2 rounded-md  cursor-pointer font-poppins bg-[rgba(255,255,255,0.7)] text-gray-lite font-medium mx-2.5 flex text-xtiny py-2.5 md:px-4 xl:px-5 items-center transition-all duration-300 ease-in-out dark:hover:text-white dark:bg-[#212425] hover:text-white hover:bg-gradient-to-r from-[#E7A3AB] to-[#BF7581] dark:text-[#A6A6A6]"
                    } `}
                    href={item.routePath}
                    onClick={(e) => handleLinkClick(e, item.routePath)}
                  >
                    <span className="mr-2 text-xl">{item.icon}</span>
                    {item.name}
                  </Link>
                </li>
              ))}
              {/* light dark mode button start */}
              <div className="flex flex-row w-[90px] items-center">
                <div className="hidden lg:block ">
                  <SwitchLanguage />
                </div>
                <DarkMode />
              </div>
            </ul>
          </nav>
        </header>
      </div>
    </div>
  );
};

export default Header;
