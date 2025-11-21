import * as yup from 'yup';
import { getValidationMessage } from '../language/Customi18n.js'; // Ajusta la ruta de importación según sea necesario
import { IFieldValidationError } from '../interfaces/IFieldValidationError.js';

export abstract class BaseValidator {
  protected static currentLanguage: string = 'en'; // Idioma predeterminado

  // Método para cambiar el idioma dinámicamente
  public static setLanguage(language: string): void {
    this.currentLanguage = language;
  }

  // Resolver mensajes basados en el idioma actual
  protected static languageMessageResolver(key: string): string {
    return getValidationMessage(key, this.currentLanguage);
  }

  // Método abstracto para definir el esquema en clases derivadas
  protected static get schema(): yup.ObjectSchema<any> {
    throw new Error("Method 'schema' must be implemented.");
  }

  // Método para realizar la validación
  public static async validate(request: any, language?: string): Promise<IFieldValidationError[]> {
    try {
      if (language) {
        this.setLanguage(language);
      }

      await this.schema.validate(request, { abortEarly: false });
      return [];
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        return error.inner.map((err) => ({
          field: err.path || '',
          message: err.message || this.languageMessageResolver(err.type || ''),
        }));
      }
      return [
        {
          field: 'unknown',
          message: this.languageMessageResolver('unexpectedError'),
        },
      ];
    }
  }
}
