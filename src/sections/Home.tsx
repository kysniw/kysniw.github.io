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
import InView from "../components/InView";

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
          <InView animationClass={styles.fromBlur}>
            <img
              className={styles.img}
              src="./portfolio_2_sm.webp"
              width={600}
              height={1010}
              alt="My main portrait"
            />
          </InView>
          <div className={styles.imgBar}>
            <SiReact className={`${styles.icon} ${styles.reactIcon}`} />
            <SiTypescript
              className={`${styles.icon} ${styles.tsIcon}`}
              style={{ animationDelay: "2s" }}
            />
            <SiNextdotjs
              className={`${styles.icon} ${styles.nextIcon}`}
              style={{ animationDelay: "4s" }}
            />
            <SiTailwindcss
              className={`${styles.icon} ${styles.tailwindIcon}`}
              style={{ animationDelay: "6s" }}
            />
            <SiDjango
              className={styles.icon}
              style={{ animationDelay: "8s" }}
            />
          </div>
        </div>
        <div className={styles.textContainer}>
          <InView animationClass={styles.titleAnimation}>
            <h1 className={styles.title}>{text.title[lang]}</h1>
          </InView>
          <InView animationClass={styles.fullNameAnimation}>
            <h3 className={styles.fullName}>Jakub Winsyk</h3>
          </InView>
          <InView animationClass={styles.professionAnimation}>
            <h2 className={styles.profession}>Fullstack Developer</h2>
          </InView>
          <InView animationClass={styles.downloadAnimation}>
            <a
              className={styles.download}
              href={`./jw_cv_${lang}.pdf`}
              rel="noreferrer"
              target="_blank"
            >
              {text.download[lang]}
            </a>
          </InView>

          <div className={styles.socialMedia}>
            <InView
              style={{ animationDelay: "0.3s" }}
              animationClass={styles.mediaIconAnimation}
            >
              <a
                href="https://www.facebook.com/kysniw"
                rel="noreferrer"
                target="_blank"
                className={`${styles.mediaIcon} ${styles.fbIcon}`}
              >
                <FaFacebookF />
              </a>
            </InView>
            <InView
              style={{ animationDelay: "0.6s" }}
              animationClass={styles.mediaIconAnimation}
            >
              <a
                href="https://www.instagram.com/kysniw"
                rel="noreferrer"
                target="_blank"
                className={`${styles.mediaIcon} ${styles.instaIcon}`}
              >
                <FaInstagram />
              </a>
            </InView>
            <InView
              style={{ animationDelay: "0.9s" }}
              animationClass={styles.mediaIconAnimation}
            >
              <a
                href="https://github.com/kysniw"
                rel="noreferrer"
                target="_blank"
                className={`${styles.mediaIcon} ${styles.githubIcon}`}
              >
                <FaGithub />
              </a>
            </InView>
            <InView
              style={{ animationDelay: "1.2s" }}
              animationClass={styles.mediaIconAnimation}
            >
              <a
                href="https://www.linkedin.com/in/jakub-winsyk/"
                rel="noreferrer"
                target="_blank"
                className={`${styles.mediaIcon} ${styles.linkedIcon}`}
              >
                <FaLinkedinIn />
              </a>
            </InView>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Home;
