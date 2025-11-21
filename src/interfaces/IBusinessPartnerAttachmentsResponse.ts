import { UUID } from "crypto";
import { ICatalogModel } from "./ICatalogModel.js";

export interface IBusinessPartnerAttachmentsResponse{
    businessPartnerAttachmentsId: number,
    businessPartnersId: number,
    idOrigin: number,
    fileName: string,
    idFileType: ICatalogModel,
    fileInternalNote: string | null,
    cratedBy: number,
    createdDateTime: Date,
    url: string,
    businessPartnerHistoryId: number,
}





/**
 * @swagger
 * components:
 *   schemas:
 *     BusinessPartnerAttachmentsResponse:
 *       type: object
 *       properties:
 *         businessPartnerAttachmentsId:
 *           type: integer
 *           description: Identificador único del adjunto del socio comercial.
 *         businessPartnersId:
 *           type: integer
 *           description: Identificador del socio comercial al que pertenece el adjunto.
 *         idOrigin:
 *           type: integer
 *           description: Identificador del origen del adjunto.
 *         fileName:
 *           type: string
 *           description: Nombre del archivo adjunto.
 *         idFileType:
 *           $ref: '#/components/schemas/CatalogModel'
 *           description: Modelo de catálogo que representa el tipo de archivo del adjunto.
 *         fileInternalNote:
 *           type: string
 *           nullable: true
 *           description: Nota interna asociada con el archivo adjunto.
 *         cratedBy:
 *           type: integer
 *           description: Identificador del usuario que creó el adjunto.
 *         createdDateTime:
 *           type: string
 *           format: date-time
 *           description: Fecha y hora en que se creó el adjunto.
 *         url:
 *           type: string
 *           format: uri
 *           description: URL para acceder al archivo adjunto.
 *       required:
 *         - businessPartnerAttachmentsId
 *         - businessPartnersId
 *         - idOrigin
 *         - fileName
 *         - idFileType
 *         - cratedBy
 *         - createdDateTime
 *         - url
 */