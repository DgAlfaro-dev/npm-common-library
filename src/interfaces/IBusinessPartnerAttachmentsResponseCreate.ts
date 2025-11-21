import { UUID } from 'crypto';

export interface IBusinessPartnerAttachmentsResponseCreate {
  businessPartnerAttachmentsId: number;
  businessPartnersId: number;
  idOrigin: number;
  fileName: string;
  idFileType: UUID;
  fileInternalNote: string | null;
  createdBy: number;
  createdDateTime: Date;
  url: string;
  businessPartnerHistoryId: number;
}


/**
 * @swagger
 * components:
 *   schemas:
 *     BusinessPartnerAttachmentsResponseCreate:
 *       type: object
 *       properties:
 *         businessPartnerAttachmentsId:
 *           type: integer
 *           description: Identificador único del adjunto creado para el socio comercial.
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
 *           type: string
 *           format: uuid
 *           description: UUID que representa el tipo de archivo del adjunto.
 *         fileInternalNote:
 *           type: string
 *           nullable: true
 *           description: Nota interna asociada con el archivo adjunto. Puede ser null.
 *         createdBy:
 *           type: integer
 *           description: Identificador del usuario que creó el adjunto.
 *         createdDateTime:
 *           type: string
 *           format: date-time
 *           description: Fecha y hora de creación del adjunto.
 *         url:
 *           type: string
 *           format: uri
 *           description: URL de acceso al archivo adjunto.
 *       required:
 *         - businessPartnerAttachmentsId
 *         - businessPartnersId
 *         - idOrigin
 *         - fileName
 *         - idFileType
 *         - createdBy
 *         - createdDateTime
 *         - url
 */