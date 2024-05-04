import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en/en.json';
import pl from './locales/pl/pl.json';

i18n.use(initReactI18next).init({
  supportedLngs: ['en', 'pl'],
  fallbackLng: 'en',
  resources: {
    en: {
      translation: en,
    },
    pl: {
      translation: pl,
    },
  },
  react: { useSuspense: false },
});

export default i18n;

export const t = i18n.t.bind(i18n);
