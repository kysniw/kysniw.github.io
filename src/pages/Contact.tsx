import { Element } from "react-scroll";
import styles from "./Contact.module.css";
import React, { useRef, useState } from "react";
import { sendForm } from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // alert("Submited");

    if (formRef.current) {
      sendForm(
        `${process.env.REACT_APP_SERVICE_ID}`,
        `${process.env.REACT_APP_TEMPLATE_ID}`,
        formRef.current as HTMLFormElement,
        {
          publicKey: `${process.env.REACT_APP_PUBLIC_KEY}`,
        }
      )
        .then(() => console.log("SUCCESS"))
        .catch((error) => console.log(error));
      // console.log(res);
    }
  };

  return (
    <Element name="contact" className={styles.section}>
      <h1 className={styles.title}>Contact</h1>
      <form ref={formRef} className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputBox}>
          <input
            className={styles.input}
            type="text"
            name="full_name"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
          <input
            className={styles.input}
            type="email"
            name="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styles.inputBox}>
          <input
            className={styles.input}
            type="tel"
            minLength={9}
            maxLength={13}
            name="phone_number"
            placeholder="Mobile Number"
          />
          <input
            className={styles.input}
            type="text"
            name="subject"
            minLength={5}
            placeholder="Email Subject"
            required
          />
        </div>
        <textarea
          name="message"
          className={styles.textarea}
          cols={30}
          rows={10}
          minLength={20}
          placeholder="Your Message"
          required
        ></textarea>
        <input className={styles.submit} type="submit" value="Send Message" />
      </form>
    </Element>
  );
};

export default Contact;
