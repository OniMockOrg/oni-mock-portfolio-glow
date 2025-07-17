import { useState, ReactNode, useEffect } from 'react';
import { LanguageContext } from './LanguageContext';
import { LanguageConfig } from '../types/language';
import { languageFiles, getAvailableLanguages } from '../lang';
import { getCookie, setCookie } from '../utils/cookies';

const LANGUAGE_COOKIE = 'preferred_language';
const DEFAULT_LANGUAGE = 'en';

// Detectar idioma do navegador de forma dinâmica
const detectBrowserLanguage = (): string => {
  const browserLang = navigator.language || navigator.languages?.[0];
  if (!browserLang) return DEFAULT_LANGUAGE;

  const availableLanguages = getAvailableLanguages();
  // Primeiro, tenta match exato (ex: 'pt-BR' -> 'pt-br')
  const exactMatch = availableLanguages.find(
    (lang) => lang.toLowerCase() === browserLang.toLowerCase()
  );
  if (exactMatch) return exactMatch;

  // Se não encontrar match exato, tenta por prefixo (ex: 'pt-BR' -> 'pt')
  const langPrefix = browserLang.split('-')[0].toLowerCase();
  const prefixMatch = availableLanguages.find((lang) =>
    lang.toLowerCase().startsWith(langPrefix)
  );
  if (prefixMatch) return prefixMatch;

  // Se não encontrar nada, retorna o padrão
  return DEFAULT_LANGUAGE;
};

type Props = { children: ReactNode };

export const LanguageProvider = ({ children }: Props) => {
  const [currentLanguage, setCurrentLanguage] = useState<string>(() => {
    const savedLanguage = getCookie(LANGUAGE_COOKIE);
    const availableLanguages = getAvailableLanguages();

    // Prioridade: Cookie -> Navegador -> Padrão -> Primeiro disponível
    if (savedLanguage && availableLanguages.includes(savedLanguage)) {
      return savedLanguage;
    }

    const browserLang = detectBrowserLanguage();
    if (availableLanguages.includes(browserLang)) {
      return browserLang;
    }

    return availableLanguages.includes(DEFAULT_LANGUAGE)
      ? DEFAULT_LANGUAGE
      : availableLanguages[0];
  });

  const setLanguage = (lang: string) => {
    if (languageFiles[lang]) {
      setCurrentLanguage(lang);
      setCookie(LANGUAGE_COOKIE, lang);
    }
  };

  const t = (key: string, vars?: Record<string, string | number>): string => {
    const currentTranslations =
      languageFiles[currentLanguage]?.translations || {};
    const template = currentTranslations[key] || key;

    if (!vars) return template;

    return Object.entries(vars).reduce(
      (acc, [varKey, varValue]) =>
        acc.replace(new RegExp(`\\{${varKey}\\}`, 'g'), String(varValue)),
      template
    );
  };

  const availableLanguages: LanguageConfig[] = Object.values(languageFiles).map(
    (lang) => lang.config
  );

  return (
    <LanguageContext.Provider
      value={{
        currentLanguage,
        availableLanguages,
        setLanguage,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
