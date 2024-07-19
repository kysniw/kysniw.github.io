import { Element } from "react-scroll";
import styles from "./About.module.css";
import { aboutData } from "../lib/data";
import { useLangContext } from "../context/LangContext";
import InView from "../components/InView";

const About = () => {
  const { lang } = useLangContext();
  const { texts } = aboutData;

  return (
    <Element name="about" className={styles.section}>
      <div className={styles.textContainer}>
        <InView animationClass={styles.titleAnimation}>
          <h1 className={styles.title}>{texts.title[lang]}</h1>
        </InView>
        <InView animationClass={styles.textAnimation}>
          <p className={styles.text}>
            {texts.desc[lang]}
            {/* Hi! I'm a graduate&nbsp;of Computer Science at Wroclaw University of
          Technology. During second-level studies, I realized that ReactJS is
          the library which I'm interested in. On the other side my friends
          introduced me to the world of python. Then I wrote my master thesis
          using python for machine-learning libraries and started work with
          Django. After studies I tried Angular on post-graduate studies as well
          as I developed ReactJS skills.
          <br />
          In my spare time I repair and assemble computers, tinker with my car,
          play video games and travel by trains which are my biggest crush. */}
          </p>
        </InView>
      </div>
      <InView
        className={styles.imgContainer}
        animationClass={styles.imgAnimation}
      >
        <img
          className={styles.img}
          src="./about_sm.webp"
          alt="My portrait in library"
          width={605}
          height={807}
        />
      </InView>
    </Element>
  );
};

export default About;
