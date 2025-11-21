
export interface IBusinessPartnerMedAllergyRequest {
  medicineId: number;
  diagnosticDate: Date;
  medicalRptId?: number | null;
  note?: string | null;
  indActive: boolean;
  inactivationNote?: string | null;
}

/**
 * @swagger
 * components:
 *   schemas:
 *     IBusinessPartnerMedAllergyRequest:
 *       type: object
 *       properties:
 *         medicineId:
 *           type: number
 *           description: Identificador único del medicamento que provoca la alergia.
 *         diagnosticDate:
 *           type: string
 *           format: date
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
 *           format: date
 *           description: Fecha de registro de la alergia en el sistema.
 *         registeredBy:
 *           type: number
 *           description: Identificador del usuario que registra la alergia.
 *         endDate:
 *           type: string
 *           format: date
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
 *       required:
 *         - medicineId
 *         - diagnosticDate
 *         - registerDate
 *         - registeredBy
 *         - indActive
*/