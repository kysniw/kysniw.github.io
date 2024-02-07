import { Element } from "react-scroll";
import styles from "./About.module.css";

const About = () => {
  return (
    <Element name="about" className={styles.section}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>About me</h1>
        <p className={styles.text}>
          Hi! I'm a graduate of Computer Science at Wroclaw University of
          Technology. During second-level studies, I realized that ReactJS is
          the library which I'm interested in. On the other side my friends
          introduced me to the world of python. Then I wrote my master thesis
          using python for machine-learning libraries and started work with
          Django. After studies I tried Angular on post-graduate studies as well
          as I developed ReactJS skills.
          <br />
          In my spare time I repair and assemble computers, tinker with my car,
          play video games and travel by trains which are my biggest crush.
        </p>
      </div>

      <img
        className={styles.img}
        src="/about_sm.png"
        alt="My portrait in library"
        width={605}
        height={807}
      />
    </Element>
  );
};

export default About;
