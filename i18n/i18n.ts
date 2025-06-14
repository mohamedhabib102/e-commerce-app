// i18n/i18n.ts
"use client"; // 💥 مهم جدًا

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en/common.json";
import ar from "./locales/ar/common.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ar: { translation: ar },
    },
    lng: "en", // default
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
