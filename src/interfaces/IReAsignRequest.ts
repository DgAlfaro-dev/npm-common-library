import { UUID } from "crypto";
import { IFileMetaData } from "./IFileMetaData.js";

export interface IReAsignRequest {
    transferTo: number,
    reasonId: UUID,
    comment: string,
    internalNote: boolean
    fileMetaData?: IFileMetaData
}

/**
 * @swagger
 * components:
 *   schemas:
 *     IReAsignRequest:
 *       type: object
 *       properties:
 *         transferTo:
 *           type: integer
 *           example: 2
 *           description: ID del usuario al que se va a transferir la cotización.
 *         reasonId:
 *           type: string
 *           format: uuid
 *           example: "550e8400-e29b-41d4-a716-446655440000"
 *           description: ID del motivo de la reasignación.
 *         comment:
 *           type: string
 *           example: "El usuario no está disponible para continuar con la cotización."
 *           description: Comentario explicando la reasignación.
 *         internalNote:
 *           type: boolean
 *           example: true
 *           description: Indica si la nota es interna.
 *         fileMetaData:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/IFileMetaData'
 *           description: Metadatos de archivos adjuntos a la reasignación.
 *       required:
 *         - transferTo
 *         - reasonId
 *         - comment
 *         - internalNote
 *       description: Modelo de solicitud para reasignar una cotización a otro usuario.
 */
