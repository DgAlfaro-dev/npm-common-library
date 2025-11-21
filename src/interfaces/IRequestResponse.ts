import { ICatalogModel } from "./ICatalogModel.js";

export interface IRequestResponse {
    aplicationId: number,
    aplicationType: string,
    applicant: string,
    clientName: string,
    clientId: number,
    affair: string,
    status: string,
    priority: string,
    applicantAssignee: string,
    incomeDate: Date,
    requiredDate: Date,
    applicationElapseTime: string,
    note: string,
    requestedBy: string,
}

/**
 * @swagger
 * components:
 *   schemas:
 *     IRequestResponse:
 *       type: object
 *       properties:
 *         aplicationId:
 *           type: integer
 *           example: 123
 *           description: ID único de la aplicación.
 *         aplicationType:
 *           type: string
 *           example: "Tipo de aplicación"
 *           description: Tipo de la aplicación.
 *         applicant:
 *           type: string
 *           example: "John Doe"
 *           description: Nombre del solicitante.
 *         clientName:
 *           type: string
 *           example: "Acme Corp"
 *           description: Nombre del cliente.
 *         clientId:
 *           type: integer
 *           example: 456
 *           description: ID del cliente.
 *         affair:
 *           type: string
 *           example: "Asunto importante"
 *           description: Asunto relacionado con la solicitud.
 *         status:
 *           type: string
 *           example: "Pendiente"
 *           description: Estado de la solicitud.
 *         priority:
 *           type: string
 *           example: "Alta"
 *           description: Prioridad de la solicitud.
 *         applicantAssignee:
 *           type: string
 *           example: "Jane Doe"
 *           description: Nombre del asignado del solicitante.
 *         incomeDate:
 *           type: string
 *           format: date-time
 *           example: "2024-01-01T10:00:00Z"
 *           description: Fecha de ingreso de la solicitud.
 *         requiredDate:
 *           type: string
 *           format: date-time
 *           example: "2024-01-10T10:00:00Z"
 *           description: Fecha requerida para la solicitud.
 *         applicationElapseTime:
 *           type: string
 *           example: "10 días"
 *           description: Tiempo transcurrido desde la solicitud.
 *         note:
 *           type: string
 *           example: "Nota importante sobre la solicitud"
 *           description: Nota adicional sobre la solicitud.
 *         requestedBy:
 *           type: string
 *           example: "John Doe"
 *           description: Persona que solicitó la aplicación.
 */
