export interface IRequestHistoryResponse {
    requestHistoryId: number,
    requestId: number,
    eventName: string,
    indStatusOld: string,
    indStatusNew: string,
    detail: string,
    eventDateTime: Date,
    IP: string,
    user: string,
    eventDeviceInfo: string,
    internalNote: boolean,
    attachments: IRequestAttachment[]
}

export interface IRequestAttachment {
    requestAttachmentId: number,
    requestId: number,
    fileName: string,
    fileInternalNote: string,
    fileUrl: string,
    requestHistoryId: number,
    idTypeFile: string,
}

/**
 * @swagger
 * components:
 *   schemas:
 *     IRequestHistoryResponse:
 *       type: object
 *       properties:
 *         requestHistoryId:
 *           type: integer
 *           example: 101
 *           description: ID único del historial de la solicitud.
 *         requestId:
 *           type: integer
 *           example: 202
 *           description: ID de la solicitud relacionada.
 *         eventName:
 *           type: string
 *           example: "Cambio de estado"
 *           description: Nombre del evento registrado en el historial.
 *         indStatusOld:
 *           type: string
 *           example: "Pendiente"
 *           description: Estado anterior de la solicitud.
 *         indStatusNew:
 *           type: string
 *           example: "En progreso"
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
 *         user:
 *           type: string
 *           example: "John Doe"
 *           description: Nombre del usuario que realizó el cambio.
 *         eventDeviceInfo:
 *           type: string
 *           example: "Navegador web - Chrome 90"
 *           description: Información sobre el dispositivo desde el cual se realizó el cambio.
 *         internalNote:
 *           type: boolean
 *           example: true
 *           description: Indica si la nota es interna.
 *         attachments:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/IRequestAttachment'
 *           description: Lista de archivos adjuntos relacionados con el historial de la solicitud.
 */


/**
 * @swagger
 * components:
 *   schemas:
 *     IRequestAttachment:
 *       type: object
 *       properties:
 *         requestAttachmentId:
 *           type: integer
 *           example: 301
 *           description: ID único del archivo adjunto.
 *         requestId:
 *           type: integer
 *           example: 202
 *           description: ID de la solicitud a la cual pertenece el archivo adjunto.
 *         fileName:
 *           type: string
 *           example: "documento.pdf"
 *           description: Nombre del archivo adjunto.
 *         fileInternalNote:
 *           type: string
 *           example: "Nota interna sobre el archivo"
 *           description: Nota interna relacionada con el archivo adjunto.
 *         fileUrl:
 *           type: string
 *           example: "https://example.com/documento.pdf"
 *           description: URL de acceso al archivo adjunto.
 *         requestHistoryId:
 *           type: integer
 *           example: 101
 *           description: ID del historial de la solicitud relacionado con el archivo adjunto.
 *         idTypeFile:
 *           type: string
 *           example: "PDF"
 *           description: Tipo de archivo adjunto.
 */
