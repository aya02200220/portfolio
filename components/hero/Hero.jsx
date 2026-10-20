import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import Social from "../social/Social";
import SkillSphere from "./SkillSphere";
import { smoothScroll } from "../Scroll";
import { useLanguage } from "../context/LanguageContext";
import styles from "./Hero.module.css";

const COPY = {
  en: {
    eyebrow: "Software Engineer · Japan",
    hello: ["Hi, I'm Aya."],
    lead: "I build",
    words: ["iPhone apps.", "Android apps.", "web apps.", "backend systems."],
    body: "I design and build apps for iPhone, Android and the web, from the first idea all the way to the App Store.",
    works: "View works",
    cv: "Download CV",
  },
  ja: {
    eyebrow: "Software Engineer · Japan",
    hello: ["こんにちは、", "Aya です。"],
    lead: "つくっているのは、",
    words: ["iPhone アプリ。", "Android アプリ。", "Web アプリ。", "バックエンド。"],
    body: "日本で働くソフトウェアエンジニアです。iPhone・Android・Web のアプリを、アイデアから App Store に届けるまで、ひとつずつ手でつくっています。",
    works: "作品を見る",
    cv: "CV をダウンロード",
  },
};

const STEPS = [
  ["01", "Mobile", "Swift · Compose"],
  ["02", "Web", "React · Next.js"],
  ["03", "Backend", "Laravel · Python"],
  ["04", "Ship", "App Store"],
];

const STATS = [
  ["Location", "Japan"],
  ["Role", "Software Eng."],
  ["Live apps", 1],
  ["In progress", 2],
];

const CountUp = ({ to }) => {
  const [n, setN] = useState(0);
  useEffect(() => {
    let frame;
    const start = performance.now();
    const step = (now) => {
      const t = Math.min((now - start) / 1200, 1);
      setN(Math.round(to * (1 - Math.pow(1 - t, 3))));
      if (t < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [to]);
  return n;
};

export const Hero = () => {
  const { resolvedTheme } = useTheme();
  const { language } = useLanguage();
  // Across this site, the "ja" state shows English text and "en" shows Japanese.
  const copy = language === "ja" ? COPY.en : COPY.ja;
  const dark = resolvedTheme === "dark";

  const [wordIndex, setWordIndex] = useState(0);
  const [step, setStep] = useState(0);
  const heroRef = useRef(null);

  useEffect(() => {
    const words = setInterval(
      () => setWordIndex((i) => (i + 1) % copy.words.length),
      2200
    );
    const steps = setInterval(() => setStep((i) => (i + 1) % STEPS.length), 1600);
    return () => {
      clearInterval(words);
      clearInterval(steps);
    };
  }, [copy.words.length]);

  useEffect(() => {
    const el = heroRef.current;
    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      el.style.setProperty("--gx", `${((e.clientX - rect.left) / rect.width) * 100}%`);
      el.style.setProperty("--gy", `${((e.clientY - rect.top) / rect.height) * 100}%`);
    };
    el.addEventListener("pointermove", onMove);
    return () => el.removeEventListener("pointermove", onMove);
  }, []);

  const goTo = (e, id) => {
    e.preventDefault();
    smoothScroll(id);
  };

  return (
    <section
      ref={heroRef}
      className={`${styles.hero} ${copy === COPY.ja ? styles.ja : ""}`}
      id="home"
    >
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.grid} aria-hidden="true" />

      <div className={styles.sphere}>
        <SkillSphere dark={dark} />
      </div>

      <div className={`${styles.hud} ${styles.hudSteps}`} aria-hidden="true">
        <p className={styles.hudFile}>
          <i />
          aya.dev
        </p>
        <ol>
          {STEPS.map(([no, name, detail], i) => (
            <li key={no} className={i === step ? styles.on : ""}>
              <b>{no}</b>
              <span>{name}</span>
              <small>{detail}</small>
            </li>
          ))}
        </ol>
      </div>

      <div className={`${styles.hud} ${styles.hudStats}`} aria-hidden="true">
        <p className={styles.hudTitle}>Status</p>
        <dl>
          {STATS.map(([label, value]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{typeof value === "number" ? <CountUp to={value} /> : value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className={styles.copy}>
        <p className={styles.eyebrow}>
          <i />
          {copy.eyebrow}
        </p>
        <h1 className={styles.title}>
          <span className={styles.line}>
            {copy.hello.map((part) => (
              <span key={part} className={styles.nb}>
                {part}
              </span>
            ))}
          </span>
          <span className={styles.line}>{copy.lead}</span>
          <span className={styles.rotator}>
            <span key={`${language}-${wordIndex}`} className={styles.word}>
              {copy.words[wordIndex]}
            </span>
          </span>
        </h1>
        <p className={styles.body}>{copy.body}</p>

        <div className={styles.actions}>
          <a href="#works" onClick={(e) => goTo(e, "works")} className={styles.primary}>
            {copy.works}
            <span aria-hidden="true">→</span>
          </a>
          <a href="/images/AyaIshimura-CV.pdf" target="_blank" rel="noopener noreferrer" className={styles.secondary}>
            {copy.cv}
          </a>
          <div className={styles.social}>
            <Social />
          </div>
        </div>
      </div>

      <a href="#about" onClick={(e) => goTo(e, "about")} className={styles.cue}>
        <i />
        Scroll
      </a>
    </section>
  );
};

export default Hero;
