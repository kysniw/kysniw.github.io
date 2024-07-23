import React from "react";
import styles from "./EducationBar.module.css";
import { FaLocationPin } from "react-icons/fa6";
import { EducationBarProps } from "../lib/types";
import { useLangContext } from "../context/LangContext";
import InView from "./InView";

const EducationBar = ({
  educationBar,
}: {
  educationBar: EducationBarProps;
}) => {
  const { lang } = useLangContext();

  return (
    <InView
      className={styles.educationSpace}
      animationClass={styles.educationSpaceAnimation}
      animateSelf
    >
      <div className={styles.educationBar}>
        <div className={styles.barHeader}>
          <h1>{educationBar.period}</h1>
        </div>
        <div className={styles.barBody}>
          <p className={styles.headText}>{educationBar.headText[lang]}</p>
          {educationBar.centerText && (
            <p className={styles.centerText}>{educationBar.centerText[lang]}</p>
          )}
          <p className={styles.barLocation}>
            <FaLocationPin /> {educationBar.locationText[lang]}
          </p>
        </div>
      </div>
    </InView>
  );
};

export default EducationBar;
