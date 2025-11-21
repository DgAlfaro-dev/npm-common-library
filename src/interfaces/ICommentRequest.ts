import { IFileMetaData } from "./IFileMetaData.js"

export interface ICommentRequest {
    comment: string,
    internalNote: boolean,
    fileMetaData?: IFileMetaData
}

/**
 * @swagger
 * components:
 *   schemas:
 *     ICommentRequest:
 *       type: object
 *       properties:
 *         comment:
 *           type: string
 *           example: "Este es un comentario sobre la cotización."
 *           description: El texto del comentario.
 *         internalNote:
 *           type: boolean
 *           example: true
 *           description: Indica si el comentario es una nota interna.
 *         fileMetaData:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/IFileMetaData'
 *           description: Metadatos de archivos adjuntos al comentario.
 *       required:
 *         - comment
 *         - internalNote
 *       description: Modelo de solicitud para agregar un comentario a una cotización.
 */
