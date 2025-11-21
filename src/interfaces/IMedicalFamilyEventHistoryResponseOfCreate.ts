export interface IMedicalFamilyEventHistoryResponseOfCreate {
  businessPartnerMedFamilyEventHistoryId: number;
  businessPartnersId: number;
  medicalEventTypeId: number;
  medicalRptId: number;
  name: string;
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
 *     IMedicalFamilyEventHistoryResponseOfCreate:
 *       type: object
 *       properties:
 *         businessPartnerMedFamilyEventHistoryId:
 *           type: number
 *           description: Identificador único del historial de eventos médicos familiares.
 *         businessPartnersId:
 *           type: number
 *           description: Identificador único del socio comercial asociado al historial.
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
 *           description: Identificador del usuario que registra el evento médico familiar.
 *         endDate:
 *           type: string
 *           format: date-time
 *           nullable: true
 *           description: Fecha en la que el evento médico familiar fue marcado como inactivo, si aplica.
 *         endedBy:
 *           type: number
 *           nullable: true
 *           description: Identificador del usuario que marcó el evento médico familiar como inactivo, si aplica.
 *         indActive:
 *           type: boolean
 *           description: Indica si el evento médico familiar está activo.
 *         inactivationNote:
 *           type: string
 *           nullable: true
 *           description: Nota sobre la inactivación del evento médico familiar, si aplica.
*/