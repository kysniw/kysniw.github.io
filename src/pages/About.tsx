import { Element } from "react-scroll";
import styles from "./About.module.css";

const About = () => {
  return (
    <Element name="about" className={styles.section}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>About me</h1>
        <p>Hi! I'm young and </p>
      </div>
      <div className={styles.imgContainer}></div>
    </Element>
  );
};

export default About;
