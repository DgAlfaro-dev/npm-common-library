import { UUID } from "crypto";

export interface IQuoteHistoryRequest {
    quoteId: number,
    eventName: string,
    indStatusOld: UUID,
    indStatusNew: UUID,
    detail: string,
    eventDateTime: Date,
    IP: string,
    userId: number,
    eventDeviceInfo: string,
    internalNote: boolean,
}

/**
 * @swagger
 * components:
 *   schemas:
 *     IQuoteHistoryRequest:
 *       type: object
 *       properties:
 *         quoteId:
 *           type: integer
 *           example: 123
 *           description: ID de la cotización asociada.
 *         eventName:
 *           type: string
 *           example: "Cotización actualizada"
 *           description: Nombre del evento.
 *         indStatusOld:
 *           type: string
 *           format: uuid
 *           example: "550e8400-e29b-41d4-a716-446655440000"
 *           description: ID del estado anterior.
 *         indStatusNew:
 *           type: string
 *           format: uuid
 *           example: "550e8400-e29b-41d4-a716-446655440000"
 *           description: ID del nuevo estado.
 *         detail:
 *           type: string
 *           example: "Se cambió el estado de la cotización."
 *           description: Detalle del evento.
 *         eventDateTime:
 *           type: string
 *           format: date-time
 *           example: "2024-01-15T08:00:00Z"
 *           description: Fecha y hora del evento.
 *         IP:
 *           type: string
 *           example: "192.168.0.1"
 *           description: Dirección IP del usuario que realizó el evento.
 *         userId:
 *           type: integer
 *           example: 1
 *           description: ID del usuario que realizó el evento.
 *         eventDeviceInfo:
 *           type: string
 *           example: "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"
 *           description: Información del dispositivo desde donde se realizó el evento.
 *         internalNote:
 *           type: boolean
 *           example: true
 *           description: Indica si la nota es interna.
 *       required:
 *         - quoteId
 *         - eventName
 *         - indStatusOld
 *         - indStatusNew
 *         - detail
 *         - eventDateTime
 *         - IP
 *         - userId
 *         - eventDeviceInfo
 *         - internalNote
 *       description: Modelo de solicitud para crear o actualizar un historial de cotización.
 */
