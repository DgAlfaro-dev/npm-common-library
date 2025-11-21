export interface ICreateContactRequest {
  contactName: string;
  mail1: string;
  mail2: string;
  cel1: string;
  cel2: string;
  cel1w: boolean;
  cel2w: boolean;
  telHome1: string;
  telHome2: string;
  workHome1: string;
  workHome2: string;
  indMain: boolean;
  Note?: string;
}

/**
 * @swagger
 * components:
 *   schemas:
 *     ICreateContactRequest:
 *       type: object
 *       required:
 *         - contactName
 *         - mail1
 *         - cel1
 *         - cel1w
 *         - indMain
 *       properties:
 *         contactName:
 *           type: string
 *           example: Nombre del contacto
 *         mail1:
 *           type: string
 *           format: email
 *           example: ejemplo@correo.com
 *         mail2:
 *           type: string
 *           format: email
 *           example: ejemplo2@correo.com
 *         cel1:
 *           type: string
 *           example: 1234567890
 *         cel2:
 *           type: string
 *           example: 0987654321
 *         cel1w:
 *           type: boolean
 *           example: true
 *         cel2w:
 *           type: boolean
 *           example: false
 *         telHome1:
 *           type: string
 *           example: 1234567
 *         telHome2:
 *           type: string
 *           example: 7654321
 *         workHome1:
 *           type: string
 *           example: 9876543
 *         workHome2:
 *           type: string
 *           example: 3456789
 *         indMain:
 *           type: boolean
 *           example: true
 *         Note:
 *           type: string
 *           example: Nota adicional
 *       description: Detalles del contacto a crear
 */