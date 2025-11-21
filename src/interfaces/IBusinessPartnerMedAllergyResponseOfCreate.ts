export interface IBusinessPartnerMedAllergyResponseOfCreate {
  businessPartnerMedAllergyId: number
  businessPartnersId: number;
  medicineId: number;
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
 *     IBusinessPartnerMedAllergyResponseOfCreate:
 *       type: object
 *       properties:
 *         businessPartnersId:
 *           type: number
 *           description: Identificador único del socio comercial asociado a la alergia.
 *         medicineId:
 *           type: number
 *           description: Identificador único del medicamento que provoca la alergia.
 *         diagnosticDate:
 *           type: string
 *           format: date-time
 *           description: Fecha del diagnóstico de la alergia.
 *         medicalRptId:
 *           type: number
 *           nullable: true
 *           description: Identificador opcional del reporte médico asociado a la alergia.
 *         note:
 *           type: string
 *           nullable: true
 *           description: Nota adicional sobre la alergia.
 *         registerDate:
 *           type: string
 *           format: date-time
 *           description: Fecha de registro de la alergia en el sistema.
 *         registeredBy:
 *           type: number
 *           description: Identificador del usuario que registra la alergia.
 *         endDate:
 *           type: string
 *           format: date-time
 *           nullable: true
 *           description: Fecha en la que la alergia fue marcada como inactiva, si aplica.
 *         endedBy:
 *           type: number
 *           nullable: true
 *           description: Identificador del usuario que marcó la alergia como inactiva, si aplica.
 *         indActive:
 *           type: boolean
 *           description: Indica si la alergia está activa.
 *         inactivationNote:
 *           type: string
 *           nullable: true
 *           description: Nota sobre la inactivación de la alergia, si aplica.
*/