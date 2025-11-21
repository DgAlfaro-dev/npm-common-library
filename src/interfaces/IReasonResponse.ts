export interface IReasonResponse {
    reasonId: number,
    docType: string,
    name: string,
    note: string,
    indActive: boolean
}

/**
 * @swagger
 * components:
 *   schemas:
 *     IReasonResponse:
 *       type: object
 *       properties:
 *         reasonId:
 *           type: integer
 *           example: 1
 *           description: ID único de la razón.
 *         docType:
 *           type: string
 *           example: "Invoice"
 *           description: Tipo de documento asociado a la razón.
 *         name:
 *           type: string
 *           example: "Cliente no disponible"
 *           description: Nombre de la razón.
 *         note:
 *           type: string
 *           example: "El cliente no estaba disponible para la cita programada."
 *           description: Nota adicional sobre la razón.
 *         indActive:
 *           type: boolean
 *           example: true
 *           description: Indica si la razón está activa.
 *       required:
 *         - reasonId
 *         - docType
 *         - name
 *         - note
 *         - indActive
 *       description: Representa una razón utilizada en el sistema.
 */
