import { Element } from "react-scroll";
import styles from "./Contact.module.css";
import React, { useRef, useState } from "react";
import { sendForm } from "@emailjs/browser";
import { FaXmark } from "react-icons/fa6";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<{
    message: string | null;
    error: string | null;
  }>({ message: null, error: null });

  const resetFormData = () => {
    setFullName("");
    setEmail("");
    setPhoneNumber("");
    setSubject("");
    setMessage("");
  };

  const statusTimer = () => {
    setTimeout(() => {
      setStatus({ message: null, error: null });
    }, 5000);
  };

  const handleCloseStatus = () => {
    setStatus({ message: null, error: null });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // alert("Submited");

    if (formRef.current) {
      setIsLoading(true);
      sendForm(
        `${process.env.REACT_APP_SERVICE_ID}`,
        `${process.env.REACT_APP_TEMPLATE_ID}`,
        formRef.current,
        {
          publicKey: `${process.env.REACT_APP_PUBLIC_KEY}`,
        }
      )
        .then(() => {
          resetFormData();
          setStatus({
            message: "The message has been sent succesfully!",
            error: null,
          });
          statusTimer();
          setIsLoading(false);
        })
        .catch((error) => {
          resetFormData();
          console.log(error);
          setStatus({
            message: null,
            error: "Something went wrong! Try again later.",
          });
          statusTimer();
          setIsLoading(false);
        });
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
            autoComplete="name"
            required
          />
          <input
            className={styles.input}
            type="email"
            name="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
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
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            autoComplete="tel"
          />
          <input
            className={styles.input}
            type="text"
            name="subject"
            minLength={5}
            placeholder="Email Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            autoComplete="off"
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
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          autoComplete="off"
          required
        ></textarea>
        <input
          className={styles.submit}
          type="submit"
          value="Send Message"
          disabled={isLoading}
        />
        {status.message && (
          <div className={styles.success}>
            <p>Message sent!</p>
            <FaXmark className={styles.close} onClick={handleCloseStatus} />
          </div>
        )}
        {status.error && (
          <div className={styles.error}>
            <p>Something went wrong!</p>
            <FaXmark className={styles.close} onClick={handleCloseStatus} />
          </div>
        )}
      </form>
    </Element>
  );
};

export default Contact;
