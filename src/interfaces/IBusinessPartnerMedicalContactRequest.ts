export interface IBusinessPartnerMedicalContactRequest {
  doctorId: number;
  note: string | null;
  registerDate: Date;
  registeredBy: number;
  endDate: null;
  endedBy: number | null;
  indActive: boolean;
  inactivationNote: string | null;
}

/**
 * @swagger
 * components:
 *   schemas:
 *     IBusinessPartnerMedicalContactRequest:
 *       type: object
 *       required:
 *         - doctorId
 *         - registerDate
 *         - registeredBy
 *         - indActive
 *       properties:
 *         doctorId:
 *           type: integer
 *           description: Identificador único del doctor asociado al contacto médico.
 *         note:
 *           type: string
 *           nullable: true
 *           description: Nota adicional sobre el contacto médico.
 *         registerDate:
 *           type: string
 *           format: date-time
 *           description: Fecha de registro del contacto médico.
 *         registeredBy:
 *           type: integer
 *           description: Identificador del usuario que registra el contacto médico.
 *         endDate:
 *           type: string
 *           format: date-time
 *           nullable: true
 *           description: Fecha en la que termina la validez del contacto médico.
 *         endedBy:
 *           type: integer
 *           nullable: true
 *           description: Identificador del usuario que finaliza el contacto médico.
 *         indActive:
 *           type: boolean
 *           description: Indicador de si el contacto médico está activo.
 *         inactivationNote:
 *           type: string
 *           nullable: true
 *           description: Nota sobre la inactivación del contacto médico.
 */