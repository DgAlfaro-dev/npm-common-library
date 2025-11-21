import { ICatalogModel } from './ICatalogModel.js';
import { IGeneralCatalogModel } from './IGeneralCatalogModel.js';

export interface IResponsibleResponse {
  businessPartnersId: number;
  firstName: string;
  secondName: string;
  lastName: string;
  sLastName: string;
  indPriority: number;
}

export interface IBasePlanResponse {
  serviceId: number;
  indBasePlan: boolean;
  productName: string;
}

export interface IPriorityResponse {
  priorityId: number;
  priorityName: string;
  colour: string;
}

export interface IClientsResponsePaginated {
  businessPartnersId: number;
  firstName: string;
  secondName: string;
  lastName: string;
  sLastName: string;
  dateOfBirth: Date,
  gender: ICatalogModel;
  businessPartnerType: ICatalogModel;
  basePlan: IBasePlanResponse[];
  country: ICatalogModel;
  city: ICatalogModel;
  priority: IPriorityResponse;
  BusinessPartnerGroup: ICatalogModel;
  responsibles: IResponsibleResponse[];
  indStatus: ICatalogModel;
  maritalStatus: ICatalogModel;
  hasSpecialCondition: boolean;
  specialCondition: ISpecialCondition[];
}

export interface ISpecialCondition{
  businessPartnerConditionId: number;
  businessPartnerId: number;
  diagnosticDate: Date;
  medicalRptId: number | null;
  note: string | null;
  registerDate: Date;
  registeredBy: number;
  endDate: Date | null;
  endedBy: number | null;
  indActive: boolean;
  inactivationNote: string | null;
  condition: ICondition;
}

export interface ICondition {
  conditionId: number;
  name: string;
  indActive: boolean;
  note: string | null;
  conditionType: IConditionType;
}

export interface IConditionType {
  conditionTypeId: number;
  name: string;
  indActive: boolean;
  indRemark: boolean;
  indChronicDisease: boolean;
  indAccessibilityDisease: boolean;
  indAllergy: boolean;
  note: string | null;
}

/**
 * @swagger
 * components:
 *   schemas:
 *     IResponsibleResponse:
 *       type: object
 *       properties:
 *         businessPartnersId:
 *           type: integer
 *           example: 1
 *         firstName:
 *           type: string
 *           example: John
 *         secondName:
 *           type: string
 *           example: Doe
 *         lastName:
 *           type: string
 *           example: Smith
 *         sLastName:
 *           type: string
 *           example: Johnson
 *         indPriority:
 *           type: integer
 *           example: 1
 *       required:
 *         - businessPartnersId
 *         - firstName
 *         - lastName
 *         - indPriority
 *       description: Respuesta de responsable
 *
 *     IBasePlanResponse:
 *       type: object
 *       properties:
 *         serviceId:
 *           type: integer
 *           example: 1
 *         indBasePlan:
 *           type: boolean
 *           example: true
 *         productName:
 *           type: string
 *           example: Plan A
 *       required:
 *         - serviceId
 *         - indBasePlan
 *         - productName
 *       description: Respuesta del plan base
 *
 *     IPriorityResponse:
 *       type: object
 *       properties:
 *         priorityId:
 *           type: integer
 *           example: 1
 *         priorityName:
 *           type: string
 *           example: High
 *         colour:
 *           type: string
 *           example: red
 *       required:
 *         - priorityId
 *         - priorityName
 *         - colour
 *       description: Respuesta de prioridad
 *
 *     IClientsResponsePaginated:
 *       type: object
 *       properties:
 *         businessPartnersId:
 *           type: integer
 *           example: 1
 *         firstName:
 *           type: string
 *           example: John
 *         secondName:
 *           type: string
 *           example: Doe
 *         lastName:
 *           type: string
 *           example: Smith
 *         sLastName:
 *           type: string
 *           example: Johnson
 *         businessPartnerType:
 *           $ref: '#/components/schemas/ICatalogModel'
 *         basePlan:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/IBasePlanResponse'
 *         country:
 *           $ref: '#/components/schemas/ICatalogModel'
 *         city:
 *           $ref: '#/components/schemas/ICatalogModel'
 *         priority:
 *           $ref: '#/components/schemas/IPriorityResponse'
 *         BusinessPartnerGroup:
 *           $ref: '#/components/schemas/ICatalogModel'
 *         responsibles:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/IResponsibleResponse'
 *         indStatus:
 *           $ref: '#/components/schemas/ICatalogModel'
 *         maritalStatus:
 *           $ref: '#/components/schemas/ICatalogModel'
 *       required:
 *         - businessPartnersId
 *         - firstName
 *         - lastName
 *         - businessPartnerType
 *         - basePlan
 *         - country
 *         - city
 *         - priority
 *         - BusinessPartnerGroup
 *         - responsibles
 *         - indStatus
 *         - maritalStatus
 *       description: Respuesta de cliente paginada
 */
