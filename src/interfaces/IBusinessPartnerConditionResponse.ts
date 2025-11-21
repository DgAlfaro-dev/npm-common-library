import { ICatalogModel } from "./ICatalogModel.js";

export interface IBusinessPartnerConditionResponse {
  businessPartnerConditionId: number;
  businessPartnersId: number;
  condition: IConditionResponse;
  diagnosticDate: Date;
  medicalRptId: number | null;
  note: string | null;
  registerDate: Date;
  registeredBy: IRegisteredBy;
  endDate: Date | null;
  endedBy: IRegisteredBy | null;
  updatedBy: IRegisteredBy | null;
  updatedDate: Date;
  indStatus: ICatalogModel,
  indActive: boolean;
  inactivationNote: string | null;
}

export interface IBusinessPartnerConditionWhitMedicalRptResponse {
  businessPartnerConditionId: number;
  condition: IConditionResponse;
  diagnosticDate: Date;
  medicalRptId: number | null;
  note: string | null;
  registerDate: Date;
  registeredBy: IRegisteredBy;
  endDate: Date | null;
  endedBy: IRegisteredBy | null;
  updatedBy: IRegisteredBy | null;
  updatedDate: Date;
  indStatus: ICatalogModel,
  indActive: boolean;
  inactivationNote: string | null;
}

export interface IConditionResponse{
    conditionId: number,
    conditionType: IConditionTypeResponse,
    name: string,
    note?: string,
}

export interface IConditionTypeResponse{
    conditionTypeId: number,
    name: string,
    indAllergy: boolean,
    note?: string,
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
 *     IBusinessPartnerConditionResponse:
 *       type: object
 *       properties:
 *         businessPartnerConditionId:
 *           type: number
 *           description: The unique identifier for the business partner condition.
 *         businessPartnersId:
 *           type: number
 *           description: The unique identifier for the business partner.
 *         condition:
 *           $ref: '#/components/schemas/IConditionResponse'
 *           description: Detailed information about the condition.
 *         diagnosticDate:
 *           type: string
 *           format: date
 *           description: The date the condition was diagnosed.
 *         medicalRptId:
 *           type: number
 *           nullable: true
 *           description: The associated medical report ID, if applicable.
 *         note:
 *           type: string
 *           nullable: true
 *           description: Additional notes about the condition.
 *         registerDate:
 *           type: string
 *           format: date
 *           description: The date the condition was registered.
 *         registeredBy:
 *           $ref: '#/components/schemas/IRegisteredBy'
 *           description: Information about the user who registered the condition.
 *         endDate:
 *           type: string
 *           format: date
 *           nullable: true
 *           description: The date the condition ended, if applicable.
 *         endedBy:
 *           $ref: '#/components/schemas/IRegisteredBy'
 *           nullable: true
 *           description: Information about the user who ended the condition, if applicable.
 *         updatedBy:
 *           $ref: '#/components/schemas/IRegisteredBy'
 *           nullable: true
 *           description: Information about the user who last updated the condition record.
 *         updatedDate:
 *           type: string
 *           format: date
 *           description: The last date the condition record was updated.
 *         indActive:
 *           type: boolean
 *           description: Indicates whether the condition is currently active.
 *         inactivationNote:
 *           type: string
 *           nullable: true
 *           description: Note regarding the inactivation of the condition, if applicable.
 *       required:
 *         - businessPartnerConditionId
 *         - businessPartnersId
 *         - condition
 *         - diagnosticDate
 *         - registerDate
 *         - registeredBy
 *         - updatedDate
 *         - indActive
 *     IBusinessPartnerConditionWhitMedicalRptResponse:
 *       type: object
 *       properties:
 *         businessPartnerConditionId:
 *           type: number
 *           description: The unique identifier for the business partner condition.
 *         condition:
 *           $ref: '#/components/schemas/IConditionResponse'
 *           description: Detailed information about the condition.
 *         diagnosticDate:
 *           type: string
 *           format: date
 *           description: The date the condition was diagnosed.
 *         medicalRptId:
 *           type: number
 *           nullable: true
 *           description: The associated medical report ID, if applicable.
 *         note:
 *           type: string
 *           nullable: true
 *           description: Additional notes about the condition.
 *         registerDate:
 *           type: string
 *           format: date
 *           description: The date the condition was registered.
 *         registeredBy:
 *           $ref: '#/components/schemas/IRegisteredBy'
 *           description: Information about the user who registered the condition.
 *         endDate:
 *           type: string
 *           format: date
 *           nullable: true
 *           description: The date the condition ended, if applicable.
 *         endedBy:
 *           $ref: '#/components/schemas/IRegisteredBy'
 *           nullable: true
 *           description: Information about the user who ended the condition, if applicable.
 *         updatedBy:
 *           $ref: '#/components/schemas/IRegisteredBy'
 *           nullable: true
 *           description: Information about the user who last updated the condition record.
 *         updatedDate:
 *           type: string
 *           format: date
 *           description: The last date the condition record was updated.
 *         indActive:
 *           type: boolean
 *           description: Indicates whether the condition is currently active.
 *         inactivationNote:
 *           type: string
 *           nullable: true
 *           description: Note regarding the inactivation of the condition, if applicable.
 *       required:
 *         - businessPartnerConditionId
 *         - condition
 *         - diagnosticDate
 *         - registerDate
 *         - registeredBy
 *         - updatedDate
 *         - indActive
 *     IConditionResponse:
 *       type: object
 *       properties:
 *         conditionId:
 *           type: number
 *           description: The unique identifier of the condition.
 *         conditionType:
 *           $ref: '#/components/schemas/IConditionTypeResponse'
 *           description: The type of the condition.
 *         name:
 *           type: string
 *           description: The name of the condition.
 *         note:
 *           type: string
 *           nullable: true
 *           description: Additional notes about the condition.
 *       required:
 *         - conditionId
 *         - conditionType
 *         - name
 *     IConditionTypeResponse:
 *       type: object
 *       properties:
 *         conditionTypeId:
 *           type: number
 *           description: The unique identifier of the condition type.
 *         name:
 *           type: string
 *           description: The name of the condition type.
 *         indAllergy:
 *           type: boolean
 *           description: Indicates whether the condition type is related to an allergy.
 *         note:
 *           type: string
 *           nullable: true
 *           description: Additional notes about the condition type.
 *       required:
 *         - conditionTypeId
 *         - name
 *         - indAllergy
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
 *           description: The name of the user.
 *       required:
 *         - usuarioId
 *         - loginUsr
 *         - nombre
 */