import Image from "next/image";
import { useState } from "react";
import Modal from "react-modal";
import { FiArrowUpRight, FiX } from "react-icons/fi";
import blogsData from "../../data/blogsData";
import { useLanguage } from "../context/LanguageContext";
import Reveal from "../Reveal";
import sheet from "../works/Works.module.css";
import styles from "./Blog.module.css";

const Blog = () => {
  const { language } = useLanguage();
  const posts = blogsData[language] || [];
  const [selected, setSelected] = useState(null);

  return (
    <>
      <div className={styles.grid}>
        {posts.map((post, i) => (
          <Reveal key={post.id} delay={(i % 3) * 90}>
            <button type="button" className={styles.card} onClick={() => setSelected(post)}>
              <div className={styles.thumb}>
                <Image src={post.imgSmall} width={620} height={400} alt={post.title} />
              </div>
              <div className={styles.meta}>
                <p className={styles.date}>
                  {post.date}
                  {post.category && <span>{post.category}</span>}
                </p>
                <h3>{post.title}</h3>
                <p className={styles.excerpt}>{post.description}</p>
                <span className={styles.more}>
                  Read <FiArrowUpRight />
                </span>
              </div>
            </button>
          </Reveal>
        ))}
      </div>

      <Modal
        isOpen={!!selected}
        onRequestClose={() => setSelected(null)}
        className={sheet.modal}
        overlayClassName={sheet.overlay}
        closeTimeoutMS={200}
      >
        {selected && (
          <div className={sheet.sheet}>
            <button type="button" className={sheet.close} onClick={() => setSelected(null)} aria-label="Close">
              <FiX />
            </button>
            <p className={sheet.sheetTag}>{selected.date}</p>
            <h3 className={sheet.sheetTitle}>{selected.title}</h3>
            <div className={sheet.hero}>
              <Image src={selected.img} width={1200} height={680} alt={selected.title} />
            </div>
            <p className={sheet.description}>{selected.description}</p>
            <div className={sheet.links}>
              <a href={selected.link} target="_blank" rel="noopener noreferrer" className={sheet.primary}>
                Read on DEV
                <FiArrowUpRight />
              </a>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
};

export default Blog;
