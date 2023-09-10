import Image from "next/image";
import Link from "next/link";

// import Social from "../social/Social";
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
  const toRotate = ["A Full-Stack Developer.", "Based in Vancouver."];
  const period = 1000;

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
      setDelta(100);
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
                    <span className="tagline mt-10 text-[#2B2B2B]">
                      Welcome to my Portfolio
                    </span>
                    <h1 className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl text-[#2B2B2B]">
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
                    <p>
                      Feel free to reach out if you want to discuss technology,
                      collaboration, or just a chat over coffee. My inbox is
                      always open!
                    </p>
                    <Link href="/contact">
                      <Button
                        sx={{ position: "fixed" }}
                        onClick={() => console.log("connect")}
                        className="flex items-center bg-gradient-to-r from-[rgba(250,82,82,0.5)] to-[rgba(221,36,118,0.5)] duration-200 transition ease-linear hover:bg-gradient-to-l from-[rgba(221,36,118,0.5)] to-[rgba(250,82,82,0.5)] px-8 py-3 text-lg text-white rounded-[35px] mt-6"
                      >
                        Let’s Connect <ArrowRightCircle size={25} />
                      </Button>
                    </Link>
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
    </section>
  );
};

export default Hero;
