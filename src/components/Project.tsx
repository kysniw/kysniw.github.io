import React from "react";
import styles from "./Project.module.css";
import { FaMobile, FaPlay } from "react-icons/fa6";
import {
  SiNextdotjs,
  SiTypescript,
  SiNextui,
  SiTailwindcss,
  SiDjango,
  SiSwagger,
  SiGithub,
  SiReact,
  SiCss3,
} from "react-icons/si";
import { ProjectProps } from "../lib/types";

const Project = ({ project }: { project: ProjectProps }) => {
  return (
    <div className={styles.project}>
      <img
        className={styles.img}
        src={project.image}
        alt={`${project.name} screenshot`}
        width={500}
        height={400}
      />
      <div className={styles.details}>
        <div className={styles.stackIcons}>
          {project.stack.includes("reactjs") && <SiReact />}
          {project.stack.includes("reactnative") && <FaMobile />}
          {project.stack.includes("nextjs") && <SiNextdotjs />}
          {project.stack.includes("typescript") && <SiTypescript />}
          {project.stack.includes("nextui") && <SiNextui />}
          {project.stack.includes("css") && <SiCss3 />}
          {project.stack.includes("tailwindcss") && <SiTailwindcss />}
          {project.stack.includes("django") && <SiDjango />}
          {project.stack.includes("swagger") && <SiSwagger />}
        </div>
        <h2 className={styles.name}>{project.name}</h2>
        <p className={styles.description}>{project.description}</p>
        <div className={styles.links}>
          <a
            className={styles.link}
            href={project.github}
            rel="noreferrer"
            target="_blank"
          >
            <SiGithub className={styles.icon} /> GitHub
          </a>
          {project.demo && (
            <a
              className={styles.link}
              href={project.demo}
              rel="noreferrer"
              target="_blank"
            >
              <FaPlay className={styles.icon} /> Live demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
