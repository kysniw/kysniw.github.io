import { Element } from "react-scroll";
import styles from "./Home.module.css";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

import {
  SiDjango,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { useLangContext } from "../context/LangContext";

const text = {
  title: {
    pl: "Cześć! Jestem",
    en: "Hello! I'm",
  },
  download: {
    pl: "Pobierz CV",
    en: "Download CV",
  },
};

const Home = () => {
  // console.log(navigator.language);
  const { lang } = useLangContext();

  return (
    <Element name="home" className={styles.section}>
      <div className={styles.home}>
        <div className={styles.imgContainer}>
          <img
            className={styles.img}
            src="./portfolio_2_sm.webp"
            width={600}
            height={1010}
            alt="My main portrait"
          />
          <div className={styles.imgBar}>
            <SiReact className={styles.reactIcon} />
            <SiTypescript className={styles.tsIcon} />
            <SiNextdotjs className={styles.nextIcon} />
            <SiTailwindcss className={styles.tailwindIcon} />
            <SiDjango />
          </div>
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{text.title[lang]}</h1>
          <h3 className={styles.fullName}>Jakub Winsyk</h3>
          <h2 className={styles.profession}>Fullstack Developer</h2>
          <a
            className={styles.download}
            href={`./jw_cv_${lang}.pdf`}
            rel="noreferrer"
            target="_blank"
          >
            {text.download[lang]}
          </a>
          <div className={styles.socialMedia}>
            <a
              href="https://www.facebook.com/kysniw"
              rel="noreferrer"
              target="_blank"
              className={`${styles.mediaIcon} ${styles.fbIcon}`}
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/kysniw"
              rel="noreferrer"
              target="_blank"
              className={`${styles.mediaIcon} ${styles.instaIcon}`}
            >
              <FaInstagram />
            </a>
            <a
              href="https://github.com/kysniw"
              rel="noreferrer"
              target="_blank"
              className={`${styles.mediaIcon} ${styles.githubIcon}`}
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/jakub-winsyk/"
              rel="noreferrer"
              target="_blank"
              className={`${styles.mediaIcon} ${styles.linkedIcon}`}
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Home;
