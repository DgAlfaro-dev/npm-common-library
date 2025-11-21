export interface IBusinessPartnerMedFamilyEventHistoryRequest{
    medicalEventTypeId: number,
    medicalRptId: number,
    name: string,
    note: string | null,
    indActive: boolean,
    inactivationNote: string | null
}
/**
 * @swagger
 * components:
 *   schemas:
 *     IBusinessPartnerMedFamilyEventHistoryRequest:
 *       type: object
 *       required:
 *         - medicalEventTypeId
 *         - name
 *         - registerDate
 *         - registeredBy
 *         - indActive
 *       properties:
 *         medicalEventTypeId:
 *           type: number
 *           description: Identificador único del tipo de evento médico.
 *         name:
 *           type: string
 *           description: Nombre del evento médico familiar.
 *         note:
 *           type: string
 *           nullable: true
 *           description: Nota adicional sobre el evento médico familiar.
 *         registerDate:
 *           type: string
 *           format: date-time
 *           description: Fecha de registro del evento médico familiar.
 *         registeredBy:
 *           type: number
 *           description: Identificador del usuario que registra el evento.
 *         endDate:
 *           type: string
 *           format: date-time
 *           nullable: true
 *           description: Fecha en la que termina el evento médico familiar, si aplica.
 *         endedBy:
 *           type: number
 *           nullable: true
 *           description: Identificador del usuario que finaliza el evento, si aplica.
 *         indActive:
 *           type: boolean
 *           description: Indicador de si el evento médico familiar está activo.
 *         inactivationNote:
 *           type: string
 *           nullable: true
 *           description: Nota sobre la inactivación del evento, si aplica.
*/
