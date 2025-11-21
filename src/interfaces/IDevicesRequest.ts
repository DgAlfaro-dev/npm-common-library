import { UUID } from "crypto";

export interface IDevicesRequest {
    deviceType: UUID,
    brandOd: number,
    modelId: number,
    serie: string,
    IMEI: string,
    phoneNumber: string,
    indStatus: UUID,
    lastMaintainanceDate: Date,
    nextMaintainanceDate: Date,
    assignedToBusinessPartnerId: number,
    assignedToStartDate: Date,
    note: string,
    indActive: boolean,
}


/**
 * @swagger
 * components:
 *   schemas:
 *     IDevicesRequest:
 *       type: object
 *       properties:
 *         deviceType:
 *           type: string
 *           example: "f65b0c50-9073-4d9d-9a66-8a11f7f4a3c8"
 *           description: UUID del tipo de dispositivo.
 *         brandOd:
 *           type: integer
 *           example: 1
 *           description: ID de la marca del dispositivo.
 *         modelId:
 *           type: integer
 *           example: 1
 *           description: ID del modelo del dispositivo.
 *         serie:
 *           type: string
 *           example: "12345XYZ"
 *           description: Número de serie del dispositivo.
 *         IMEI:
 *           type: string
 *           example: "357821045616742"
 *           description: Número IMEI del dispositivo.
 *         phoneNumber:
 *           type: string
 *           example: "+1234567890"
 *           description: Número de teléfono asociado al dispositivo.
 *         indStatus:
 *           type: string
 *           example: "f65b0c50-9073-4d9d-9a66-8a11f7f4a3c8"
 *           description: UUID del estado del dispositivo.
 *         lastMaintainanceDate:
 *           type: string
 *           format: date
 *           example: "2024-08-20"
 *           description: Fecha de la última mantención.
 *         nextMaintainanceDate:
 *           type: string
 *           format: date
 *           example: "2024-12-20"
 *           description: Fecha de la próxima mantención.
 *         assignedToBusinessPartnerId:
 *           type: integer
 *           example: 2
 *           description: ID del socio de negocios asignado.
 *         assignedToStartDate:
 *           type: string
 *           format: date
 *           example: "2024-08-01"
 *           description: Fecha de inicio de la asignación.
 *         note:
 *           type: string
 *           example: "Dispositivo asignado para uso de campo."
 *           description: Notas adicionales.
 *         indActive:
 *           type: boolean
 *           example: true
 *           description: Indicador de si el dispositivo está activo.
 *       required:
 *         - deviceType
 *         - brandOd
 *         - modelId
 *         - serie
 *         - IMEI
 *         - phoneNumber
 *         - indStatus
 *         - indActive
 *       description: Datos necesarios para crear o actualizar un dispositivo.
 */
