import { Element } from "react-scroll";
import styles from "./Contact.module.css";
import { useState } from "react";
import { send } from "@emailjs/browser";
import { FaCircleNotch, FaXmark } from "react-icons/fa6";
import { contactData } from "../lib/data";
import { useLangContext } from "../context/LangContext";
import { FormDataProps } from "../lib/types";
import { useForm } from "react-hook-form";
import Input from "../components/Input";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<{
    message: string | null;
    error: string | null;
  }>({ message: null, error: null });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormDataProps>({ mode: "all" });

  const { texts } = contactData;
  const { lang } = useLangContext();

  const statusTimer = () => {
    setTimeout(() => {
      setStatus({ message: null, error: null });
    }, 5000);
  };

  const handleCloseStatus = () => {
    setStatus({ message: null, error: null });
  };

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);

    const templateParams = {
      fullName: data.fullName,
      email: data.email,
      phoneNumber: data.phoneNumber,
      subject: data.subject,
      message: data.message,
    };
    setIsLoading(true);
    await send(
      `${process.env.REACT_APP_SERVICE_ID}`,
      `${process.env.REACT_APP_TEMPLATE_ID}`,
      templateParams,
      {
        publicKey: `${process.env.REACT_APP_PUBLIC_KEY}`,
      }
    )
      .then(() => {
        setStatus({
          message: "The message has been sent succesfully!",
          error: null,
        });
      })
      .catch((error) => {
        console.log(error);
        setStatus({
          message: null,
          error: "Something went wrong! Try again later.",
        });
      })
      .finally(() => {
        statusTimer();
        setIsLoading(false);
        reset();
      });
  });

  return (
    <Element name="contact" className={styles.section}>
      <h1 className={styles.title}>{texts.title[lang]}</h1>
      <form className={styles.form} onSubmit={onSubmit}>
        <div className={styles.inputBox}>
          <Input
            fieldName="fullName"
            required
            pattern={/[a-zA-Z]{3,16}([ ][a-zA-Z]{3,16})?$/g}
            minLength={4}
            maxLength={30}
            register={register}
            errors={errors}
          />
          <Input
            fieldName="email"
            required
            pattern={/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g}
            register={register}
            errors={errors}
          />
        </div>
        <div className={styles.inputBox}>
          <Input
            type="tel"
            fieldName="phoneNumber"
            pattern={/[+0-9]?([0-9]{9,12})$/g}
            minLength={9}
            maxLength={13}
            register={register}
            errors={errors}
          />
          <Input
            fieldName="subject"
            required
            minLength={5}
            maxLength={30}
            register={register}
            errors={errors}
          />
        </div>
        <Input
          textarea
          fieldName="message"
          required
          minLength={20}
          maxLength={400}
          register={register}
          errors={errors}
        />
        <button className={styles.submit} type="submit" disabled={isLoading}>
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
