import { enTranslations } from './locales/en.js';
import { esTranslations } from './locales/es.js';

type Translations = {
  [key: string]: string;
};

export function getValidationMessage(key: string, language: string) {
  let messages: Translations;
  switch (language) {
    case 'en':
      messages = enTranslations;
      break;
    case 'es':
      messages = esTranslations;
      break;
    // Añade más casos según sea necesario
    default:
      messages = enTranslations; // Idioma por defecto
  }

  // Usa afirmación de tipo para indicar a TypeScript que confíes en la clave
  return (messages[key] as string) || key;
}
