export interface IDeviceCreateRequest {
    tokenDevice: string,
    tags: string,
    deviceType: string,
}

/**
 * @swagger
 * components:
 *   schemas:
 *     IDeviceCreateRequest:
 *       type: object
 *       properties:
 *         tokenDevice:
 *           type: string
 *           example: "abc123xyz"
 *           description: Token único del dispositivo.
 *         tags:
 *           type: string
 *           example: "user123,important"
 *           description: Etiquetas asociadas al dispositivo.
 *         deviceType:
 *           type: string
 *           example: "Android"
 *           description: Tipo de dispositivo (e.g., Android, iOS).
 *       required:
 *         - tokenDevice
 *         - tags
 *         - deviceType
 *       description: Datos necesarios para registrar un nuevo dispositivo.
 */
