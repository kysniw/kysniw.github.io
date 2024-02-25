import { Element } from "react-scroll";
import styles from "./Contact.module.css";
import React, { useState } from "react";
import { sendForm } from "@emailjs/browser";
import { FaCircleNotch, FaXmark } from "react-icons/fa6";
import { contactData } from "../lib/data";
import { useLangContext } from "../context/LangContext";

const Contact = () => {
  const { emptyForm, texts } = contactData;
  const { lang } = useLangContext();

  const [formData, setFormData] = useState(emptyForm);
  const [formDataError, setFormDataError] = useState(emptyForm);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<{
    message: string | null;
    error: string | null;
  }>({ message: null, error: null });

  const resetFormData = () => {
    setFormData(emptyForm);
  };

  const handleChangeFormData = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    validateData(e.target);

    const updatedFormData = {
      ...formData,
      [e.target.name]: e.target.value,
    };
    setFormData(updatedFormData);
  };

  const validateData = (
    data: EventTarget & (HTMLInputElement | HTMLTextAreaElement)
  ) => {
    switch (data.name) {
      case "email":
        if (!data.value.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
          setFormDataError({ ...formDataError, [data.name]: data.value });
        } else {
          setFormDataError({ ...formDataError, [data.name]: "" });
        }
        break;

      default:
        break;
    }
  };

  const statusTimer = () => {
    setTimeout(() => {
      setStatus({ message: null, error: null });
    }, 5000);
  };

  const handleCloseStatus = () => {
    setStatus({ message: null, error: null });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // alert("Submited");

    setIsLoading(true);
    sendForm(
      `${process.env.REACT_APP_SERVICE_ID}`,
      `${process.env.REACT_APP_TEMPLATE_ID}`,
      e.currentTarget,
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
  };

  return (
    <Element name="contact" className={styles.section}>
      <h1 className={styles.title}>{texts.title[lang]}</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputBox}>
          <input
            className={styles.input}
            type="text"
            name="fullName"
            placeholder={texts.fullNamePlaceholder[lang]}
            value={formData.fullName}
            onChange={handleChangeFormData}
            autoComplete="name"
            disabled={isLoading}
            required
          />
          <input
            className={styles.input}
            type="email"
            name="email"
            placeholder={texts.emailPlaceholder[lang]}
            value={formData.email}
            onChange={handleChangeFormData}
            autoComplete="email"
            disabled={isLoading}
            required
          />
          {formDataError.email && <p>Please fill correct mail!</p>}
        </div>
        <div className={styles.inputBox}>
          <input
            className={styles.input}
            type="tel"
            minLength={9}
            maxLength={13}
            name="phoneNumber"
            placeholder={texts.phoneNumberPlaceholder[lang]}
            value={formData.phoneNumber}
            onChange={handleChangeFormData}
            autoComplete="tel"
            disabled={isLoading}
          />
          <input
            className={styles.input}
            type="text"
            name="subject"
            minLength={5}
            placeholder={texts.subjectPlaceholer[lang]}
            value={formData.subject}
            onChange={handleChangeFormData}
            autoComplete="off"
            disabled={isLoading}
            required
          />
        </div>
        <textarea
          name="message"
          className={styles.textarea}
          cols={30}
          rows={8}
          minLength={20}
          maxLength={500}
          placeholder={texts.messagePlaceholder[lang]}
          value={formData.message}
          onChange={handleChangeFormData}
          autoComplete="off"
          disabled={isLoading}
          required
        ></textarea>
        <button
          className={styles.submit}
          type="submit"
          disabled={isLoading || formDataError !== emptyForm}
        >
          {isLoading ? (
            <FaCircleNotch className={styles.loadingIcon} />
          ) : (
            texts.sendButton[lang]
          )}
        </button>
        {status.message && (
          <div className={styles.success}>
            <p>{texts.statusSuccess[lang]}</p>
            <FaXmark className={styles.close} onClick={handleCloseStatus} />
          </div>
        )}
        {status.error && (
          <div className={styles.error}>
            <p>{texts.statusError[lang]}</p>
            <FaXmark className={styles.close} onClick={handleCloseStatus} />
          </div>
        )}
      </form>
    </Element>
  );
};

export default Contact;
