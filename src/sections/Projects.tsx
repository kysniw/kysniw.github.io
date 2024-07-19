import { Element } from "react-scroll";
import styles from "./Projects.module.css";
import { projects } from "../lib/data";
import Project from "../components/Project";
import { useLangContext } from "../context/LangContext";
import InView from "../components/InView";

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
      <InView animationClass={styles.slideFromLeft}>
        <h1 className={styles.title}>{text.title[lang]}</h1>
      </InView>
      <div className={styles.container}>
        {projects.map((project) => (
          <Project key={project.name} project={project} />
        ))}
      </div>
    </Element>
  );
};

export default Projects;
