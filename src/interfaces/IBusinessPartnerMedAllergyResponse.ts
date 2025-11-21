import { ICatalogModel } from "./ICatalogModel.js";

export interface IBusinessPartnerMedAllergy {
  businessPartnerMedAllergyId: number;
  medicine: ICatalogModel;
  diagnosticDate: Date;
  medicalRptId?: number | null;
  note?: string | null;
  registerDate: Date;
  registeredBy: IRegisteredBy;
  endDate?: Date | null;
  endedBy?: IRegisteredBy | null;
  indActive: boolean;
  inactivationNote?: string | null;
  updatedDate: Date | null,
  updatedBy: IRegisteredBy | null,
}

 interface IRegisteredBy{
  usuarioId: number,
  loginUsr: string,
  nombre: string,
}

/**
 * @swagger
 * components:
 *   schemas:
 *     IBusinessPartnerMedAllergy:
 *       type: object
 *       properties:
 *         businessPartnersId:
 *           type: number
 *           description: Identificador del socio comercial asociado con la alergia
 *         medicine:
 *           $ref: '#/components/schemas/ICatalogModel'
 *           description: Detalles del medicamento que provoca la alergia
 *         diagnosticDate:
 *           type: string
 *           format: date-time
 *           description: Fecha del diagnóstico de la alergia
 *         medicalRptId:
 *           type: number
 *           nullable: true
 *           description: Identificador del reporte médico, null si no aplica
 *         note:
 *           type: string
 *           nullable: true
 *           description: Nota adicional sobre la alergia, null si no aplica
 *         registerDate:
 *           type: string
 *           format: date-time
 *           description: Fecha de registro de la alergia
 *         registeredBy:
 *           $ref: '#/components/schemas/IRegisteredBy'
 *           description: Detalles del usuario que registró la alergia
 *         endDate:
 *           type: string
 *           format: date-time
 *           nullable: true
 *           description: Fecha de finalización del registro de la alergia, null si aún está activo
 *         endedBy:
 *           $ref: '#/components/schemas/IRegisteredBy'
 *           nullable: true
 *           description: Detalles del usuario que finalizó el registro de la alergia, null si aún está activo
 *         indActive:
 *           type: boolean
 *           description: Indica si el registro de la alergia está activo
 *         inactivationNote:
 *           type: string
 *           nullable: true
 *           description: Nota de inactivación, null si no aplica
 *       required:
 *         - businessPartnersId
 *         - medicine
 *         - diagnosticDate
 *         - registerDate
 *         - registeredBy
 *         - indActive
 *       description: Detalles de la alergia a medicamentos registrada para un socio comercial, incluyendo información sobre el medicamento, diagnóstico y estado del registro.
 * 
 *     ICatalogModel:
 *       type: object
 *       properties:
 *         id:
 *           type: number
 *           description: Identificador único del elemento del catálogo
 *         name:
 *           type: string
 *           description: Nombre del elemento del catálogo
 *         description:
 *           type: string
 *           description: Descripción del elemento del catálogo
 *       required:
 *         - id
 *         - name
 * 
 *     IRegisteredBy:
 *       type: object
 *       properties:
 *         usuarioId:
 *           type: number
 *           description: Identificador único del usuario
 *         loginUsr:
 *           type: string
 *           description: Nombre de usuario para inicio de sesión
 *         nombre:
 *           type: string
 *           description: Nombre completo del usuario
 *       required:
 *         - usuarioId
 *         - loginUsr
 *         - nombre
 */

