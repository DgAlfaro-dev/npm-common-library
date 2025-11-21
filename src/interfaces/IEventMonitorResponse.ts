export interface IEventMonitorResponse {
    id: number,
    callId: string,
    sessionId: string,
    status: GeneralStatus,
    callStatus: CallStatus,
    createdAt: Date,
    endedAt: Date,
    elapsedTime: string,
    members: IEventMonitorParticipant[]
    type: EventType,
    firstNameAgent: string,
    secondNameAgent: string,
    firstSurnameAgent: string,
    secondSurnameAgent: string,
    patientId: number,
    firstPatientName: string,
    secondPatientName: string,
    patientLastName: string,
    patientSecondLastName: string,
    patientAge: number,
    basePlan: string,
    firstFirstNameResponsible: string,
    secondFirstNameResponsible: string,
    firstSurnameResponsible: string,
    secondSurnameResponsible: string,
    patientDateOfBirth: Date
}

export interface IUsuario {
    usuarioId: number,
    loginUsr: string,
    getStreamId: string,
    email: string,
    nombre: string,
    clienteId: number,
    status: UserStatus,
    indEstado: boolean,
    isAgent: boolean,
    isDoctor: boolean,
    tipoUsuario: userTypeEnum,
    businessPartner: IBusinessPartner
}

interface IBusinessPartner {
    businessPartnerId: number,
    fistName: string,
    secondName: string,
    lastName: string,
    sLastName: string,
    basePlan: IBasePlan,
    dateOfBirth: Date,
    virtualAgentId: IVirtualAgent
    responsibles: IResponsible[],
}

export interface IResponsible {
    businessPartnerResponsibleId: number,
    firstName: string,
    secondName: string,
    lastName: string,
    sLastName: string,
    indPriority: IIndPriority
}

interface IIndPriority {
    priorityId: number,
    priorityName: string,
    colour: string,
    indActive: boolean
}

interface IVirtualAgent {
    usuarioId: number,
    nombre: string
}

interface IBasePlan {
    basePlanId: number,
    basePlanName: string,
    indActive: boolean,
    note: string
}

enum userTypeEnum {
    Oficina = 'oficina',
    Cuidador = 'cuidador',
    Paciente = 'paciente'
}

enum UserStatus {
    AVAILABLE = 'available',
    BUSY = 'busy',
    NOT_DISTURB = 'not_disturb',
    OFFLINE = 'offline',
    ON_CALL = 'on_call',
  }

export interface IEventMonitorParticipant {
    eventId: number,
    usuarioId: number,
    role: string,
    firstNameAgent: string,
    secondNameAgent: string,
    firstSurnameAgent: string,
    secondSurnameAgent: string,
}

enum CallStatus {
    RINGING = 'ringing',
    ONGOING = 'ongoing',
    REJECTED = 'rejected',
    ENDED = 'ended',
}

export enum GeneralStatus {
    NOT_STARTED = 'notStarted',
    IN_PROGRESS = 'inProgress',
    CLOSED = 'closed',
  }

  export enum EventType {
    CALL = 'call',
    VIDEO_CALL = 'videoCall',
    SOS = 'sos',
    GPS_DISCONNECTION = 'GPSDisconnection',
    GPS_CONTROL = 'GPSControl',
    LOW_BATTERY = 'lowBattery',
    FALL = 'fall',
  }


  /**
 * @swagger
 * components:
 *   schemas:
 *     IEventMonitorResponse:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         callId:
 *           type: string
 *           example: "c123456"
 *         sessionId:
 *           type: string
 *           example: "s123456"
 *         status:
 *           type: string
 *           enum: [notStarted, inProgress, closed]
 *           example: "inProgress"
 *         callStatus:
 *           type: string
 *           enum: [ringing, ongoing, rejected, ended]
 *           example: "ongoing"
 *         createdAt:
 *           type: string
 *           format: date-time
 *           example: "2024-08-20T12:00:00Z"
 *         endedAt:
 *           type: string
 *           format: date-time
 *           example: "2024-08-20T12:30:00Z"
 *         elapsedTime:
 *           type: string
 *           example: "30m"
 *         members:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/IEventMonitorParticipant'
 *         type:
 *           type: string
 *           enum: [call, videoCall, sos, GPSDisconnection, GPSControl, lowBattery, fall]
 *           example: "call"
 *         firstNameAgent:
 *           type: string
 *           example: "John"
 *         secondNameAgent:
 *           type: string
 *           example: "Doe"
 *         firstSurnameAgent:
 *           type: string
 *           example: "Smith"
 *         secondSurnameAgent:
 *           type: string
 *           example: "Johnson"
 *         patientId:
 *           type: integer
 *           example: 101
 *         firstPatientName:
 *           type: string
 *           example: "Jane"
 *         secondPatientName:
 *           type: string
 *           example: "A."
 *         patientLastName:
 *           type: string
 *           example: "Doe"
 *         patientSecondLastName:
 *           type: string
 *           example: "Smith"
 *         patientAge:
 *           type: integer
 *           example: 65
 *         basePlan:
 *           type: string
 *           example: "Plan Básico"
 *         firstFirstNameResponsible:
 *           type: string
 *           example: "John"
 *         secondFirstNameResponsible:
 *           type: string
 *           example: "Doe"
 *         firstSurnameResponsible:
 *           type: string
 *           example: "Smith"
 *         secondSurnameResponsible:
 *           type: string
 *           example: "Johnson"
 *         patientDateOfBirth:
 *           type: string
 *           format: date
 *           example: "1959-08-20"
 *       required:
 *         - id
 *         - callId
 *         - sessionId
 *         - status
 *         - type
 *         - firstNameAgent
 *         - patientId
 *         - firstPatientName
 *         - patientLastName
 *         - basePlan
 *       description: Respuesta con la información de un evento de monitoreo.
 */


  /**
 * @swagger
 * components:
 *   schemas:
 *     IEventMonitorParticipant:
 *       type: object
 *       properties:
 *         eventId:
 *           type: integer
 *           example: 1001
 *         usuarioId:
 *           type: integer
 *           example: 2002
 *         role:
 *           type: string
 *           example: "Doctor"
 *         firstNameAgent:
 *           type: string
 *           example: "John"
 *         secondNameAgent:
 *           type: string
 *           example: "Doe"
 *         firstSurnameAgent:
 *           type: string
 *           example: "Smith"
 *         secondSurnameAgent:
 *           type: string
 *           example: "Johnson"
 *       required:
 *         - eventId
 *         - usuarioId
 *         - role
 *         - firstNameAgent
 *         - firstSurnameAgent
 *       description: Información sobre un participante en el evento de monitoreo.
 */


  /**
 * @swagger
 * components:
 *   schemas:
 *     ListPagedResponse_IEventMonitorResponse:
 *       type: object
 *       properties:
 *         items:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/IEventMonitorResponse'
 *         totalItems:
 *           type: integer
 *           example: 100
 *         totalPages:
 *           type: integer
 *           example: 10
 *         currentPage:
 *           type: integer
 *           example: 1
 *       required:
 *         - items
 *         - totalItems
 *         - totalPages
 *         - currentPage
 *       description: Estructura de respuesta para listas paginadas de eventos de monitoreo.
 */


  