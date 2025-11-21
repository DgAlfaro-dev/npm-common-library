import { UUID } from "crypto";

/**
 * @swagger
 * components:
 *   schemas:
 *     BusinessPartnerAttachmentsRequest:
 *       type: object
 *       properties:
 *         idOrigin:
 *           type: integer
 *           description: Identificador del origen del adjunto.
 *         fileName:
 *           type: string
 *           description: Nombre del archivo adjunto.
 *         idFileType:
 *           type: string
 *           format: uuid
 *           description: UUID que representa el tipo de archivo del adjunto.
 *         fileInternalNote:
 *           type: string
 *           nullable: true
 *           description: Nota interna asociada con el archivo adjunto.
 *         createdDateTime:
 *           type: string
 *           format: date-time
 *           description: Fecha y hora en que se creó el adjunto.
 *         url:
 *           type: string
 *           format: uri
 *           description: URL para acceder al archivo adjunto.
 *       required:
 *         - idOrigin
 *         - fileName
 *         - idFileType
 *         - createdDateTime
 *         - url
 */
export interface IBusinessPartnerAttachmentsRequest {
  idOrigin: number;
  fileName: string;
  idFileType: UUID;
  fileInternalNote: string | null;
  createdDateTime: Date;
  url: string;
}

/**
 * @swagger
 * components:
 *   schemas:
 *     BusinessPartnerAttachmentsBulkCreateRequest:
 *       type: object
 *       properties:
 *         businessPartnersId:
 *           type: integer
 *           description: Identificador del socio comercial.
 *         idOrigin:
 *           type: integer
 *           description: Identificador del origen del adjunto.
 *         fileName:
 *           type: string
 *           description: Nombre del archivo adjunto.
 *         idFileType:
 *           type: string
 *           format: uuid
 *           description: UUID que representa el tipo de archivo del adjunto.
 *         fileInternalNote:
 *           type: any
 *           description: Nota interna asociada con el archivo adjunto, puede ser de cualquier tipo.
 *         createdDateTime:
 *           type: string
 *           format: date-time
 *           description: Fecha y hora en que se creó el adjunto.
 *         createdBy:
 *           type: any
 *           description: Identificador del usuario que creó el adjunto, puede ser de cualquier tipo.
 *         url:
 *           type: string
 *           format: uri
 *           description: URL para acceder al archivo adjunto.
 *       required:
 *         - businessPartnersId
 *         - idOrigin
 *         - fileName
 *         - idFileType
 *         - createdDateTime
 *         - createdBy
 *         - url
 */
export interface IBusinessPartnerAttachmentsBulkCreateRequest {
  businessPartnersId: number;
  idOrigin: number;
  fileName: string;
  idFileType: UUID;
  fileInternalNote: any;
  createdDateTime: Date;
  createdBy: any;
  url: string;
  businessPartnerHistoryId: number;
}

/**
 * @swagger
 * components:
 *   schemas:
 *     BusinessPartnerAttachmentsDataRequest:
 *       type: object
 *       properties:
 *         idOrigin:
 *           type: integer
 *           description: Identificador del origen del adjunto.
 *         fileName:
 *           type: string
 *           description: Nombre del archivo adjunto.
 *         idFileType:
 *           type: string
 *           format: uuid
 *           description: UUID que representa el tipo de archivo del adjunto.
 *         fileInternalNote:
 *           type: string
 *           nullable: true
 *           description: Nota interna opcional asociada con el archivo adjunto.
 *       required:
 *         - idOrigin
 *         - fileName
 *         - idFileType
 */
export interface IBusinessPartnerAttachmentsDataRequest{
  idOrigin?: number;
  fileName: string;
  idFileType: UUID;
  fileInternalNote: string | null;
  businessPartnerHistoryId: number;
}
