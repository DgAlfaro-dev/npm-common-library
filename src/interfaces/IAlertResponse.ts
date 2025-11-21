import { ICatalogModel } from "./ICatalogModel.js";

export interface IAlertResponse {
    alertId: number,
    usuario: IRegisteredBy,
    alertNumber: number,
    messageRecordId: number | null,
    title: string,
    detail: string,
    dateTimeSent: Date,
    dateTimeReceived: Date,
    persistentAlert: boolean,
    readed: boolean | null,
    dateTimeReaded: Date | null,
    idDeviceRecieved: string,
    notificationType: INotificationTypeResponse,
    agenda: IAgendaResponse | null,
    
}

export interface INotificationTypeResponse {
    notificationTypeId: number,
    nombre: string,
}

export interface IAgendaResponse {
    agendaId: number,
    aTitle: string,
    detail: string,
    StartDateTime: Date,
    FinishDateTime: Date,
    businessPartnerMedicineId: number,
    medicinePresentation: ICatalogModel,
    dosisFrequency: number,
    dosisFrequencyMeasure: ICatalogModel,
    dosisTime: number,
    dosisTimeMeasure: ICatalogModel,
    dosisMode: ICatalogModel,
    dosisNote?: string,
    origen: string;
    aRepeat: string;
    dosisQuantity: number;
    measureId: number;
}
 
export interface IRegisteredBy{
    usuarioId: number,
    loginUsr: string,
    nombre: string,
}

/**
 * @swagger
 * components:
 *   schemas:
 *     IAlertResponse:
 *       type: object
 *       properties:
 *         alertId:
 *           type: number
 *           description: Identificador único de la alerta
 *         title:
 *           type: string
 *           description: Título de la alerta
 *         detail:
 *           type: string
 *           description: Detalle de la alerta
 *         dateTimeSent:
 *           type: string
 *           format: date-time
 *           description: Fecha y hora en que se envió la alerta
 *         dateTimeReceived:
 *           type: string
 *           format: date-time
 *           description: Fecha y hora en que se recibió la alerta
 *         alertType:
 *           $ref: '#/components/schemas/IAlertTypeResponse'
 *         agenda:
 *           $ref: '#/components/schemas/IAgendaResponse'
 *       required:
 *         - alertId
 *         - title
 *         - detail
 *         - dateTimeSent
 *         - dateTimeReceived
 *         - alertType
 *         - agenda
 *       description: Respuesta de alerta que incluye detalles sobre la alerta y su tipo asociado.
 * 
 *     IAlertTypeResponse:
 *       type: object
 *       properties:
 *         alertTypeId:
 *           type: number
 *           description: Identificador único del tipo de alerta
 *         nombre:
 *           type: string
 *           description: Nombre del tipo de alerta
 *       required:
 *         - alertTypeId
 *         - nombre
 *       description: Respuesta del tipo de alerta que incluye detalles sobre el tipo de alerta.
 * 
 *     IAgendaResponse:
 *       type: object
 *       properties:
 *         agendaId:
 *           type: number
 *           description: Identificador único de la agenda
 *         aTitle:
 *           type: string
 *           description: Título de la agenda
 *         detail:
 *           type: string
 *           description: Detalle de la agenda
 *         startDateTime:
 *           type: string
 *           format: date-time
 *           description: Fecha y hora de inicio de la agenda
 *         finishDateTime:
 *           type: string
 *           format: date-time
 *           description: Fecha y hora de finalización de la agenda
 *       required:
 *         - agendaId
 *         - aTitle
 *         - detail
 *         - startDateTime
 *         - finishDateTime
 *       description: Respuesta de la agenda que incluye detalles sobre la agenda.
 */