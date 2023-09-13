import Home from "./home";
import About from "./about";
import Works from "./works";
import Blogs from "./blogs";
import Contact from "./contact";

const MainRoot = () => {
  return (
    <div>
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="works">
        <Works />
      </div>
      <div id="blogs">
        <Blogs />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default MainRoot;
