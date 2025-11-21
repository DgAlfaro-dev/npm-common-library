export interface IBusinessPartnerMedEventHistoryResponseOfCreate {
  businessPartnerMedEventHistoryId: number;
  businessPartnersId: number;
  medicalEventTypeId: number;
  name: string;
  diagnosticDate: Date;
  medicalRptId: number | null;
  note: string | null;
  registerDate: Date;
  registeredBy: number;
  endDate: Date | null;
  endedBy: number | null;
  indActive: boolean;
  inactivationNote: string | null;
}


/**
 * @swagger
 * components:
 *   schemas:
 *     IBusinessPartnerMedEventHistoryResponseOfCreate:
 *       type: object
 *       properties:
 *         businessPartnerMedEventHistoryId:
 *           type: number
 *           description: Identificador único del historial de eventos médicos del socio comercial.
 *         businessPartnersId:
 *           type: number
 *           description: Identificador único del socio comercial asociado al historial de eventos médicos.
 *         medicalEventTypeId:
 *           type: number
 *           description: Identificador único del tipo de evento médico registrado.
 *         name:
 *           type: string
 *           description: Nombre del evento médico.
 *         diagnosticDate:
 *           type: string
 *           format: date-time
 *           description: Fecha del diagnóstico asociado al evento médico.
 *         medicalRptId:
 *           type: number
 *           nullable: true
 *           description: Identificador opcional del reporte médico asociado al evento.
 *         note:
 *           type: string
 *           nullable: true
 *           description: Nota adicional sobre el evento médico.
 *         registerDate:
 *           type: string
 *           format: date-time
 *           description: Fecha de registro del evento médico en el sistema.
 *         registeredBy:
 *           type: number
 *           description: Identificador del usuario que registra el evento médico.
 *         endDate:
 *           type: string
 *           format: date-time
 *           nullable: true
 *           description: Fecha en la que el evento médico fue marcado como inactivo, si aplica.
 *         endedBy:
 *           type: number
 *           nullable: true
 *           description: Identificador del usuario que marcó el evento médico como inactivo, si aplica.
 *         indActive:
 *           type: boolean
 *           description: Indica si el evento médico está activo.
 *         inactivationNote:
 *           type: string
 *           nullable: true
 *           description: Nota sobre la inactivación del evento médico, si aplica.
*/
