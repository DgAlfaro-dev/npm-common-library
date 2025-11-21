import { ICatalogModel } from "./ICatalogModel.js";

export interface IStatusResponse {
    blockingReasonId: number,
    blockingReasonName: string,
    colour: string,
    colourId: ICatalogModel,
    indActive: boolean,
    indStatus: ICatalogModel,
    note: string
}


/**
 * @swagger
 * components:
 *   schemas:
 *     IStatusResponse:
 *       type: object
 *       properties:
 *         blockingReasonId:
 *           type: number
 *           description: El identificador único de la razón de bloqueo
 *         blockingReasonName:
 *           type: string
 *           description: El nombre de la razón de bloqueo
 *         colour:
 *           type: string
 *           description: Representación en texto del color asociado
 *         colourId:
 *           $ref: '#/components/schemas/ICatalogModel'
 *           description: Objeto de catálogo que representa el color
 *         indActive:
 *           type: boolean
 *           description: Indicador de si el estado está activo
 *         indStatus:
 *           $ref: '#/components/schemas/ICatalogModel'
 *           description: Objeto de catálogo que representa el estado
 *         note:
 *           type: string
 *           description: Nota adicional o comentario sobre el estado
 *       required:
 *         - blockingReasonId
 *         - blockingReasonName
 *         - colour
 *         - colourId
 *         - indActive
 *         - indStatus
 *         - note
 *       example:
 *         blockingReasonId: 1
 *         blockingReasonName: "Mantenimiento"
 *         colour: "Rojo"
 *         colourId: { id: 1, name: "Rojo", code: "RED" }
 *         indActive: true
 *         indStatus: { id: 2, name: "Activo", code: "ACTIVE" }
 *         note: "Revisión periódica del sistema"
 */
