import { IBusinessPartnerContactResponse } from './IBusinessPartnerContactResponse.js';
import { IBusinessPartnerMedicine } from './IBusinessPartnerMedicineResponse.js';
import { ICatalogModel } from './ICatalogModel.js';
import { IMedicalReportResponse } from './IMedicalReportResponse.js';

export interface IClientResponse {
  businessPartnersId: number;
  firstName: string;
  secondName: string;
  lastName: string;
  sLastName: string;
  businessPartnerTypeId: ICatalogModel;
  maritalStatus: ICatalogModel;
  dateOfBirth: Date;
  idType: ICatalogModel;
  idNumber: string;
  gender: ICatalogModel;
  profession: ICatalogModel;
  bloodType: ICatalogModel;
  weight: number;
  height: number;
  note: string;
  basePlan: ICatalogModel;
  country: ICatalogModel;
  state: ICatalogModel;
  city: ICatalogModel;
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
  indStatus: ICatalogModel;
  priority: ICatalogModel;
  indBlocked: boolean;
  blockingReasons: ICatalogModel;
  indActive: boolean;
  indArchive: boolean;
  avatarSrc: string;
  businessPartnerGroupId: number;
  usuario: IUser;
  center: ICenter;
  medicalReport: IMedicalReportResponse;
  medicines: IBusinessPartnerMedicine[];
  contacts: IBusinessPartnerContactResponse[];
}

export interface IClientEmail {
  businessPartnersContactId: number;
  mail1: string;
  mail2: string;
  cel1: string;
  cel1w: boolean;
  cel2: string;
  cel2w: boolean;
  telHome1: string;
  telHome2: string;
  workHome1: string;
  workHome2: string;
  note: string;
  indMain: boolean;
}

interface IUser {
  usuarioId: number;
  nombre: string;
  email: string;
}
interface ICenter {
  centroId: number;
  nombre: string;
  unitWeight: string;
  unitHeight: string;
}

/**
 * @swagger
 * components:
 *   schemas:
 *     IClientResponse:
 *       type: object
 *       properties:
 *         businessPartnersId:
 *           type: number
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
 *           example:
 *         businessPartnerType:
 *           $ref: '#/components/schemas/ICatalogModel'
 *         maritalStatus:
 *           $ref: '#/components/schemas/ICatalogModel'
 *         dateOfBirth:
 *           type: string
 *           format: date
 *           example: "2023-02-15"
 *         idType:
 *           $ref: '#/components/schemas/ICatalogModel'
 *         idNumber:
 *           type: string
 *           example: "123456789"
 *         gender:
 *           $ref: '#/components/schemas/ICatalogModel'
 *         profession:
 *           $ref: '#/components/schemas/ICatalogModel'
 *         bloodType:
 *           $ref: '#/components/schemas/ICatalogModel'
 *         weight:
 *           type: number
 *           example: 70
 *         height:
 *           type: number
 *           example: 175
 *         note:
 *           type: string
 *           example: "This is a note"
 *         basePlan:
 *           $ref: '#/components/schemas/ICatalogModel'
 *         country:
 *           $ref: '#/components/schemas/ICatalogModel'
 *         state:
 *           $ref: '#/components/schemas/ICatalogModel'
 *         city:
 *           $ref: '#/components/schemas/ICatalogModel'
 *         mail1:
 *           type: string
 *           example: john.doe@example.com
 *         mail2:
 *           type: string
 *           example: jane.doe@example.com
 *         cel1:
 *           type: string
 *           example: "+1234567890"
 *         cel2:
 *           type: string
 *           example: "+0987654321"
 *         cel1w:
 *           type: boolean
 *           example: true
 *         cel2w:
 *           type: boolean
 *           example: false
 *         telHome1:
 *           type: string
 *           example: "1234567"
 *         telHome2:
 *           type: string
 *           example: "7654321"
 *         workHome1:
 *           type: string
 *           example: "123456"
 *         workHome2:
 *           type: string
 *           example: "654321"
 *         indStatus:
 *           $ref: '#/components/schemas/ICatalogModel'
 *         priority:
 *           $ref: '#/components/schemas/ICatalogModel'
 *         indBlocked:
 *           type: boolean
 *           example: false
 *         blockingReasons:
 *           $ref: '#/components/schemas/ICatalogModel'
 *         indActive:
 *           type: boolean
 *           example: true
 *         indArchive:
 *           type: boolean
 *           example: false
 *         avatarSrc:
 *           type: string
 *           example: "/path/to/avatar.jpg"
 *         medicalReport:
 *           $ref: '#/components/schemas/IMedicalReportResponse'
 *         medicines:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/IBusinessPartnerMedicine'
 *         contacts:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/IBusinessPartnerContactResponse'
 *       required:
 *         - businessPartnersId
 *         - firstName
 *         - lastName
 *         - businessPartnerType
 *         - maritalStatus
 *         - dateOfBirth
 *         - idType
 *         - idNumber
 *         - gender
 *         - profession
 *         - bloodType
 *         - weight
 *         - height
 *         - basePlan
 *         - country
 *         - state
 *         - city
 *         - mail1
 *         - cel1
 *         - telHome1
 *         - indStatus
 *         - priority
 *         - indBlocked
 *         - indActive
 *         - indArchive
 *         - medicalReport
 *         - medicines
 *         - contacts
 */
