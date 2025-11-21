import { ICatalogModel } from './ICatalogModel.js';

export interface IBusinessPartnerMedicalContactResponse {
  businessPartnerMedicalContactsId: number;
  businessPartnersId: number;
  doctor: IDoctor;
  note?: string | null;
  registerDate: Date;
  registeredBy: IRegisteredBy; 
  endDate?: Date | null;
  endedBy?: IRegisteredBy | null;
  updatedDate: Date;
  updatedBy: IRegisteredBy;
  indActive: boolean;
  inactivationNote?: string | null;
}

 interface IRegisteredBy {
  usuarioId: number;
  loginUsr: string;
  nombre: string;
}

export interface IDoctor {
  doctorId: number,
  doctorName: string,
  medSpeciality: ICatalogModel,
  officeDir: string,
  mail: string,
  celPhone: string,
  officePhone: string
}

/**
 * @swagger
 * components:
 *   schemas:
 *     IBusinessPartnerMedicalContactResponse:
 *       type: object
 *       properties:
 *         businessPartnersId:
 *           type: number
 *         doctor:
 *           $ref: '#/components/schemas/IDoctor'
 *         note:
 *           type: string
 *           nullable: true
 *         registerDate:
 *           type: string
 *           format: date-time
 *         registeredBy:
 *           $ref: '#/components/schemas/IRegisteredBy'
 *         endDate:
 *           type: string
 *           format: date-time
 *           nullable: true
 *         endedBy:
 *           $ref: '#/components/schemas/IRegisteredBy'
 *           nullable: true
 *         isActive:
 *           type: boolean
 *         inactivationNote:
 *           type: string
 *           nullable: true
 *     IRegisteredBy:
 *       type: object
 *       properties:
 *         usuarioId:
 *           type: number
 *         loginUsr:
 *           type: string
 *         nombre:
 *           type: string
 *     IDoctor:
 *       type: object
 *       properties:
 *         doctorId:
 *           type: number
 *         doctorName:
 *           type: string
 *         medSpeciality:
 *           $ref: '#/components/schemas/ICatalogModel'
 */

