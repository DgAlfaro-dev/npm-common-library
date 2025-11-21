import { UUID } from "crypto";
import { IFileMetaData } from "./IFileMetaData.js";

export interface IReSchedule {
    scheduleDateTime: Date,
    reasonId: UUID,
    comment: string,
    internalNote: boolean
    fileMetaData?: IFileMetaData
}

/**
 * @swagger
 * components:
 *   schemas:
 *     IReSchedule:
 *       type: object
 *       properties:
 *         scheduleDateTime:
 *           type: string
 *           format: date-time
 *           example: "2024-02-20T10:00:00Z"
 *           description: Fecha y hora reprogramada para la cotización.
 *         reasonId:
 *           type: string
 *           format: uuid
 *           example: "550e8400-e29b-41d4-a716-446655440000"
 *           description: ID del motivo de la reprogramación.
 *         comment:
 *           type: string
 *           example: "El cliente solicitó reprogramar la cita."
 *           description: Comentario explicando la reprogramación.
 *         internalNote:
 *           type: boolean
 *           example: true
 *           description: Indica si el comentario es una nota interna.
 *         fileMetaData:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/IFileMetaData'
 *           description: Metadatos de archivos adjuntos a la reprogramación.
 *       required:
 *         - scheduleDateTime
 *         - reasonId
 *         - comment
 *         - internalNote
 *       description: Modelo de solicitud para reprogramar una cotización a otra fecha u hora.
 */
