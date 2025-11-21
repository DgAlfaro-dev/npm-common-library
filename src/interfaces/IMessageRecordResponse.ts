export interface IMessageRecordResponse {
    messageRecordId: number,
    messageType: IMessageType,
    title: string,
    bodyMessage: string,
    language: string,
    countryId: number,
    countryName: string,
    stateId: number,
    stateName: string,
    cityId: number,
    cityName: string,
    createdByUsuarioId: number,
    scheduledDateTime: Date,
    persistetAlert: boolean,
    indStado: string,
    messageRecordTo: IMessageRecordTo[],
    messageRecordToGroup: IMessageRecordToGroup[],
}

interface IMessageType {
    messageTypeId: number,
    mtName: string,
    indActive: boolean
}

export interface IMessageRecordTo {
    messageRecordToId: number,
    messageRecordId: number,
    toUsuarioId: number,
    deliveredDateTime: Date,
    indEstado: string
}

export interface IMessageRecordToGroup {
    messageRecordToGroupId: number,
    messageRecordId: number,
    businessPartnerGroupId: number,
    scheduledDateTime: Date,
    deliveredDateTime: Date,
    indEstado: string,
}


/**
 * @swagger
 * components:
 *   schemas:
 *     IMessageRecordResponse:
 *       type: object
 *       properties:
 *         messageRecordId:
 *           type: integer
 *           example: 123
 *           description: ID del registro de mensaje.
 *         messageType:
 *           $ref: '#/components/schemas/IMessageType'
 *         title:
 *           type: string
 *           example: "Aviso Importante"
 *           description: Título del mensaje.
 *         bodyMessage:
 *           type: string
 *           example: "Este es un mensaje importante para todos los usuarios."
 *           description: Cuerpo del mensaje.
 *         language:
 *           type: string
 *           example: "ES"
 *           description: Idioma del mensaje.
 *         countryId:
 *           type: integer
 *           example: 1
 *           description: ID del país al que está dirigido el mensaje.
 *         countryName:
 *           type: string
 *           example: "México"
 *           description: Nombre del país.
 *         stateId:
 *           type: integer
 *           example: 2
 *           description: ID del estado al que está dirigido el mensaje.
 *         stateName:
 *           type: string
 *           example: "Ciudad de México"
 *           description: Nombre del estado.
 *         cityId:
 *           type: integer
 *           example: 3
 *           description: ID de la ciudad a la que está dirigido el mensaje.
 *         cityName:
 *           type: string
 *           example: "Ciudad de México"
 *           description: Nombre de la ciudad.
 *         createdByUsuarioId:
 *           type: integer
 *           example: 456
 *           description: ID del usuario que creó el mensaje.
 *         scheduledDateTime:
 *           type: string
 *           format: date-time
 *           example: "2024-09-01T10:00:00Z"
 *           description: Fecha y hora programada para enviar el mensaje.
 *         persistetAlert:
 *           type: boolean
 *           example: true
 *           description: Indica si la alerta es persistente.
 *         indStado:
 *           type: string
 *           example: "Enviado"
 *           description: Estado del mensaje.
 *         messageRecordTo:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/IMessageRecordTo'
 *         messageRecordToGroup:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/IMessageRecordToGroup'
 *       required:
 *         - messageRecordId
 *         - messageType
 *         - title
 *         - bodyMessage
 *         - language
 *         - countryId
 *         - createdByUsuarioId
 *         - scheduledDateTime
 *         - persistetAlert
 *         - indStado
 *       description: Información detallada de un registro de mensaje.
 */


/**
 * @swagger
 * components:
 *   schemas:
 *     IMessageType:
 *       type: object
 *       properties:
 *         messageTypeId:
 *           type: integer
 *           example: 1
 *           description: ID del tipo de mensaje.
 *         mtName:
 *           type: string
 *           example: "Notificación"
 *           description: Nombre del tipo de mensaje.
 *         indActive:
 *           type: boolean
 *           example: true
 *           description: Indica si el tipo de mensaje está activo.
 *       required:
 *         - messageTypeId
 *         - mtName
 *         - indActive
 *       description: Información del tipo de mensaje.
 */


/**
 * @swagger
 * components:
 *   schemas:
 *     IMessageRecordTo:
 *       type: object
 *       properties:
 *         messageRecordToId:
 *           type: integer
 *           example: 1
 *           description: ID del destinatario del mensaje.
 *         messageRecordId:
 *           type: integer
 *           example: 123
 *           description: ID del registro de mensaje al que pertenece este destinatario.
 *         toUsuarioId:
 *           type: integer
 *           example: 456
 *           description: ID del usuario destinatario del mensaje.
 *         deliveredDateTime:
 *           type: string
 *           format: date-time
 *           example: "2024-09-01T10:05:00Z"
 *           description: Fecha y hora en que se entregó el mensaje.
 *         indEstado:
 *           type: string
 *           example: "Entregado"
 *           description: Estado del mensaje para este destinatario.
 *       required:
 *         - messageRecordToId
 *         - messageRecordId
 *         - toUsuarioId
 *         - indEstado
 *       description: Información de un destinatario específico de un mensaje.
 */


/**
 * @swagger
 * components:
 *   schemas:
 *     IMessageRecordToGroup:
 *       type: object
 *       properties:
 *         messageRecordToGroupId:
 *           type: integer
 *           example: 1
 *           description: ID del grupo destinatario del mensaje.
 *         messageRecordId:
 *           type: integer
 *           example: 123
 *           description: ID del registro de mensaje al que pertenece este grupo destinatario.
 *         businessPartnerGroupId:
 *           type: integer
 *           example: 789
 *           description: ID del grupo de socios comerciales destinatario del mensaje.
 *         scheduledDateTime:
 *           type: string
 *           format: date-time
 *           example: "2024-09-01T10:00:00Z"
 *           description: Fecha y hora programada para enviar el mensaje al grupo.
 *         deliveredDateTime:
 *           type: string
 *           format: date-time
 *           example: "2024-09-01T10:05:00Z"
 *           description: Fecha y hora en que se entregó el mensaje al grupo.
 *         indEstado:
 *           type: string
 *           example: "Entregado"
 *           description: Estado del mensaje para este grupo destinatario.
 *       required:
 *         - messageRecordToGroupId
 *         - messageRecordId
 *         - businessPartnerGroupId
 *         - indEstado
 *       description: Información de un grupo destinatario específico de un mensaje.
 */


/**
 * @swagger
 * components:
 *   schemas:
 *     IListPagedResponse_IMessageRecordResponse:
 *       type: object
 *       properties:
 *         items:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/IMessageRecordResponse'
 *         totalItems:
 *           type: integer
 *           example: 100
 *           description: Total de registros de mensajes.
 *         totalPages:
 *           type: integer
 *           example: 10
 *           description: Total de páginas disponibles.
 *         currentPage:
 *           type: integer
 *           example: 1
 *           description: Número de la página actual.
 *       required:
 *         - items
 *         - totalItems
 *         - totalPages
 *         - currentPage
 *       description: Estructura de respuesta para listas paginadas de registros de mensajes.
 */
