import { Element } from "react-scroll";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <Element name="contact" className={styles.section}>
      <h1 className={styles.title}>Contact with me</h1>
      <form
        className={styles.form}
        action="mailto:kubawin11@gmail.com"
        method="get"
      >
        <div className={styles.inputBox}>
          <input
            className={styles.input}
            type="text"
            name="subject"
            placeholder="Full Name"
          />
          <input
            className={styles.input}
            type="email"
            name="email"
            placeholder="Email Address"
          />
        </div>
        <div className={styles.inputBox}>
          <input
            className={styles.input}
            type="number"
            name="number"
            placeholder="Mobile Number"
          />
          <input
            className={styles.input}
            type="text"
            name="subject"
            placeholder="Email Subject"
          />
        </div>
        <textarea
          name="body"
          className={styles.textarea}
          cols={30}
          rows={10}
          placeholder="Your Message"
        ></textarea>
        <input className={styles.submit} type="submit" value="Send Message" />
      </form>
    </Element>
  );
};

export default Contact;
