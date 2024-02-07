import { Element } from "react-scroll";
import styles from "./Education.module.css";
import { FaLocationPin } from "react-icons/fa6";

const Education = () => {
  return (
    <Element name="education" className={styles.section}>
      <div className={styles.education}>
        <div className={styles.educationSpace}>
          <div className={styles.educationBar}>
            <div className={styles.barHeader}>
              <h1>2022 - 2023</h1>
            </div>
            <div className={styles.barBody}>
              <p className={styles.headText}>
                Post-graduate studies with Angular and React.
              </p>
              <p className={styles.barLocation}>
                <FaLocationPin /> WSB Merito in Łódź
              </p>
            </div>
          </div>
        </div>
        <div className={styles.educationSpace}>
          <div className={styles.educationBar}>
            <div className={styles.barHeader}>
              <h1>2021 - 2022</h1>
            </div>
            <div className={styles.barBody}>
              <p className={styles.headText}>
                Master of Engineering degree in Applied Computer Science
              </p>
              <p className={styles.centerText}>
                Second-level studies in the discipline of Information And
                Communication Technology
              </p>
              <p className={styles.barLocation}>
                <FaLocationPin /> Politechnika Wrocławska in Wrocław
              </p>
            </div>
          </div>
        </div>
        <div className={styles.educationSpace}>
          <div className={styles.educationBar}>
            <div className={styles.barHeader}>
              <h1>2017 - 2021</h1>
            </div>
            <div className={styles.barBody}>
              <p className={styles.headText}>
                Engineering degree in Computer Science.
              </p>
              <p className={styles.centerText}>
                First-level studies in the discipline of Information And
                Communication Technology
              </p>
              <p className={styles.barLocation}>
                <FaLocationPin /> Politechnika Lubelska in Lublin
              </p>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Education;
