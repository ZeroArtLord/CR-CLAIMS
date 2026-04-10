import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { contentByLang, Language } from "./content";

type LanguageContextValue = {
  lang: Language;
  setLang: (lang: Language) => void;
  content: (typeof contentByLang)[Language];
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>("en");

  useEffect(() => {
    const stored = localStorage.getItem("cr_lang");
    if (stored === "en" || stored === "es") {
      setLang(stored);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cr_lang", lang);
  }, [lang]);

  const value = useMemo(
    () => ({
      lang,
      setLang,
      content: contentByLang[lang],
    }),
    [lang]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}
