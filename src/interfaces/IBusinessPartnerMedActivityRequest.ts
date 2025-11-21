import { UUID } from "crypto";

export interface IBusinessPartnerMedActivityRequest {
    activityId: number,
    diagnosticDate: Date,
    medicalRptId: number | null,
    note: string | null,
    activityFrequency: number,
    activityFrequencyMeasureId: UUID,
    activityTime: number | null,
    activityTimeMeasureId: UUID,
    activityTimeHour: number | null,
    indActive: boolean,
    inactivationNote: string | null,
    finishDateTime: Date,
    startDateTime: Date,
    endDateTime: Date
}


/**
 * @swagger
 * components:
 *   schemas:
 *     IBusinessPartnerMedActivityRequest:
 *       type: object
 *       properties:
 *         activityId:
 *           type: number
 *           description: Identificador único de la actividad médica.
 *         diagnosticDate:
 *           type: string
 *           format: date
 *           description: Fecha del diagnóstico asociado a la actividad.
 *         medicalRptId:
 *           type: number
 *           nullable: true
 *           description: Identificador opcional del reporte médico asociado.
 *         note:
 *           type: string
 *           nullable: true
 *           description: Nota adicional sobre la actividad médica.
 *         activityFrequency:
 *           type: number
 *           description: Frecuencia con la que se debe realizar la actividad.
 *         activityFrequencyMeasure:
 *           type: string
 *           description: Unidad de medida de la frecuencia de la actividad (ej. días, semanas).
 *         activityFrequencyMeasureId:
 *           type: string
 *           format: uuid
 *           description: Identificador único de la unidad de medida de la frecuencia.
 *         activityTime:
 *           type: number
 *           nullable: true
 *           description: Tiempo de duración de la actividad.
 *         activityTimeMeasure:
 *           type: string
 *           description: Unidad de medida del tiempo de la actividad (ej. minutos, horas).
 *         activityTimeMeasureId:
 *           type: string
 *           format: uuid
 *           description: Identificador único de la unidad de medida del tiempo de la actividad.
 *         activityTimeHour:
 *           type: number
 *           nullable: true
 *           description: Hora del día recomendada para realizar la actividad.
 *         registerDate:
 *           type: string
 *           format: date
 *           description: Fecha de registro de la actividad en el sistema.
 *         registeredBy:
 *           type: number
 *           description: Identificador del usuario que registra la actividad.
 *         endDate:
 *           type: string
 *           format: date
 *           nullable: true
 *           description: Fecha en la que la actividad fue marcada como inactiva, si aplica.
 *         endedBy:
 *           type: number
 *           nullable: true
 *           description: Identificador del usuario que marcó la actividad como inactiva, si aplica.
 *         indActive:
 *           type: boolean
 *           description: Indica si la actividad está activa.
 *         inactivationNote:
 *           type: string
 *           nullable: true
 *           description: Nota sobre la inactivación de la actividad, si aplica.
 *       required:
 *         - activityId
 *         - diagnosticDate
 *         - activityFrequency
 *         - activityFrequencyMeasure
 *         - activityFrequencyMeasureId
 *         - registerDate
 *         - registeredBy
 *         - indActive
*/