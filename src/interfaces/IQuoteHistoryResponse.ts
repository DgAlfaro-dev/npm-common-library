export interface IQuoteHistoryResponse {
    quoteHistoryId: number,
    quoteId: number,
    eventName: string,
    indStatusOld: string,
    indStatusNew: string,
    detail: string,
    eventDateTime: Date,
    IP: string,
    user: string,
    eventDeviceInfo: string,
    internalNote: boolean,
    attachments: IQuoteAttachment[]
}

export interface IQuoteAttachment {
    quoteAttachmentId: number,
    quoteId: number,
    fileName: string,
    fileInternalNote: string,
    fileUrl: string,
    quoteHistoryId: number,
    idTypeFile: string,
}

/**
 * @swagger
 * components:
 *   schemas:
 *     IQuoteHistoryResponse:
 *       type: object
 *       properties:
 *         quoteHistoryId:
 *           type: integer
 *           example: 1
 *           description: ID del historial de cotización.
 *         quoteId:
 *           type: integer
 *           example: 123
 *           description: ID de la cotización asociada.
 *         eventName:
 *           type: string
 *           example: "Cotización actualizada"
 *           description: Nombre del evento registrado en el historial.
 *         indStatusOld:
 *           type: string
 *           example: "Pendiente"
 *           description: Estado anterior de la cotización antes del evento.
 *         indStatusNew:
 *           type: string
 *           example: "Aprobado"
 *           description: Nuevo estado de la cotización después del evento.
 *         detail:
 *           type: string
 *           example: "Se cambió el estado de la cotización de Pendiente a Aprobado."
 *           description: Detalles adicionales sobre el evento.
 *         eventDateTime:
 *           type: string
 *           format: date-time
 *           example: "2024-01-15T08:00:00Z"
 *           description: Fecha y hora en la que ocurrió el evento.
 *         IP:
 *           type: string
 *           example: "192.168.0.1"
 *           description: Dirección IP del usuario que realizó la acción.
 *         user:
 *           type: string
 *           example: "usuario123"
 *           description: Nombre de usuario que realizó la acción.
 *         eventDeviceInfo:
 *           type: string
 *           example: "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"
 *           description: Información sobre el dispositivo utilizado para realizar la acción.
 *         internalNote:
 *           type: boolean
 *           example: true
 *           description: Indica si la nota registrada es interna.
 *         attachments:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/IQuoteAttachment'
 *           description: Lista de archivos adjuntos relacionados con el evento.
 *       required:
 *         - quoteHistoryId
 *         - quoteId
 *         - eventName
 *         - indStatusOld
 *         - indStatusNew
 *         - detail
 *         - eventDateTime
 *         - IP
 *         - user
 *         - eventDeviceInfo
 *         - internalNote
 *         - attachments
 *       description: Respuesta que contiene los detalles de un historial de cotización.
 */


/**
 * @swagger
 * components:
 *   schemas:
 *     IQuoteAttachment:
 *       type: object
 *       properties:
 *         quoteAttachmentId:
 *           type: integer
 *           example: 1
 *           description: ID único del archivo adjunto de la cotización.
 *         quoteId:
 *           type: integer
 *           example: 123
 *           description: ID de la cotización asociada a este archivo adjunto.
 *         fileName:
 *           type: string
 *           example: "cotizacion.pdf"
 *           description: Nombre del archivo adjunto.
 *         fileInternalNote:
 *           type: string
 *           example: "Documento importante para la revisión interna."
 *           description: Nota interna relacionada con el archivo adjunto.
 *         fileUrl:
 *           type: string
 *           example: "https://example.com/files/cotizacion.pdf"
 *           description: URL donde se encuentra el archivo adjunto.
 *         quoteHistoryId:
 *           type: integer
 *           example: 10
 *           description: ID del historial de cotización al que está asociado este archivo adjunto.
 *         idTypeFile:
 *           type: string
 *           example: "550e8400-e29b-41d4-a716-446655440000"
 *           description: UUID que representa el tipo de archivo.
 *       required:
 *         - quoteAttachmentId
 *         - quoteId
 *         - fileName
 *         - fileInternalNote
 *         - fileUrl
 *         - quoteHistoryId
 *         - idTypeFile
 *       description: Representa un archivo adjunto asociado a una cotización o a su historial.
 */
