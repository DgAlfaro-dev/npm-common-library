import { UUID } from 'crypto';

export interface IBusinessPartnerAttachmentsRequestUpdate {
  businessPartnersId: number;
  idOrigin: number;
  fileName: string;
  idFileType: UUID;
  fileInternalNote: any;
  createdDateTime: Date;
  createdBy: any;
  url: string;
  businessPartnerHistoryId: number
}

/**
 * @swagger
 * components:
 *   schemas:
 *     BusinessPartnerAttachmentsRequestUpdate:
 *       type: object
 *       properties:
 *         businessPartnersId:
 *           type: integer
 *           description: Identificador del socio comercial al que se está actualizando el adjunto.
 *         idOrigin:
 *           type: integer
 *           description: Identificador del origen del adjunto.
 *         fileName:
 *           type: string
 *           description: Nombre nuevo o actual del archivo adjunto.
 *         idFileType:
 *           type: string
 *           format: uuid
 *           description: UUID que representa el nuevo o actual tipo de archivo del adjunto.
 *         fileInternalNote:
 *           type: any
 *           description: Nota interna asociada con el archivo adjunto, puede ser de cualquier tipo para permitir flexibilidad en la actualización.
 *         createdDateTime:
 *           type: string
 *           format: date-time
 *           description: Fecha y hora de creación del adjunto. Generalmente no se cambia, pero se incluye para completitud.
 *         createdBy:
 *           type: any
 *           description: Identificador del usuario que creó o está actualizando el adjunto, puede ser de cualquier tipo para permitir flexibilidad.
 *         url:
 *           type: string
 *           format: uri
 *           description: Nueva URL de acceso al archivo adjunto, en caso de que el archivo haya sido reemplazado o movido.
 *       required:
 *         - businessPartnersId
 *         - idOrigin
 *         - fileName
 *         - idFileType
 *         - createdDateTime
 *         - createdBy
 *         - url
 */