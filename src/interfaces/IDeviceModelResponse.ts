export interface IDeviceModelResponse {
    deviceModelId: number,
    deviceTypeCode: string,
    deviceTypeDescription: string,
    name: string,
    note: string,
    deviceBrandId: number,
    indActive: boolean
}

/**
 * @swagger
 * components:
 *   schemas:
 *     IDeviceModelResponse:
 *       type: object
 *       properties:
 *         deviceModelId:
 *           type: number
 *           example: 1001
 *         deviceTypeCode:
 *           type: string
 *           example: "SP"
 *         deviceTypeDescription:
 *           type: string
 *           example: "Smartphone"
 *         name:
 *           type: string
 *           example: "Galaxy S21"
 *         note:
 *           type: string
 *           example: "Modelo de alta gama de Samsung."
 *         deviceBrandId:
 *           type: number
 *           example: 1
 *         indActive:
 *           type: boolean
 *           example: true
 *       required:
 *         - deviceModelId
 *         - deviceTypeCode
 *         - name
 *         - deviceBrandId
 *         - indActive
 *       description: Respuesta con la información de un modelo de dispositivo.
 */
