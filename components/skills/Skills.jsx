import frontend from "../../data/frontend";
import backend from "../../data/backend";
import mobile from "../../data/mobile";
import Reveal from "../Reveal";
import styles from "./Skills.module.css";

const groups = [
  { no: "01", title: "Mobile", note: "iOS · Android", items: mobile },
  { no: "02", title: "Frontend", note: "Web UI", items: frontend },
  { no: "03", title: "Backend", note: "APIs · Data", items: backend },
];

const Skills = () => (
  <div className={styles.skills}>
    <Reveal as="h3" className={styles.heading}>
      Skill set
    </Reveal>
    <div className={styles.grid}>
      {groups.map((group, i) => (
        <Reveal key={group.title} className={styles.panel} delay={i * 90}>
          <div className={styles.panelHead}>
            <b>{group.no}</b>
            <span>{group.title}</span>
            <small>{group.note}</small>
          </div>
          <ul>
            {group.items.map((item) => (
              <li key={item.id}>
                {item.icon}
                {item.title}
              </li>
            ))}
          </ul>
        </Reveal>
      ))}
    </div>
  </div>
);

export default Skills;
