export interface ILoginRequest {
    username: string;
    password: string;
  }

/**
 * @swagger
 * components:
 *   schemas:
 *     LoginRequest:
 *       type: object
 *       required:
 *         - username
 *         - password
 *       properties:
 *         username:
 *           type: string
 *           example: usuario@ejemplo.com
 *         password:
 *           type: string
 *           format: password
 *           example: tucontraseña
 *       description: Credenciales para iniciar sesión
 */