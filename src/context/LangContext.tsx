import React, { createContext, useContext, useState } from "react";

type langProps = "pl" | "en";

type LangContextProps = {
  lang: langProps;
  handleChangeLang: (lang: string) => void;
};

const LangContext = createContext<LangContextProps | null>(null);

const LangContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLang] = useState<langProps>(() => {
    if (
      localStorage.getItem("lang") === "pl" ||
      (navigator.language === "pl" && !localStorage.getItem("lang"))
    )
      return "pl";
    return "en";
  });

  const handleChangeLang = (lang: string) => {
    localStorage.setItem("lang", lang);

    if (lang === "pl") {
      setLang("pl");
    } else {
      setLang("en");
    }
  };

  return (
    <LangContext.Provider value={{ lang, handleChangeLang }}>
      {children}
    </LangContext.Provider>
  );
};

export default LangContextProvider;

export const useLangContext = () => {
  const context = useContext(LangContext);

  if (!context) {
    throw new Error("useLangContext must be used in LangContext Provider!");
  }

  return context;
};
