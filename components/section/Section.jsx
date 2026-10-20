import Reveal from "../Reveal";
import styles from "./Section.module.css";

// Shared frame for each page section: a mono kicker, a big title and the content.
const Section = ({ id, index, kicker, title, accent, lead, children }) => (
  <section id={id} className={styles.section}>
    <div className={styles.wrap}>
      <Reveal className={styles.head}>
        <p className={styles.kicker}>
          <b>{index}</b>
          <i />
          {kicker}
        </p>
        <h2 className={styles.title}>
          {title} {accent && <em>{accent}</em>}
        </h2>
        {lead && <p className={styles.lead}>{lead}</p>}
      </Reveal>
      {children}
    </div>
  </section>
);

export default Section;
