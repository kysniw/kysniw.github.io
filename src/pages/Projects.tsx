import { Element } from "react-scroll";
import styles from "./Projects.module.css";
import { projects } from "../lib/data";
import Project from "../components/Project";

const Projects = () => {
  return (
    <Element name="projects" className={styles.section}>
      <h1 className={styles.title}>Projects</h1>
      <div className={styles.container}>
        {projects.map((project) => (
          <Project key={project.name} project={project} />
        ))}
      </div>
    </Element>
  );
};

export default Projects;
