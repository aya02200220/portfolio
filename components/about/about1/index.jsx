import Image from "next/image";
import { useTheme } from "next-themes";
import { useLanguage } from "../../context/LanguageContext";
import Reveal from "../../Reveal";
import styles from "./About.module.css";

const COPY = {
  en: {
    lead: "Hello! I'm a software engineer based in Japan, building apps for iPhone, Android and the web.",
    body: [
      "I studied Web and Mobile App Development at a college in Vancouver, Canada, building modern applications with React.js and Node.js. Today I work as a systems engineer in Japan, developing Android (Jetpack Compose) and iOS (Swift) apps along with backend systems in Python, PHP, and SQL.",
      "Handling everything from requirements definition to development has laid the foundation for user-centric development. In the world of technology, learning never ends, so I keep picking up the tools that interest me.",
      "For me, coding is not just a job but also a joy, where I get to be creative and enjoy the process of trial and error.",
    ],
    facts: [
      ["Based in", "Japan"],
      ["Role", "Software Engineer"],
      ["Studied", "Vancouver, Canada"],
      ["Languages", "Japanese · English"],
    ],
    hobbiesTitle: "Off the clock",
    hobbies: ["Manga (shonen)", "Anime", "Watching games", "Sci-fi & suspense films", "Harry Potter", "Disney", "Cafe hopping", "Crab", "Sunshine", "Snowboarding", "New tech"],
    cv: "Download CV",
  },
  ja: {
    lead: "こんにちは！日本を拠点に、iPhone・Android・Web のアプリをつくっているソフトウェアエンジニアです。",
    body: [
      "カナダ・バンクーバーのカレッジでWeb・モバイルアプリ開発を専攻し、React.jsやNode.jsを使ったモダンなアプリケーション開発を学びました。現在は日本でSEとして、Jetpack Composeを使ったAndroidアプリやSwiftでのiOSアプリ、Python・PHP・SQLでのバックエンド開発に携わっています。",
      "要件定義から開発までを一貫して担当してきた経験は、ユーザー目線での開発に活かす基盤となっています。テクノロジーの世界では学びが終わることはありません。興味のある技術やツールに積極的に取り組んでいます。",
      "私にとってコーディングは単なる仕事ではなく、創造性を発揮しながら試行錯誤を重ねる楽しみでもあります。",
    ],
    facts: [
      ["拠点", "日本"],
      ["職種", "ソフトウェアエンジニア"],
      ["学んだ場所", "カナダ・バンクーバー"],
      ["言語", "日本語・英語"],
    ],
    hobbiesTitle: "好きなこと",
    hobbies: ["マンガ（少年漫画派）", "アニメ", "ゲーム（観る派）", "映画（SF・サスペンス・アクション）", "ハリポタ", "Disney", "カフェホッピング", "カニ", "太陽", "スノーボード", "テクノロジーの進化"],
    cv: "CV をダウンロード",
  },
};

const About = () => {
  const { resolvedTheme } = useTheme();
  const { language } = useLanguage();
  // Across this site, the "ja" state shows English text and "en" shows Japanese.
  const copy = language === "ja" ? COPY.en : COPY.ja;
  const isJa = copy === COPY.ja;

  return (
    <div className={`${styles.about} ${isJa ? styles.ja : ""}`}>
      <Reveal className={styles.photoCol}>
        <figure className={styles.photo}>
          <Image
            src={resolvedTheme === "dark" ? "/images/about/about.png" : "/images/about/about2.png"}
            width={480}
            height={560}
            alt="Aya Ishimura"
          />
          <figcaption>
            <i />
            aya_ishimura.jpg
          </figcaption>
        </figure>
        <a href="/images/AyaIshimura-CV.pdf" target="_blank" rel="noopener noreferrer" className={styles.cv}>
          {copy.cv}
          <span aria-hidden="true">↓</span>
        </a>
      </Reveal>

      <div className={styles.text}>
        <Reveal as="p" className={styles.lead} delay={80}>
          {copy.lead}
        </Reveal>
        {copy.body.map((para, i) => (
          <Reveal as="p" key={i} className={styles.body} delay={140 + i * 60}>
            {para}
          </Reveal>
        ))}

        <Reveal as="dl" className={styles.facts} delay={200}>
          {copy.facts.map(([label, value]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </Reveal>

        <Reveal className={styles.hobbies} delay={260}>
          <p>{copy.hobbiesTitle}</p>
          <ul>
            {copy.hobbies.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </div>
  );
};

export default About;
