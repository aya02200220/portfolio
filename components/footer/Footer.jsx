import { smoothScroll } from "../Scroll";
import styles from "./Footer.module.css";

const Footer = () => {
  const toTop = (e) => {
    e.preventDefault();
    smoothScroll("home");
  };

  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Aya Ishimura</p>
      <a href="#home" onClick={toTop}>
        Back to top <span aria-hidden="true">↑</span>
      </a>
    </footer>
  );
};

export default Footer;
