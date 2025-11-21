import { ICatalogModel } from './ICatalogModel.js';

export interface IBusinessPartnerMedFamilyEventHistoryResponse {
  businessPartnerMedFamilyEventHistoryId: number;
  businessPartnersId: number;
  medicalEventType: ICatalogModel;
  medicalRptId: number;
  name: string;
  note: string | null;
  registerDate: Date;
  registeredBy: IRegisteredBy;
  endDate: Date | null;
  endedBy: IRegisteredBy;
  updatedDate: Date,
  updatedBy: IRegisteredBy;
  indActive: boolean;
  inactivationNote: string | null;
}

export interface IBusinessPartnerMedFamilyEventHistoryWhitMedicalRptResponse {
  businessPartnerMedFamilyEventHistoryId: number;
  medicalEventType: ICatalogModel;
  medicalRptId: number;
  name: string;
  note: string | null;
  registerDate: Date;
  registeredBy: IRegisteredBy;
  endDate: Date | null;
  endedBy: IRegisteredBy;
  updatedDate: Date,
  updatedBy: IRegisteredBy;
  indActive: boolean;
  inactivationNote: string | null;
}

interface IRegisteredBy {
  usuarioId: number;
  loginUsr: string;
  nombre: string;
}


/**
 * @swagger
 * components:
 *   schemas:
 *     IBusinessPartnerMedFamilyEventHistoryResponse:
 *       type: object
 *       properties:
 *         businessPartnerMedFamilyEventHistoryId:
 *           type: number
 *           description: Unique identifier of the medical family event history record.
 *         businessPartnersId:
 *           type: number
 *           description: Identifier of the business partner associated with the medical record.
 *         medicalEventType:
 *           $ref: '#/components/schemas/ICatalogModel'
 *           description: Catalog model defining the type of medical event.
 *         medicalRptId:
 *           type: number
 *           description: Identifier of the medical report associated with the family event.
 *         name:
 *           type: string
 *           description: Name or title of the medical event.
 *         note:
 *           type: string
 *           nullable: true
 *           description: Additional notes or comments about the event.
 *         registerDate:
 *           type: string
 *           format: date
 *           description: Date when the event was registered in the system.
 *         registeredBy:
 *           $ref: '#/components/schemas/IRegisteredBy'
 *           description: Details of the user who registered the event.
 *         endDate:
 *           type: string
 *           format: date
 *           nullable: true
 *           description: Date when the event was concluded or deemed inactive.
 *         endedBy:
 *           $ref: '#/components/schemas/IRegisteredBy'
 *           nullable: true
 *           description: Details of the user who ended the event.
 *         updatedDate:
 *           type: string
 *           format: date
 *           description: Date when the event record was last updated.
 *         updatedBy:
 *           $ref: '#/components/schemas/IRegisteredBy'
 *           description: Details of the user who last updated the event record.
 *         indActive:
 *           type: boolean
 *           description: Indicates whether the event is currently active.
 *         inactivationNote:
 *           type: string
 *           nullable: true
 *           description: Notes regarding why the event was deactivated, if applicable.
 *       required:
 *         - businessPartnerMedFamilyEventHistoryId
 *         - businessPartnersId
 *         - medicalEventType
 *         - medicalRptId
 *         - name
 *         - registerDate
 *         - registeredBy
 *         - updatedDate
 *         - updatedBy
 *         - indActive
 *     IBusinessPartnerMedFamilyEventHistoryWhitMedicalRptResponse:
 *       type: object
 *       properties:
 *         businessPartnerMedFamilyEventHistoryId:
 *           type: number
 *           description: Unique identifier of the medical family event history record.
 *         medicalEventType:
 *           $ref: '#/components/schemas/ICatalogModel'
 *           description: Catalog model defining the type of medical event.
 *         medicalRptId:
 *           type: number
 *           description: Identifier of the medical report associated with the family event.
 *         name:
 *           type: string
 *           description: Name or title of the medical event.
 *         note:
 *           type: string
 *           nullable: true
 *           description: Additional notes or comments about the event.
 *         registerDate:
 *           type: string
 *           format: date
 *           description: Date when the event was registered in the system.
 *         registeredBy:
 *           $ref: '#/components/schemas/IRegisteredBy'
 *           description: Details of the user who registered the event.
 *         endDate:
 *           type: string
 *           format: date
 *           nullable: true
 *           description: Date when the event was concluded or deemed inactive.
 *         endedBy:
 *           $ref: '#/components/schemas/IRegisteredBy'
 *           nullable: true
 *           description: Details of the user who ended the event.
 *         updatedDate:
 *           type: string
 *           format: date
 *           description: Date when the event record was last updated.
 *         updatedBy:
 *           $ref: '#/components/schemas/IRegisteredBy'
 *           description: Details of the user who last updated the event record.
 *         indActive:
 *           type: boolean
 *           description: Indicates whether the event is currently active.
 *         inactivationNote:
 *           type: string
 *           nullable: true
 *           description: Notes regarding why the event was deactivated, if applicable.
 *       required:
 *         - businessPartnerMedFamilyEventHistoryId
 *         - medicalEventType
 *         - medicalRptId
 *         - name
 *         - registerDate
 *         - registeredBy
 *         - updatedDate
 *         - updatedBy
 *         - indActive
 *     IRegisteredBy:
 *       type: object
 *       properties:
 *         usuarioId:
 *           type: number
 *           description: The unique identifier of the user.
 *         loginUsr:
 *           type: string
 *           description: The login username of the user.
 *         nombre:
 *           type: string
 *           description: The full name of the user.
 *       required:
 *         - usuarioId
 *         - loginUsr
 *         - nombre
 *       example:
 *         usuarioId: 101
 *         loginUsr: "john.doe"
 *         nombre: "John Doe"
*/