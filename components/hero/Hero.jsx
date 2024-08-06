import Image from "next/image";
import Link from "next/link";

import Social from "../social/Social";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import lightHeaderImg from "../../public/images/about/avatar3.png";
import darkHeaderImg from "../../public/images/about/avatar2.png";

import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { Button, TypographyProps } from "@material-tailwind/react";
import { useTheme } from "next-themes";
import { smoothScroll } from "../Scroll";

import { useLanguage } from "../context/LanguageContext";

export const Hero = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["A Full-Stack Developer.", "Based in Vancouver."];
  const period = 1000;
  const { theme, setTheme } = useTheme();
  const { language } = useLanguage();

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

  const fullPageStyle = {
    height: "100vh",
    overflowY: "hidden",
    paddingBottom: "50px",
  };

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(100);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner z-0" id="home">
      <Container
        style={fullPageStyle}
        className=" pt-[100px] lg:pt-[150px] pl-10 "
      >
        <Row className="flex align-items-center lg:pt-9 lg:h-full ">
          <div className="flex-1 w-3/5 relative ">
            {" "}
            <div>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__fadeIn" : ""
                    }
                  >
                    <span
                      className={`text-tiny md:text-lg lg:text-xl tagline ${
                        theme === "dark" ? "text-[#FEFAFE]" : "text-[#2B2B2B]"
                      } `}
                    >
                      Welcome to my Portfolio
                    </span>

                    {/* {language === "ja" ? ():()} */}
                    <h1
                      className={`text-6xl md:text-8xl lg:text-9xl md:h-[140px] lg:h-[195px] ${
                        theme === "dark" ? "text-[#fbf7fb]" : "text-[#2B2B2B]"
                      }`}
                    >
                      {`Hi! I'm Aya`}
                      <br />

                      <span
                        className="txt-rotate"
                        // dataPeriod="1000"
                        data-rotate='[ "A Full-Stack Developer", "Based in Vancouver, BC." ]'
                      >
                        <span className="wrap">{text}</span>
                      </span>
                    </h1>

                    {language === "ja" ? (
                      <p
                        className={
                          theme === "dark"
                            ? "text-[#777777] text-[18px]"
                            : "text-[#676262] text-[18px]"
                        }
                      >
                        Feel free to reach out if you want to discuss
                        technology, collaboration, or just a chat over coffee.
                        My inbox is always open!
                      </p>
                    ) : (
                      <p
                        className={
                          theme === "dark"
                            ? "text-[#777777] text-[17px]"
                            : "text-[#676262] text-[17px]"
                        }
                      >
                        技術について話し合いたい、コラボレーションについて相談したい、あるいはただコーヒーを飲みながらおしゃべりしたい場合は、いつでもご連絡ください。
                        私のメールボックスは常に開いています！
                      </p>
                    )}

                    {/* Connect */}
                    <div className="flex flex-col md:flex-row items-center mt-4 gap-8">
                      <Link href="#contact">
                        <Button
                          onClick={(e) => handleLinkClick(e, "#contact")}
                          className="flex items-center bg-gradient-to-r from-[rgba(250,82,82,0.5)] to-[rgba(221,36,118,0.5)] duration-500 transition ease-linear hover:bg-gradient-to-l from-[rgba(221,36,118,0.5)] to-[rgba(250,82,82,0.5)] px-8 py-3 text-white rounded-[35px] text-tiny md:text-lg lg:text-xl"
                        >
                          Let’s Connect <ArrowRightCircle size={25} />
                        </Button>
                      </Link>
                      <div className="flex space-x-3">
                        <Social />
                      </div>
                      {/* End Connect */}
                    </div>
                  </div>
                )}
              </TrackVisibility>
            </div>
          </div>
          <div className=" w-2/5">
            {" "}
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <Image
                    className="img mr-0"
                    src={theme === "dark" ? darkHeaderImg : lightHeaderImg}
                    alt="Header Img"
                  />
                </div>
              )}
            </TrackVisibility>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
