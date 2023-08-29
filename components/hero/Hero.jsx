import Image from "next/image";
import Social from "../social/Social";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import headerImg from "../../public/images/about/avatar.jpg";
import headerImg from "../../public/images/about/avatar2.svg";
// import headerImg from "../../public/images/about/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { Button, TypographyProps } from "@material-tailwind/react";

export const Hero = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
  const period = 2000;

  const fullPageStyle = {
    height: "75vh",
    overflowY: "hidden",
    paddingBottom: "100px",
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
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner w-screen" id="home">
      <Container style={fullPageStyle}>
        <Row className="flex align-items-center pt-32 lg:pt-9 ">
          <div className="flex-1 w-3/5">
            {" "}
            <div>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__fadeIn" : ""
                    }
                  >
                    <span className="tagline mt-10">
                      Welcome to my Portfolio
                    </span>
                    <h1 className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl">
                      {`Hi! I'm Aya`}{" "}
                      <span
                        className="txt-rotate"
                        // dataPeriod="1000"
                        data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'
                      >
                        <span className="wrap">{text}</span>
                      </span>
                    </h1>
                    <p>
                      Aya been the industry's standard dummy text ever since the
                      1500s, when an unknown printer took a galley of type and
                      scrambled it to make a type specimen book.
                    </p>
                    <Button
                      sx={{ position: "fixed" }}
                      onClick={() => console.log("connect")}
                    >
                      Let’s Connect <ArrowRightCircle size={25} />
                    </Button>
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
                    src={headerImg}
                    alt="Header Img"
                  />
                </div>
              )}
            </TrackVisibility>
          </div>
        </Row>
      </Container>
      {/* <div>
        Image by{" "}
        <a href="https://www.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_13223496.htm#query=nice%20background&position=0&from_view=keyword&track=ais">
          Freepik
        </a>
      </div> */}
    </section>
  );
};

export default Hero;

// const Hero = () => {
//   return (
//     <div
//       className="flex flex-col items-center h-[100vh] md:h-[90vh] lg:h-[80vh]  xl:h-[71vh]  justify-center"
//       data-aos="fade"
//     >
//       <Image
//         className="rounded-full w-[250px] h-[250px] 2xl:w-[280px] 2xl:h-[280px]"
//         src="/images/about/avatar.jpg"
//         width={250}
//         height={250}
//         priority
//         alt="hero image"
//       />
//       <h3 className="mt-6 mb-1 text-5xl font-semibold dark:text-white">
//         Aya Ishimura
//       </h3>
//       <p className="mb-4 text-[#7B7B7B]">Full Stack Developer</p>
//       {/* Avatar Info End */}

//       {/* Social information start */}
//       <div className="flex space-x-3">
//         <Social />
//       </div>
//       {/* Social information start */}

//       {/* Dowanload button start */}
//       <a
//         href="/images/cv.pdf"
//         download
//         className="flex items-center bg-gradient-to-r from-[#FA5252] to-[#DD2476] duration-200 transition ease-linear hover:bg-gradient-to-l from-[#DD2476]  to-[#fa5252ef] px-8 py-3 text-lg text-white rounded-[35px] mt-6"
//       >
//         <img src="/images/download.png" alt="icon" className="mr-2" />
//         Download CV
//       </a>

//       {/* Dowanload button End */}
//     </div>
//   );
// };
