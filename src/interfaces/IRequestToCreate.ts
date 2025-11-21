import { UUID } from "crypto";
import { IFileMetaData } from "./IFileMetaData.js";

export interface IRequestToCreate {
    requestedBy: number,
    requestSubCategoryId: number,
    businessPartnerId: number,
    businessPartnerAddressId: number,
    subject: string,
    note: string,
    indPriorityId: number,
    assignedUserId: number,
    reportedDateTime: Date,
    scheduledDateTime: Date,
    supplierId: number,
    filesMetaData: IFileMetaData[]
}

/**
 * @swagger
 * components:
 *   schemas:
 *     IRequestToCreate:
 *       type: object
 *       properties:
 *         requestedBy:
 *           type: integer
 *           example: 123
 *           description: ID del usuario que solicita la creación de la solicitud.
 *         requestSubCategoryId:
 *           type: integer
 *           example: 456
 *           description: ID de la subcategoría de la solicitud.
 *         businessPartnerId:
 *           type: integer
 *           example: 789
 *           description: ID del socio de negocios relacionado con la solicitud.
 *         businessPartnerAddressId:
 *           type: integer
 *           example: 101
 *           description: ID de la dirección del socio de negocios.
 *         subject:
 *           type: string
 *           example: "Asunto de la solicitud"
 *           description: Asunto de la solicitud.
 *         note:
 *           type: string
 *           example: "Nota adicional sobre la solicitud"
 *           description: Nota adicional sobre la solicitud.
 *         indPriorityId:
 *           type: integer
 *           example: 102
 *           description: ID de la prioridad de la solicitud.
 *         assignedUserId:
 *           type: integer
 *           example: 203
 *           description: ID del usuario asignado a la solicitud.
 *         reportedDateTime:
 *           type: string
 *           format: date-time
 *           example: "2024-01-01T12:00:00Z"
 *           description: Fecha y hora en que se reportó la solicitud.
 *         scheduledDateTime:
 *           type: string
 *           format: date-time
 *           example: "2024-01-02T15:00:00Z"
 *           description: Fecha y hora programada para la solicitud.
 *         supplierId:
 *           type: integer
 *           example: 304
 *           description: ID del proveedor relacionado con la solicitud.
 *         filesMetaData:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/IFileMetaData'
 *           description: Lista de metadatos de archivos adjuntos relacionados con la solicitud.
 */
