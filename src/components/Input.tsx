import React from "react";
import styles from "./Input.module.css";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { FormDataElements, FormDataProps } from "../lib/types";
import { useLangContext } from "../context/LangContext";
import { contactData } from "../lib/data";

type InputProps = {
  textarea?: boolean;
  type?: string;
  fieldName: FormDataElements;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  register: UseFormRegister<FormDataProps>;
  errors: FieldErrors<FormDataProps>;
};

const Input = ({
  textarea,
  type,
  fieldName,
  required,
  minLength,
  maxLength,
  pattern,
  register,
  errors,
}: InputProps) => {
  const { lang } = useLangContext();
  const { texts } = contactData;
  const { validationMessages } = texts;

  return (
    <>
      {!textarea && (
        <div className={styles.inputDiv}>
          <input
            className={`${styles.input} ${
              errors[fieldName] && styles.fieldError
            }`}
            placeholder={texts.placeholder[fieldName][lang]}
            type={type ? type : "text"}
            {...register(fieldName, {
              required: required || false,
              pattern: pattern,
              minLength: minLength,
              maxLength: maxLength,
            })}
            aria-invalid={errors[fieldName] ? "true" : "false"}
          />
          {errors[fieldName]?.type === "required" && (
            <p>{validationMessages.required[lang]}</p>
          )}
          {errors[fieldName]?.type === "pattern" && (
            <p>{validationMessages.pattern[fieldName][lang]}</p>
          )}
          {errors[fieldName]?.type === "minLength" && (
            <p>{validationMessages.length[fieldName][lang]}</p>
          )}
          {errors[fieldName]?.type === "maxLength" && (
            <p>{validationMessages.length[fieldName][lang]}</p>
          )}
        </div>
      )}
      {textarea && (
        <>
          <textarea
            className={`${styles.textarea} ${
              errors.message && styles.fieldError
            }`}
            placeholder={texts.placeholder[fieldName][lang]}
            rows={7}
            {...register(fieldName, {
              required: required || false,
              minLength: minLength,
              maxLength: maxLength,
              pattern: pattern,
            })}
            aria-invalid={errors[fieldName] ? "true" : "false"}
          ></textarea>
          {errors[fieldName]?.type === "required" && (
            <p>{validationMessages.required[lang]}</p>
          )}
          {errors[fieldName]?.type === "pattern" && (
            <p>{validationMessages.pattern[fieldName][lang]}</p>
          )}
          {errors[fieldName]?.type === "minLength" && (
            <p>{validationMessages.length[fieldName][lang]}</p>
          )}
          {errors[fieldName]?.type === "maxLength" && (
            <p>{validationMessages.length[fieldName][lang]}</p>
          )}
        </>
      )}
    </>
  );
};

export default Input;
