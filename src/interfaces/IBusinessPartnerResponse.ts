import { UUID } from "crypto";

export interface IBusinessPartnerResponse {
  businessPartnerId: number;
  firstName: string;
  secondName: string;
  lastName: string;
  sLastName: string;
  dateOfBirth: Date;
  idType: number;
  idNumber: string;
  idGender: number;
  genderCatalog: UUID;
  idProfession: number;
  idBloodType: number;
  weight: number;
  height: number;
  note?: string;
  basePlanId?: number;
  countryId?: number;
  stateId?: number;
  cityId?: number;
  mail1: string;
  mail2: string;
  cel1: string;
  cel2: string;
  cel1w: boolean;
  cel2w: boolean;
  telHome1: string;
  telHome2: string;
  workHome1: string;
  workHome2: string;
  indPriority?: number;
  indBlocked: boolean;
  idBlockedReason?: number;
  indActive: boolean;
  indArchive: boolean;
  avatarSrc: string;
  medicalRptId?: number;
  businessPartnerGroupId?: number;
  businessPartnerTypeId: string;
  indStatusId: string;
  maritalStatus: string;
}


/**
 * @swagger
 * components:
 *   schemas:
 *     IBusinessPartnerResponse:
 *       type: object
 *       properties:
 *         businessPartnerId:
 *           type: integer
 *           description: Identificador único del socio comercial.
 *         firstName:
 *           type: string
 *           description: Primer nombre del socio comercial.
 *         secondName:
 *           type: string
 *           description: Segundo nombre del socio comercial.
 *         lastName:
 *           type: string
 *           description: Apellido paterno del socio comercial.
 *         sLastName:
 *           type: string
 *           description: Apellido materno del socio comercial.
 *         businessPartnersType:
 *           type: string
 *           description: Tipo de socio comercial.
 *         dateOfBirth:
 *           type: string
 *           format: date
 *           description: Fecha de nacimiento del socio comercial.
 *         idType:
 *           type: integer
 *           description: Tipo de identificación del socio comercial.
 *         idNumber:
 *           type: string
 *           description: Número de identificación del socio comercial.
 *         idGender:
 *           type: integer
 *           description: Género del socio comercial.
 *         idProfession:
 *           type: integer
 *           description: Profesión del socio comercial.
 *         idBloodType:
 *           type: integer
 *           description: Tipo de sangre del socio comercial.
 *         weight:
 *           type: number
 *           description: Peso del socio comercial.
 *         height:
 *           type: number
 *           description: Altura del socio comercial.
 *         note:
 *           type: string
 *           nullable: true
 *           description: Notas adicionales.
 *         basePlanId:
 *           type: integer
 *           nullable: true
 *           description: Identificador del plan base.
 *         countryId:
 *           type: integer
 *           nullable: true
 *           description: Identificador del país.
 *         stateId:
 *           type: integer
 *           nullable: true
 *           description: Identificador del estado.
 *         cityId:
 *           type: integer
 *           nullable: true
 *           description: Identificador de la ciudad.
 *         mail1:
 *           type: string
 *           description: Primer correo electrónico.
 *         mail2:
 *           type: string
 *           description: Segundo correo electrónico.
 *         cel1:
 *           type: string
 *           description: Primer número de celular.
 *         cel2:
 *           type: string
 *           description: Segundo número de celular.
 *         cel1w:
 *           type: boolean
 *           description: Indica si el primer celular tiene WhatsApp.
 *         cel2w:
 *           type: boolean
 *           description: Indica si el segundo celular tiene WhatsApp.
 *         telHome1:
 *           type: string
 *           description: Primer número de teléfono de casa.
 *         telHome2:
 *           type: string
 *           description: Segundo número de teléfono de casa.
 *         workHome1:
 *           type: string
 *           description: Primer número de teléfono del trabajo.
 *         workHome2:
 *           type: string
 *           description: Segundo número de teléfono del trabajo.
 *         indStatus:
 *           type: string
 *           description: Estado del socio comercial.
 *         indPriority:
 *           type: integer
 *           nullable: true
 *           description: Prioridad del socio comercial.
 *         indBlocked:
 *           type: boolean
 *           description: Indica si el socio comercial está bloqueado.
 *         idBlockedReason:
 *           type: integer
 *           nullable: true
 *           description: Razón por la cual el socio comercial está bloqueado.
 *         indActive:
 *           type: boolean
 *           description: Indica si el socio comercial está activo.
 *         indArchive:
 *           type: boolean
 *           description: Indica si el socio comercial está archivado.
 *         avatarSrc:
 *           type: string
 *           description: URL del avatar del socio comercial.
 *         medicalRptId:
 *           type: integer
 *           nullable: true
 *           description: Identificador del reporte médico.
 *         businessPartnerGroupId:
 *           type: integer
 *           nullable: true
 *           description: Identificador del grupo de socios comerciales.
 *         businessPartnerTypeId:
 *           type: string
 *           description: Identificador del tipo de socio comercial.
 *         indStatusId:
 *           type: string
 *           description: Identificador del estado del socio comercial.
 *         maritalStatus:
 *           type: string
 *           description: Estado civil del socio comercial.
 *       required:
 *         - businessPartnerId
 *         - firstName
 *         - lastName
 *         - businessPartnersType
 *         - dateOfBirth
 *         - idType
 *         - idNumber
 *         - idGender
 */
