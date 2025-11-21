
export interface IQuoteResponse {
    priorityName: string, 
    priorityColor: string,  
    quoteId: number,  
    customerName: string,
    businessPartnerId: number, 
    businessPartner: string, 
    businessPartnerRequesterId: number,  
    businessPartnerRequester: string,  
    elapsedTime: string, 
    totalAmount: number,  
    status: {
        name: string,
        description: string 
    },
    statusText: string,
    requestedDateTime: Date, 
}


/**
 * @swagger
 * components:
 *   schemas:
 *     IQuoteResponse:
 *       type: object
 *       properties:
 *         priorityName:
 *           type: string
 *           example: "High"
 *           description: Nombre de la prioridad de la cotización.
 *         priorityColor:
 *           type: string
 *           example: "#FF0000"
 *           description: Color asociado a la prioridad de la cotización.
 *         quoteId:
 *           type: integer
 *           example: 1
 *           description: ID de la cotización.
 *         customerName:
 *           type: string
 *           example: "John Doe"
 *           description: Nombre del cliente asociado a la cotización.
 *         businessPartnerId:
 *           type: integer
 *           example: 101
 *           description: ID del socio de negocios asociado a la cotización.
 *         businessPartner:
 *           type: string
 *           example: "Business Partner A"
 *           description: Nombre del socio de negocios.
 *         businessPartnerRequesterId:
 *           type: integer
 *           example: 202
 *           description: ID del solicitante de la cotización.
 *         businessPartnerRequester:
 *           type: string
 *           example: "Requester B"
 *           description: Nombre del solicitante de la cotización.
 *         elapsedTime:
 *           type: string
 *           example: "2 days"
 *           description: Tiempo transcurrido desde que se solicitó la cotización.
 *         totalAmount:
 *           type: number
 *           format: float
 *           example: 1500.00
 *           description: Monto total de la cotización.
 *         status:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *               example: "Pending"
 *               description: Estado actual de la cotización.
 *             description:
 *               type: string
 *               example: "Awaiting approval"
 *               description: Descripción del estado actual de la cotización.
 *         statusText:
 *           type: string
 *           example: "Pending approval"
 *           description: Texto descriptivo del estado de la cotización.
 *         requestedDateTime:
 *           type: string
 *           format: date-time
 *           example: "2024-01-15T08:00:00Z"
 *           description: Fecha y hora en que se solicitó la cotización.
 *       required:
 *         - priorityName
 *         - priorityColor
 *         - quoteId
 *         - customerName
 *         - businessPartnerId
 *         - businessPartner
 *         - businessPartnerRequesterId
 *         - businessPartnerRequester
 *         - elapsedTime
 *         - totalAmount
 *         - status
 *         - statusText
 *         - requestedDateTime
 *       description: Respuesta detallada de una cotización.
 */
