import { Element } from "react-scroll";
import styles from "./Projects.module.css";
import { projects } from "../lib/data";
import Project from "../components/Project";
import { useLangContext } from "../context/LangContext";

const text = {
  title: {
    pl: "Projekty",
    en: "Projects",
  },
};

const Projects = () => {
  const { lang } = useLangContext();
  return (
    <Element name="projects" className={styles.section}>
      <h1 className={styles.title}>{text.title[lang]}</h1>
      <div className={styles.container}>
        {projects.map((project) => (
          <Project key={project.name} project={project} />
        ))}
      </div>
    </Element>
  );
};

export default Projects;
