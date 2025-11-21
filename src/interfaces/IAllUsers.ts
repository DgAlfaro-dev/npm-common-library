export interface IAllUserResponse {
    usuarioId: number;
    nombre: string;
    loginUsr: string;
    clienteId?: number;
    tipoUsuario: string;
    email: string;
    note: string;
    indEstado?: boolean;
    lastConnectedCentroId: number
  }
  /**
 * @swagger
 * components:
 *   schemas:
 *     IUserResponse:
 *       type: object
 *       required:
 *         - usuarioId
 *         - nombre
 *         - loginUsr
 *         - tipoUsuario
 *         - email
 *       properties:
 *         usuarioId:
 *           type: number
 *           description: Identificador único del usuario
 *         nombre:
 *           type: string
 *           description: Nombre completo del usuario
 *         loginUsr:
 *           type: string
 *           description: Nombre de usuario para iniciar sesión
 *         clienteId:
 *           type: number
 *           description: Identificador del cliente asociado al usuario (opcional)
 *           nullable: true
 *         tipoUsuario:
 *           type: string
 *           description: Tipo de usuario (ej. administrador, cliente)
 *         email:
 *           type: string
 *           description: Correo electrónico del usuario
 *         indEstado:
 *           type: boolean
 *           description: Indicador del estado del usuario (opcional)
 *           nullable: true
 */