import { ICatalogModel } from "./ICatalogModel.js";

export interface IBusinessPartnerMedEventHistory {
  businessPartnerMedEventHistoryId: number;
  medicalEventType: ICatalogModel;
  name: string;
  diagnosticDate: Date;
  medicalRptId?: number | null;
  note?: string | null;
  registerDate: Date;
  registeredBy: IRegisteredBy;
  endDate?: Date | null;
  endedBy?: IRegisteredBy | null;
  updatedDate: Date,
  updatedBy: IRegisteredBy,
  indActive: boolean;
  inactivationNote?: string | null;
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
 *     IBusinessPartnerMedEventHistory:
 *       type: object
 *       properties:
 *         businessPartnerMedEventHistoryId:
 *           type: number
 *           description: Identificador único del historial de eventos médicos del socio comercial
 *         businessPartnersId:
 *           type: number
 *           description: Identificador del socio comercial asociado con el evento médico
 *         medicalEventType:
 *           $ref: '#/components/schemas/ICatalogModel'
 *           description: Detalles del tipo de evento médico
 *         name:
 *           type: string
 *           description: Nombre del evento médico
 *         diagnosticDate:
 *           type: string
 *           format: date-time
 *           description: Fecha del diagnóstico del evento médico
 *         medicalRptId:
 *           type: number
 *           nullable: true
 *           description: Identificador del reporte médico, null si no aplica
 *         note:
 *           type: string
 *           nullable: true
 *           description: Nota adicional sobre el evento médico, null si no aplica
 *         registerDate:
 *           type: string
 *           format: date-time
 *           description: Fecha de registro del evento médico
 *         registeredBy:
 *           $ref: '#/components/schemas/IRegisteredBy'
 *           description: Detalles del usuario que registró el evento médico
 *         endDate:
 *           type: string
 *           format: date-time
 *           nullable: true
 *           description: Fecha de finalización del evento médico, null si aún está activo
 *         endedBy:
 *           $ref: '#/components/schemas/IRegisteredBy'
 *           nullable: true
 *           description: Detalles del usuario que finalizó el evento médico, null si aún está activo
 *         indActive:
 *           type: boolean
 *           description: Indica si el registro del evento médico está activo
 *         inactivationNote:
 *           type: string
 *           nullable: true
 *           description: Nota de inactivación, null si no aplica
 *       required:
 *         - businessPartnerMedEventHistoryId
 *         - businessPartnersId
 *         - medicalEventType
 *         - name
 *         - diagnosticDate
 *         - registerDate
 *         - registeredBy
 *         - indActive
 *       description: Detalles del historial de eventos médicos de un socio comercial, incluyendo tipo de evento, diagnóstico y estado del registro.
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

