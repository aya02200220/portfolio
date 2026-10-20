import Image from "next/image";
import { useState } from "react";
import Modal from "react-modal";
import { FiArrowUpRight, FiX } from "react-icons/fi";
import { IoLogoGithub } from "react-icons/io";
import portfolioData from "../../data/workDetail";
import { useLanguage } from "../context/LanguageContext";
import Reveal from "../Reveal";
import styles from "./Works.module.css";

Modal.setAppElement("#__next");

const CATEGORIES = ["All", "iOS app", "Web application", "Website", "E-commerce"];

const Works = () => {
  const { language } = useLanguage();
  const allWorks = portfolioData[language] || [];

  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState(null);

  const works =
    category === "All"
      ? allWorks
      : allWorks.filter((item) => item.tag === category);

  return (
    <>
      <Reveal as="ul" className={styles.filters}>
        {CATEGORIES.map((name) => (
          <li key={name}>
            <button
              type="button"
              className={category === name ? styles.active : ""}
              onClick={() => setCategory(name)}
            >
              {name}
            </button>
          </li>
        ))}
      </Reveal>

      <div className={styles.grid}>
        {works.map((item, i) => (
          <Reveal key={`${category}-${item.id}`} delay={(i % 3) * 90}>
            <button type="button" className={styles.card} onClick={() => setSelected(item)}>
              <div className={styles.thumb}>
                <Image src={item.imgSmall} width={640} height={480} alt={item.title} />
                <span className={styles.open} aria-hidden="true">
                  <FiArrowUpRight />
                </span>
              </div>
              <div className={styles.meta}>
                <span className={styles.tag}>{item.tag}</span>
                <h3>{item.title}</h3>
                <div className={styles.icons}>{item.icon}</div>
              </div>
            </button>
          </Reveal>
        ))}
      </div>

      <Modal
        isOpen={!!selected}
        onRequestClose={() => setSelected(null)}
        className={styles.modal}
        overlayClassName={styles.overlay}
        closeTimeoutMS={200}
      >
        {selected && (
          <div className={styles.sheet}>
            <button type="button" className={styles.close} onClick={() => setSelected(null)} aria-label="Close">
              <FiX />
            </button>

            <p className={styles.sheetTag}>{selected.tag}</p>
            <h3 className={styles.sheetTitle}>{selected.title}</h3>

            <div className={styles.links}>
              {selected.link && (
                <a href={selected.link} target="_blank" rel="noopener noreferrer" className={styles.primary}>
                  {selected.linkText}
                  <FiArrowUpRight />
                </a>
              )}
              {selected.gitlink && (
                <a href={selected.gitlink} target="_blank" rel="noopener noreferrer" className={styles.secondary}>
                  <IoLogoGithub />
                  GitHub
                </a>
              )}
            </div>

            <ul className={styles.stack}>
              {selected.languages.split(",").map((tech) => (
                <li key={tech}>{tech.trim()}</li>
              ))}
            </ul>

            <a href={selected.link} target="_blank" rel="noopener noreferrer" className={styles.hero}>
              <Image src={selected.img} width={1200} height={750} alt={selected.title} />
            </a>

            <p className={styles.description}>{selected.description}</p>

            {selected.description2?.map((part, index) => (
              <div key={index} className={`${styles.part} ${index % 2 ? styles.flip : ""}`}>
                <Image src={part.img} width={600} height={380} alt={part.title} loading="lazy" />
                <div>
                  <h4>{part.title}</h4>
                  <p>{part.content}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </Modal>
    </>
  );
};

export default Works;
