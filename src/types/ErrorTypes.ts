export interface httpError{
  httpCode: number;
}

export class AuthenticationError extends Error implements httpError {

    httpCode: number;
    constructor(message: string, httpCode = 401) { // 401 es el código estándar para errores de autenticación
      super(message);
      this.name = "AuthenticationError";
      this.httpCode = httpCode;
    }
}

export class DatabaseError extends Error implements httpError {
    httpCode: number;
    constructor(message: string, httpCode = 500) { // 500 es un código común para errores internos del servidor
      super(message);
      this.name = "DatabaseError";
      this.httpCode = httpCode;
    }
}

export class InternalServerError extends Error implements httpError {
    httpCode: number;
    constructor(message: string, httpCode = 500) { // 500 es un código común para errores internos del servidor
      super(message);
      this.name = "InternalServerError";
      this.httpCode = httpCode;
    }
}

export class ValidationError extends Error implements httpError {
  httpCode: number;
  validationErrors: any[]; // Un array para almacenar los mensajes de error de validación

  constructor(validationErrors: any[], httpCode = 412) {
    super("Validation Error");
    this.name = "ValidationError";
    this.httpCode = httpCode;
    this.validationErrors = validationErrors;
  }
}

export class NotfoundError extends Error implements httpError {
  httpCode: number;
  constructor(message: string, httpCode = 404) { 
    super(message);
    this.name = "NotFoundError";
    this.httpCode = httpCode;
  }

  
}
export class BadRequestError extends Error implements httpError {
  httpCode: number;
  constructor(message: string, httpCode = 400) { 
    super(message);
    this.name = "BadRequestError";
    this.httpCode = httpCode;
  }

  
}

/**
 * @swagger
 * components:
 *   schemas:
 *     AuthenticationError:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: AuthenticationError
 *         message:
 *           type: string
 *           example: Credenciales no válidas.
 *         httpCode:
 *           type: integer
 *           example: 401
 *       required:
 *         - name
 *         - message
 *         - httpCode
 *     DatabaseError:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: DatabaseError
 *         message:
 *           type: string
 *           example: Error al conectar con la base de datos.
 *         httpCode:
 *           type: integer
 *           example: 500
 *     InternalServerError:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: InternalServerError
 *         message:
 *           type: string
 *           example: Error interno del servidor.
 *         httpCode:
 *           type: integer
 *           example: 500
 *     ValidationError:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: ValidationError
 *         message:
 *           type: string
 *           example: Error de validación de campos.
 *         validationErrors:
 *           type: array
 *           items:
 *             type: string
 *           example: ["El campo 'email' es obligatorio.", "El campo 'password' debe tener al menos 6 caracteres."]
 *         httpCode:
 *           type: integer
 *           example: 400
 *     NotFoundError:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: NotFoundError
 *         message:
 *           type: string
 *           example: Recurso no encontrado.
 *         httpCode:
 *           type: integer
 *           example: 404
 *     BadRequestError:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: BadRequestError
 *         message:
 *           type: string
 *           example: Solicitud incorrecta.
 *         httpCode:
 *           type: integer
 *           example: 400
 */

