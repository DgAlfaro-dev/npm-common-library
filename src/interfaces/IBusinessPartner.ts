import { UUID } from 'crypto';
import { IBusinessPartnerContactRequest } from './IBusinessPartnerContactRequest';

export interface IBusinessPartner {
  firstName: string;
  secondName: string;
  lastName: string;
  sLastName: string;
  businessPartnerTypeId: UUID;
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
  indStatusId: UUID;
  indPriority?: number;
  indBlocked: boolean;
  idBlockedReason?: number;
  indActive: boolean;
  indArchive: boolean;
  avatarSrc: string;
  medicalRptId?: number;
  maritalStatus: UUID;
  businessPartnerGroupId?: number;
  centerId?: number;
  usuarioId?: number;
  // businessPartnersIdResponsible: number;
  contacts: IBusinessPartnerContactRequest[];
}


/**
 * @swagger
 * components:
 *   schemas:
 *     IBusinessPartnerRequest:
 *       type: object
 *       properties:
 *         firstName:
 *           type: string
 *           example: John
 *         secondName:
 *           type: string
 *           example: James
 *         lastName:
 *           type: string
 *           example: Doe
 *         sLastName:
 *           type: string
 *           example: Smith
 *         businessPartnersType:
 *           type: string
 *           example: R (responsable)
 *         businessPartnerTypeId:
 *           type: string
 *           example: "123e4567-e89b-12d3-a456-426614174000"
 *         dateOfBirth:
 *           type: string
 *           format: date
 *           example: "1990-01-01"
 *         idType:
 *           type: number
 *           example: 1
 *         idNumber:
 *           type: string
 *           example: "123456789"
 *         idGender:
 *           type: number
 *           example: 1
 *         idProfession:
 *           type: number
 *           example: 2
 *         idBloodType:
 *           type: number
 *           example: 1
 *         weight:
 *           type: number
 *           example: 70
 *         height:
 *           type: number
 *           example: 180
 *         note:
 *           type: string
 *           example: Note for business partner
 *         basePlanId:
 *           type: number
 *           example: 1
 *         countryId:
 *           type: number
 *           example: 1
 *         stateId:
 *           type: number
 *           example: 1
 *         cityId:
 *           type: number
 *           example: 1
 *         mail1:
 *           type: string
 *           format: email
 *           example: john@example.com
 *         mail2:
 *           type: string
 *           format: email
 *           example: james@example.com
 *         cel1:
 *           type: string
 *           example: "1234567890"
 *         cel2:
 *           type: string
 *           example: "0987654321"
 *         cel1w:
 *           type: boolean
 *           example: true
 *         cel2w:
 *           type: boolean
 *           example: false
 *         telHome1:
 *           type: string
 *           example: "9876543"
 *         telHome2:
 *           type: string
 *           example: "7654321"
 *         workHome1:
 *           type: string
 *           example: "8765432"
 *         workHome2:
 *           type: string
 *           example: "2345678"
 *         indStatus:
 *           type: string
 *           example: A (active)
 *         indStatusId:
 *           type: string
 *           example: "123e4567-e89b-12d3-a456-426614174000"
 *         indPriority:
 *           type: number
 *           example: 1
 *         indBlocked:
 *           type: boolean
 *           example: false
 *         idBlockedReason:
 *           type: number
 *           example: 1
 *         indActive:
 *           type: boolean
 *           example: true
 *         indArchive:
 *           type: boolean
 *           example: false
 *         avatarSrc:
 *           type: string
 *           example: avatar.jpg
 *         medicalRptId:
 *           type: number
 *           example: 1
 *         maritalStatus:
 *           type: string
 *           example: "123e4567-e89b-12d3-a456-426614174000"
 *         businessPartnerGroupId:
 *           type: number
 *           example: 1
 *         businessPartnersIdResponsible:
 *           type: number
 *           example: 1
 *         contacts:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/IBusinessPartnerContactRequest'
 *       required:
 *         - firstName
 *         - lastName
 *         - businessPartnersType
 *         - dateOfBirth
 *         - idType
 *         - idNumber
 *         - idGender
 *         - idProfession
 *         - idBloodType
 *         - weight
 *         - height
 *         - mail1
 *         - cel1
 *         - cel1w
 *         - telHome1
 *         - workHome1
 *         - indStatus
 *         - indBlocked
 *         - indActive
 *         - indArchive
 *         - avatarSrc
 *         - businessPartnersIdResponsible
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     IBusinessPartnerContactRequest:
 *       type: object
 *       properties:
 *         contactName:
 *           type: string
 *           example: John Doe
 *         mail1:
 *           type: string
 *           format: email
 *           example: john@example.com
 *         mail2:
 *           type: string
 *           format: email
 *           example: jane@example.com
 *         cel1:
 *           type: string
 *           example: "1234567890"
 *         cel2:
 *           type: string
 *           example: "0987654321"
 *         cel1w:
 *           type: boolean
 *           example: true
 *         cel2w:
 *           type: boolean
 *           example: false
 *         telHome1:
 *           type: string
 *           example: "9876543"
 *         telHome2:
 *           type: string
 *           example: "7654321"
 *         workHome1:
 *           type: string
 *           example: "8765432"
 *         workHome2:
 *           type: string
 *           example: "2345678"
 *         indMain:
 *           type: boolean
 *           example: true
 *         Note:
 *           type: string
 *           example: Note for contact
 *       required:
 *         - contactName
 *         - mail1
 *         - cel1
 *         - cel1w
 *         - indMain
 */
