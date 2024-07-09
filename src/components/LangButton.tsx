import React, { useEffect, useRef, useState } from "react";
import styles from "./LangButton.module.css";
import { useLangContext } from "../context/LangContext";
import { FaChevronDown } from "react-icons/fa6";

const LangButton = () => {
  const { lang, handleChangeLang } = useLangContext();

  const [isOpen, setIsOpen] = useState(false);

  const selectRef = useRef<HTMLDivElement>(null);

  const optionsClass = isOpen
    ? `${styles.options} ${styles.optionsOpened}`
    : `${styles.options}`;

  const handleOutSelectClick = (e: PointerEvent) => {
    if (
      selectRef.current &&
      !selectRef.current.contains(e.target as HTMLDivElement)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("pointerdown", handleOutSelectClick, true);

    return () =>
      document.removeEventListener("pointerdown", handleOutSelectClick, true);
  });

  return (
    <div ref={selectRef} className={styles.select}>
      <button onPointerUp={() => setIsOpen(!isOpen)}>
        {lang.toUpperCase()}
        <FaChevronDown className={styles.chevron} />
      </button>
      <div className={optionsClass}>
        <button
          data-value="pl"
          onClickCapture={(e) => {
            handleChangeLang(e.currentTarget.dataset["value"]!);
            setIsOpen(false);
          }}
        >
          PL
        </button>
        <button
          data-value="en"
          onClickCapture={(e) => {
            handleChangeLang(e.currentTarget.dataset["value"]!);
            setIsOpen(false);
          }}
        >
          EN
        </button>
      </div>
    </div>
  );
};

export default LangButton;
