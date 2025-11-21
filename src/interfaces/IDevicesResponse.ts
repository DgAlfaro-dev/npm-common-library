import { UUID } from "crypto";
import { IDeviceBrandResponse } from "./IDeviceBrandResponse.js";
import { IDeviceModelResponse } from "./IDeviceModelResponse.js";

export interface IDevicesResponse {
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
}



/**
 * @swagger
 * components:
 *   schemas:
 *     IDevicesResponse:
 *       type: object
 *       properties:
 *         deviceId:
 *           type: integer
 *           example: 123
 *           description: ID del dispositivo.
 *         deviceTypeId:
 *           type: integer
 *           example: 1
 *           description: ID del tipo de dispositivo.
 *         deviceTypeCode:
 *           type: string
 *           example: "SP"
 *           description: Código del tipo de dispositivo.
 *         deviceTypeDescription:
 *           type: string
 *           example: "Smartphone"
 *           description: Descripción del tipo de dispositivo.
 *         brandOd:
 *           type: string
 *           example: "Samsung"
 *           description: Marca del dispositivo.
 *         model:
 *           type: string
 *           example: "Galaxy S21"
 *           description: Modelo del dispositivo.
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
 *         indStatusId:
 *           type: integer
 *           example: 1
 *           description: ID del estado del dispositivo.
 *         indStatus:
 *           type: string
 *           example: "En uso"
 *           description: Estado del dispositivo.
 *         lastMaintainanceDate:
 *           type: string
 *           format: date
 *           example: "2024-08-20"
 *           description: Fecha de la última mantención.
 *         nextMaintainenceDate:
 *           type: string
 *           format: date
 *           example: "2024-12-20"
 *           description: Fecha de la próxima mantención.
 *         assignedToBusinessPartnerId:
 *           type: integer
 *           example: 2
 *           description: ID del socio de negocios asignado.
 *         country:
 *           type: string
 *           example: "Mexico"
 *           description: País donde se asigna el dispositivo.
 *         city:
 *           type: string
 *           example: "Mexico City"
 *           description: Ciudad donde se asigna el dispositivo.
 *         deviceBrand:
 *           $ref: '#/components/schemas/IDeviceBrandResponse'
 *         deviceModel:
 *           $ref: '#/components/schemas/IDeviceModelResponse'
 *         assignedToBusinessPartner:
 *           type: string
 *           example: "Empresa ABC"
 *           description: Nombre del socio de negocios asignado.
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
 *         - deviceId
 *         - deviceTypeId
 *         - brandOd
 *         - model
 *         - serie
 *         - IMEI
 *         - phoneNumber
 *         - indStatusId
 *         - indActive
 *       description: Datos de la respuesta al obtener una lista de dispositivos.
 */
