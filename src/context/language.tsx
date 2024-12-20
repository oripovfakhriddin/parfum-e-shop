"use client";

import { LANGUAGE_KEY } from "@/constants";
import languages from "@/lang";
import ENG from "@/lang/eng";
import ChildrenType from "@/types/children";
import { createContext, useEffect, useState } from "react";

interface LanguageContextTypes {
  lang: typeof ENG;
  langType: "uzb" | "eng" | "rus";
  setLangType: (lang: "uzb" | "eng" | "rus") => void;
  changeLang: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const LanguageContext = createContext({} as LanguageContextTypes);

const LangContextProvider = ({ children }: ChildrenType) => {
  const [langType, setLangType] = useState<"uzb" | "rus" | "eng">("uzb");

  useEffect(() => {
    const storedLang = localStorage.getItem(LANGUAGE_KEY) as
      | "uzb"
      | "rus"
      | "eng";
    if (storedLang) {
      setLangType(storedLang);
    }
  }, []);

  const changeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = e.target.value as "uzb" | "rus" | "eng";
    setLangType(lang);
    localStorage.setItem(LANGUAGE_KEY, lang);
  };

  const store = {
    langType,
    lang: languages[langType],
    changeLang,
    setLangType,
  };

  return (
    <LanguageContext.Provider value={store}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LangContextProvider;
