import { LanguageFile } from '../types/language';
import en from './en';
import ptBr from './ptBr';
// import es from './es';
// import fr from './fr';
// Adicione mais imports conforme necessário

export const languageFiles: Record<string, LanguageFile> = {
  en,
  'pt-br': ptBr,
  // es,
  // fr,
};

export const getAvailableLanguages = (): string[] => {
  return Object.keys(languageFiles);
};
