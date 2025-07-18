import { LanguageFile } from '../types/language';
import ar from './ar';
import de from './de';
import en from './en';
import es from './es';
import fr from './fr';
import hi from './hi';
import it from './it';
import ja from './ja';
import ko from './ko';
import ptBr from './ptBr';
import ru from './ru';
import zh from './zh';

export const languageFiles: Record<string, LanguageFile> = {
  en, // Inglês (global)
  'pt-br': ptBr, // Português (local)
  zh, // Chinês (muitos falantes)
  es, // Espanhol (global)
  hi, // Hindi (muitos falantes)
  ar, // Árabe (muitos falantes)
  fr, // Francês (global)
  ru, // Russo
  de, // Alemão
  it, // Italiano
  ja, // Japonês
  ko, // Coreano
};

export const getAvailableLanguages = (): string[] => {
  return Object.keys(languageFiles);
};
