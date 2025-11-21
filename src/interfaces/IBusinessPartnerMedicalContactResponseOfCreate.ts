export interface IBusinessPartnerMedicalContactResponseOfCreate {
  businessPartnersId: number;
  doctorId: number;
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
 *     IBusinessPartnerMedicalContactResponseOfCreate:
 *       type: object
 *       properties:
 *         businessPartnersId:
 *           type: number
 *           description: Identificador único del socio comercial asociado al contacto médico.
 *         doctorId:
 *           type: number
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
 *           type: number
 *           description: Identificador del usuario que registra el contacto médico.
 *         endDate:
 *           type: string
 *           format: date-time
 *           nullable: true
 *           description: Fecha en la que el contacto médico fue marcado como inactivo, si aplica.
 *         endedBy:
 *           type: number
 *           nullable: true
 *           description: Identificador del usuario que marcó el contacto médico como inactivo, si aplica.
 *         indActive:
 *           type: boolean
 *           description: Indica si el contacto médico está activo.
 *         inactivationNote:
 *           type: string
 *           nullable: true
 *           description: Nota sobre la inactivación del contacto médico, si aplica.
*/