export interface ICreateAgendaRequest {
    agendaIdOrigin: number | null,
    notificationTypeId: number,
    aTitle: string,
    origen: string,
    detail: string,
    createdDate: Date,
    StartDateTime: Date,
    FinishDateTime: Date,
    aRepeat: string,
    RepeatFreq: number,
    Alert1: number | null,
    Alert2: number | null,
    Alert3: number | null,
    createdByUsuarioId: number,
    indActivo: boolean,
}   
   
/**
 * @swagger
 * components:
 *   schemas:
 *     ICreateAgendaRequest:
 *       type: object
 *       properties:
 *         agendaIdOrigin:
 *           type: number
 *           nullable: true
 *           example: 1
 *         usuarioId:
 *           type: number
 *           example: 123
 *         agendaTypeId:
 *           type: number
 *           example: 1
 *         aTitle:
 *           type: string
 *           example: Reunión de equipo
 *         origen:
 *           type: string
 *           example: Oficina
 *         detail:
 *           type: string
 *           example: Detalles de la reunión
 *         createdDate:
 *           type: string
 *           format: date-time
 *           example: "2024-02-16T12:00:00Z"
 *         StartDateTime:
 *           type: string
 *           format: date-time
 *           example: "2024-02-16T13:00:00Z"
 *         FinishDateTime:
 *           type: string
 *           format: date-time
 *           example: "2024-02-16T14:00:00Z"
 *         aRepeat:
 *           type: string
 *           example: Diario
 *         RepeatFreq:
 *           type: number
 *           example: 1
 *         Alert1:
 *           type: number
 *           nullable: true
 *           example: 15
 *         Alert2:
 *           type: number
 *           nullable: true
 *           example: 30
 *         Alert3:
 *           type: number
 *           nullable: true
 *           example: 60
 *         createdByUsuarioId:
 *           type: number
 *           example: 456
 *         indActivo:
 *           type: boolean
 *           example: true
 *       required:
 *         - usuarioId
 *         - agendaTypeId
 *         - aTitle
 *         - origen
 *         - detail
 *         - createdDate
 *         - StartDateTime
 *         - FinishDateTime
 *         - aRepeat
 *         - RepeatFreq
 *         - createdByUsuarioId
 *         - indActivo
 *       description: Solicitud para crear una agenda
 */