import { IDeviceBrandResponse } from "./IDeviceBrandResponse.js";
import { IDeviceModelResponse } from "./IDeviceModelResponse.js";

export interface IDevicesDetailResponse {
    deviceId: number,
    deviceTypeId: number,
    deviceTypeCode: string,
    deviceTypeDescription: string,
    brandOd: string,
    model: string,
    serie: string,
    IMEI: string,
    phoneNumber: string,
    indStatusId: number,
    indStatus: string,
    lastMaintainanceDate: Date,
    nextMaintainenceDate: Date,
    assignedToBusinessPartnerId: number,
    country: string,
    city: string,
    deviceBrand: IDeviceBrandResponse,
    deviceModel: IDeviceModelResponse,
    assignedToBusinessPartner: string,
    assignedToStartDate: Date,
    note: string,
    indActive: boolean,
    deviceAttachments: IDeviceAttachment[],
    deviceHistory: IDeviceHistory[]
}

export interface IDeviceAttachment {
    deviceAttachmentId: number,
    deviceId: number,
    name: string,
    url: string,
    note: string,
    createdByUserId: number,
    createdByDate: Date,
}

export interface IDeviceHistory {
    deviceHistoryId: number,
    deviceId: number,
    assignedToBusinessPartnerId: number,
    assignedToStartDate: Date,
    assignedToEndDate: Date,
    assignedByUserId: number,
}



/**
 * @swagger
 * components:
 *   schemas:
 *     IDevicesDetailResponse:
 *       type: object
 *       properties:
 *         deviceId:
 *           type: integer
 *           example: 123
 *         deviceTypeId:
 *           type: integer
 *           example: 1
 *         deviceTypeCode:
 *           type: string
 *           example: "SP"
 *         deviceTypeDescription:
 *           type: string
 *           example: "Smartphone"
 *         brandOd:
 *           type: string
 *           example: "Samsung"
 *         model:
 *           type: string
 *           example: "Galaxy S21"
 *         serie:
 *           type: string
 *           example: "12345XYZ"
 *         IMEI:
 *           type: string
 *           example: "357821045616742"
 *         phoneNumber:
 *           type: string
 *           example: "+1234567890"
 *         indStatusId:
 *           type: integer
 *           example: 1
 *         indStatus:
 *           type: string
 *           example: "En uso"
 *         lastMaintainanceDate:
 *           type: string
 *           format: date
 *           example: "2024-08-20"
 *         nextMaintainenceDate:
 *           type: string
 *           format: date
 *           example: "2024-12-20"
 *         assignedToBusinessPartnerId:
 *           type: integer
 *           example: 2
 *         country:
 *           type: string
 *           example: "Mexico"
 *         city:
 *           type: string
 *           example: "Mexico City"
 *         deviceBrand:
 *           $ref: '#/components/schemas/IDeviceBrandResponse'
 *         deviceModel:
 *           $ref: '#/components/schemas/IDeviceModelResponse'
 *         assignedToBusinessPartner:
 *           type: string
 *           example: "Empresa ABC"
 *         assignedToStartDate:
 *           type: string
 *           format: date
 *           example: "2024-08-01"
 *         note:
 *           type: string
 *           example: "Dispositivo asignado para uso de campo."
 *         indActive:
 *           type: boolean
 *           example: true
 *         deviceAttachments:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/IDeviceAttachment'
 *         deviceHistory:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/IDeviceHistory'
 *       description: Detalles completos de un dispositivo, incluyendo archivos adjuntos e historial.
 */




/**
 * @swagger
 * components:
 *   schemas:
 *     IDeviceAttachment:
 *       type: object
 *       properties:
 *         deviceAttachmentId:
 *           type: integer
 *           example: 1
 *         deviceId:
 *           type: integer
 *           example: 123
 *         name:
 *           type: string
 *           example: "Manual de Usuario"
 *         url:
 *           type: string
 *           example: "https://example.com/manual.pdf"
 *         note:
 *           type: string
 *           example: "Manual de usuario del dispositivo."
 *         createdByUserId:
 *           type: integer
 *           example: 456
 *         createdByDate:
 *           type: string
 *           format: date-time
 *           example: "2024-08-20T12:34:56Z"
 *       required:
 *         - deviceAttachmentId
 *         - deviceId
 *         - name
 *         - url
 *         - createdByUserId
 *         - createdByDate
 *       description: Información sobre un archivo adjunto relacionado con un dispositivo.
 */


/**
 * @swagger
 * components:
 *   schemas:
 *     IDeviceHistory:
 *       type: object
 *       properties:
 *         deviceHistoryId:
 *           type: integer
 *           example: 1
 *         deviceId:
 *           type: integer
 *           example: 123
 *         assignedToBusinessPartnerId:
 *           type: integer
 *           example: 2
 *         assignedToStartDate:
 *           type: string
 *           format: date
 *           example: "2024-08-01"
 *         assignedToEndDate:
 *           type: string
 *           format: date
 *           example: "2024-12-01"
 *         assignedByUserId:
 *           type: integer
 *           example: 456
 *       required:
 *         - deviceHistoryId
 *         - deviceId
 *         - assignedToBusinessPartnerId
 *         - assignedToStartDate
 *         - assignedByUserId
 *       description: Información sobre el historial de asignaciones de un dispositivo.
 */
