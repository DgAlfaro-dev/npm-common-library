export interface IDeviceBrandResponse {
    deviceBrandId: number,
    name: string,
    note: string,
    indActive: boolean
}

/**
 * @swagger
 * components:
 *   schemas:
 *     IDeviceBrandResponse:
 *       type: object
 *       properties:
 *         deviceBrandId:
 *           type: number
 *           example: 1
 *         name:
 *           type: string
 *           example: "Samsung"
 *         note:
 *           type: string
 *           example: "Marca líder en dispositivos móviles."
 *         indActive:
 *           type: boolean
 *           example: true
 *       required:
 *         - deviceBrandId
 *         - name
 *         - indActive
 *       description: Respuesta con la información de una marca de dispositivo.
 */
