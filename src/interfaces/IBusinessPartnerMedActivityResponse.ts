import { ICatalogModel } from "./ICatalogModel.js";

export interface IBusinessPartnerMedActivity {
  businessPartnerMedActivityId: number;
  activity: ICatalogModel;
  diagnosticDate: Date;
  medicalRptId: number | null;
  note: string | null;
  activityFrequency: number;
  activityFrequencyMeasure: ICatalogModel;
  activityTime: number | null;
  activityTimeMeasure: ICatalogModel;
  activityTimeHour: number | null;
  registerDate: Date;
  registeredBy: IRegisteredBy;
  endDate: Date | null;
  endedBy: IRegisteredBy | null;
  updatedDate: Date;
  updatedBy: IRegisteredBy;
  indActive: boolean;
  inactivationNote: string | null;
  indStatus: ICatalogModel,
  indSuspended: boolean,
  suspensionNote: string,
  suspendedDateTime: Date,
  startDateTime: Date,
  endDateTime: Date,
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
 *     IBusinessPartnerMedActivity:
 *       type: object
 *       properties:
 *         businessPartnerMedActivityId:
 *           type: number
 *           description: Identificador único de la actividad médica del socio comercial
 *         businessPartnersId:
 *           type: number
 *           description: Identificador del socio comercial
 *         activity:
 *           $ref: '#/components/schemas/ICatalogModel'
 *           description: Detalles de la actividad catalogada
 *         diagnosticDate:
 *           type: string
 *           format: date-time
 *           description: Fecha del diagnóstico
 *         medicalRptId:
 *           type: number
 *           nullable: true
 *           description: Identificador del reporte médico, null si no aplica
 *         note:
 *           type: string
 *           nullable: true
 *           description: Nota adicional, null si no aplica
 *         activityFrequency:
 *           type: number
 *           description: Frecuencia de la actividad
 *         activityFrequencyMeasure:
 *           $ref: '#/components/schemas/ICatalogModel'
 *           description: Detalles de la unidad de medida de la frecuencia de la actividad
 *         activityTime:
 *           type: number
 *           nullable: true
 *           description: Tiempo de duración de la actividad, null si no aplica
 *         activityTimeMeasure:
 *           $ref: '#/components/schemas/ICatalogModel'
 *           description: Detalles de la unidad de medida del tiempo de la actividad
 *         activityTimeHour:
 *           type: number
 *           nullable: true
 *           description: Hora del día en que se realiza la actividad, null si no aplica
 *         registerDate:
 *           type: string
 *           format: date-time
 *           description: Fecha de registro de la actividad
 *         registeredBy:
 *           $ref: '#/components/schemas/IRegisteredBy'
 *           description: Detalles del usuario que registró la actividad
 *         endDate:
 *           type: string
 *           format: date-time
 *           nullable: true
 *           description: Fecha de finalización de la actividad, null si no ha finalizado
 *         endedBy:
 *           $ref: '#/components/schemas/IRegisteredBy'
 *           nullable: true
 *           description: Detalles del usuario que finalizó la actividad, null si no ha finalizado
 *         indActive:
 *           type: boolean
 *           description: Indica si la actividad está activa o no
 *         inactivationNote:
 *           type: string
 *           nullable: true
 *           description: Nota de inactivación, null si no aplica
 *       required:
 *         - businessPartnerMedActivityId
 *         - businessPartnersId
 *         - activity
 *         - diagnosticDate
 *         - activityFrequency
 *         - activityFrequencyMeasure
 *         - registerDate
 *         - registeredBy
 *         - indActive
 *       description: Detalles de la actividad médica asociada a un socio comercial, incluyendo frecuencia, duración y estado de actividad.
 * 
 *     ICatalogModel:
 *       type: object
 *       properties:
 *         id:
 *           type: number
 *           description: Identificador único del catálogo
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

