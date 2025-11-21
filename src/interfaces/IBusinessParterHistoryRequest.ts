import { UUID } from "crypto";

export interface IBusinessPartnerHistoryRequest {
    businessPartnerId: number;
    historyEventType: UUID;
    indStatusChgReason: number | null;
    indStatusOrigin: UUID | null;
    indStatusTarget: UUID | null;
    referenceId: string | null;
    indArchived: boolean;
    note: string | null;
}


/**
 * @swagger
 * components:
 *   schemas:
 *     IBusinessPartnerHistoryRequest:
 *       type: object
 *       properties:
 *         businessPartnerId:
 *           type: integer
 *           description: Identificador único del socio comercial.
 *         historyEventType:
 *           type: string
 *           format: uuid
 *           description: Identificador único del tipo de evento de historial.
 *         indStatusChgReason:
 *           type: integer
 *           nullable: true
 *           description: Identificador del motivo del cambio de estado, si aplica.
 *         indStatusOrigin:
 *           type: string
 *           format: uuid
 *           nullable: true
 *           description: Estado original del indicador, si aplica.
 *         indStatusTarget:
 *           type: string
 *           format: uuid
 *           nullable: true
 *           description: Estado objetivo del indicador, si aplica.
 *         referenceId:
 *           type: string
 *           nullable: true
 *           description: ID de referencia para el evento de historial, si aplica.
 *         indArchived:
 *           type: boolean
 *           description: Indica si el historial está archivado.
 *         note:
 *           type: string
 *           nullable: true
 *           description: Nota adicional sobre el evento de historial.
 *       required:
 *         - businessPartnerId
 *         - historyEventType
 *         - indArchived
 */