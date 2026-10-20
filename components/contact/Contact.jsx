import { useState } from "react";
import { FiArrowUpRight, FiCopy, FiCheck, FiMapPin } from "react-icons/fi";
import snsData from "../../data/snsData";
import { useLanguage } from "../context/LanguageContext";
import Reveal from "../Reveal";
import styles from "./Contact.module.css";

const EMAIL = "aya.dev.canada@gmail.com";

const COPY = {
  en: {
    lead: "Want to talk about tech, a project, or just grab a coffee? My inbox is always open.",
    mail: "Send an email",
    copy: "Copy",
    copied: "Copied",
    elsewhere: "Elsewhere",
    location: "Based in Japan",
  },
  ja: {
    lead: "技術の話、お仕事のご相談、ちょっとしたおしゃべりまで。メールはいつでも開いています。",
    mail: "メールを送る",
    copy: "コピー",
    copied: "コピーしました",
    elsewhere: "SNS",
    location: "日本を拠点に活動中",
  },
};

const Contact = () => {
  const { language } = useLanguage();
  // Across this site, the "ja" state shows English text and "en" shows Japanese.
  const copy = language === "ja" ? COPY.en : COPY.ja;
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <div className={`${styles.contact} ${copy === COPY.ja ? styles.ja : ""}`}>
      <Reveal className={styles.main}>
        <p className={styles.lead}>{copy.lead}</p>
        <div className={styles.mailRow}>
          <a href={`mailto:${EMAIL}`} className={styles.email}>
            {EMAIL}
          </a>
          <button type="button" className={styles.copy} onClick={copyEmail}>
            {copied ? <FiCheck /> : <FiCopy />}
            {copied ? copy.copied : copy.copy}
          </button>
        </div>
        <a href={`mailto:${EMAIL}`} className={styles.cta}>
          {copy.mail}
          <FiArrowUpRight />
        </a>
        <p className={styles.location}>
          <FiMapPin />
          {copy.location}
        </p>
      </Reveal>

      <Reveal className={styles.side} delay={120}>
        <p className={styles.sideTitle}>{copy.elsewhere}</p>
        <ul>
          {snsData.map((item) => (
            <li key={item.id}>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <span className={styles.icon}>{item.icon}</span>
                <span className={styles.name}>
                  {item.name}
                  <small>{item.handle}</small>
                </span>
                <FiArrowUpRight className={styles.arrow} />
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  );
};

export default Contact;
