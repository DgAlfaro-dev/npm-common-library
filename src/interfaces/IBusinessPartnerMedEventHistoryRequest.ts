export interface IBusinessPartnerMedEventHistoryRequest {
    medicalEventTypeId: number,
    name: string,
    diagnosticDate: Date,
    medicalRptId: number | null,
    note: string,
    indActive: boolean,
    inactivationNote: string | null,
}


/**
 * @swagger
 * components:
 *   schemas:
 *     IBusinessPartnerMedEventHistoryRequest:
 *       type: object
 *       required:
 *         - medicalEventTypeId
 *         - name
 *         - diagnosticDate
 *         - note
 *         - registerDate
 *         - registeredBy
 *         - indActive
 *       properties:
 *         medicalEventTypeId:
 *           type: number
 *           description: Identificador único del tipo de evento médico.
 *         name:
 *           type: string
 *           description: Nombre del evento médico.
 *         diagnosticDate:
 *           type: string
 *           format: date-time
 *           description: Fecha del diagnóstico del evento médico.
 *         medicalRptId:
 *           type: number
 *           nullable: true
 *           description: Identificador del reporte médico asociado, si aplica.
 *         note:
 *           type: string
 *           description: Nota adicional sobre el evento médico.
 *         registerDate:
 *           type: string
 *           format: date-time
 *           description: Fecha de registro del evento médico.
 *         registeredBy:
 *           type: number
 *           description: Identificador del usuario que registra el evento.
 *         endDate:
 *           type: string
 *           format: date-time
 *           nullable: true
 *           description: Fecha en la que termina el evento médico, si aplica.
 *         endedBy:
 *           type: number
 *           nullable: true
 *           description: Identificador del usuario que finaliza el evento, si aplica.
 *         indActive:
 *           type: boolean
 *           description: Indicador de si el evento médico está activo.
 *         inactivationNote:
 *           type: string
 *           nullable: true
 *           description: Nota sobre la inactivación del evento, si aplica.
*/