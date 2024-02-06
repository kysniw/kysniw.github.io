import { Element } from "react-scroll";
import styles from "./Projects.module.css";

const Projects = () => {
  return (
    <Element name="projects" className={styles.section}>
      <h1 className={styles.title}>My projects</h1>
    </Element>
  );
};

export default Projects;
