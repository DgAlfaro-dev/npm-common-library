import { UUID } from "crypto";

export interface IRequestHistoryRequest {
    requestId: number,
    eventName: string,
    indStatusOld: UUID,
    indStatusNew: UUID,
    detail: string,
    eventDateTime: Date,
    IP: string,
    usuarioId: number,
    eventDeviceInfo: string,
    internalNote: boolean,
}

/**
 * @swagger
 * components:
 *   schemas:
 *     IRequestHistoryRequest:
 *       type: object
 *       properties:
 *         requestId:
 *           type: integer
 *           example: 123
 *           description: ID de la solicitud asociada con este historial.
 *         eventName:
 *           type: string
 *           example: "Cambio de estado"
 *           description: Nombre del evento registrado en el historial.
 *         indStatusOld:
 *           type: string
 *           format: uuid
 *           example: "e0c5f48b-2eaf-4f2b-93c6-054a3e5bb5a7"
 *           description: Estado anterior de la solicitud.
 *         indStatusNew:
 *           type: string
 *           format: uuid
 *           example: "d1a7f8e7-3d4e-4c5a-9c3d-5d4a8b0e4b7a"
 *           description: Nuevo estado de la solicitud.
 *         detail:
 *           type: string
 *           example: "Detalles del cambio de estado"
 *           description: Descripción detallada del evento en el historial.
 *         eventDateTime:
 *           type: string
 *           format: date-time
 *           example: "2024-01-01T12:00:00Z"
 *           description: Fecha y hora en que ocurrió el evento.
 *         IP:
 *           type: string
 *           example: "192.168.1.1"
 *           description: Dirección IP desde la cual se realizó el cambio.
 *         usuarioId:
 *           type: integer
 *           example: 789
 *           description: ID del usuario que realizó el cambio.
 *         eventDeviceInfo:
 *           type: string
 *           example: "Navegador web - Chrome 90"
 *           description: Información sobre el dispositivo desde el cual se realizó el cambio.
 *         internalNote:
 *           type: boolean
 *           example: true
 *           description: Indica si la nota es interna.
 */
