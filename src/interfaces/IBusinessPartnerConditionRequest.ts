export interface IBusinessPartnerConditionRequest {
    conditionId: number,
    diagnosticDate: Date,
    medicalRptId: number | null,
    note: string | null,
    endDate: Date | null,
    endedBy: number | null,
    indActive: boolean,
    inactivationNote: string | null,
}


/**
 * @swagger
 * components:
 *   schemas:
 *     IBusinessPartnerConditionRequest:
 *       type: object
 *       properties:
 *         conditionId:
 *           type: number
 *           description: Identificador único de la condición médica.
 *         diagnosticDate:
 *           type: string
 *           format: date
 *           description: Fecha del diagnóstico de la condición.
 *         medicalRptId:
 *           type: number
 *           nullable: true
 *           description: Identificador opcional del reporte médico asociado a la condición.
 *         note:
 *           type: string
 *           nullable: true
 *           description: Nota adicional sobre la condición.
 *         registerDate:
 *           type: string
 *           format: date
 *           description: Fecha de registro de la condición en el sistema.
 *         registeredBy:
 *           type: number
 *           description: Identificador del usuario que registra la condición.
 *         endDate:
 *           type: string
 *           format: date
 *           nullable: true
 *           description: Fecha en la que la condición fue marcada como inactiva, si aplica.
 *         endedBy:
 *           type: number
 *           nullable: true
 *           description: Identificador del usuario que marcó la condición como inactiva, si aplica.
 *         indActive:
 *           type: boolean
 *           description: Indica si la condición está activa.
 *         inactivationNote:
 *           type: string
 *           nullable: true
 *           description: Nota sobre la inactivación de la condición, si aplica.
 *       required:
 *         - conditionId
 *         - diagnosticDate
 *         - registerDate
 *         - registeredBy
 *         - indActive
*/