import { Element } from "react-scroll";
import styles from "./Education.module.css";

import { educationBars } from "../lib/data";
import EducationBar from "../components/EducationBar";

const Education = () => {
  return (
    <Element name="education" className={styles.section}>
      {educationBars.map((educationBar) => (
        <EducationBar key={educationBar.period} educationBar={educationBar} />
      ))}
    </Element>
  );
};

export default Education;
