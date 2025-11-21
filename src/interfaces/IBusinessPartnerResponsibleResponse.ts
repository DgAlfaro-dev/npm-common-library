import { UUID } from 'crypto';
import { ICatalogModel } from './ICatalogModel.js';
import { IBusinessPartnerAddressResponse } from './IBusinessPartnerAddressResponse.js';

export interface IBusinessPartnerResponsibleResponse {
  businessPartnersId: number;
  businessPartnersResponsible: BusinessPartnerData;
  indPayment: boolean;
  priority: {
    priorityId: number;  
    priorityName: string;
    colour: string;
    indActive: boolean;
    note: string;
  }
  kinship: ICatalogModel;
  note: string | null;
}

export interface BusinessPartnerData {
  businessPartnersId: number;
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
  contacts: BusinessPartnersContact[] | null;
  businessPartnerAddress: IBusinessPartnerAddressResponse[]
}

export interface BusinessPartnersContact {
  businessPartnersContactId: number;
  contactName: string;
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
  indMain: boolean;
  Note?: string;
}


/**
 * @swagger
 * components:
 *  schemas:
 *    BusinessPartnersContact:
 *      type: object
 *      properties:
 *        businessPartnersContactId:
 *          type: number
 *          description: Unique identifier for the business partner contact.
 *        contactName:
 *          type: string
 *          description: Name of the contact person.
 *        mail1:
 *          type: string
 *          description: Primary email address of the contact.
 *        mail2:
 *          type: string
 *          description: Secondary email address of the contact.
 *        cel1:
 *          type: string
 *          description: Primary cell phone number of the contact.
 *        cel2:
 *          type: string
 *          description: Secondary cell phone number of the contact.
 *        cel1w:
 *          type: boolean
 *          description: Indicates if the primary cell phone number is WhatsApp enabled.
 *        cel2w:
 *          type: boolean
 *          description: Indicates if the secondary cell phone number is WhatsApp enabled.
 *        telHome1:
 *          type: string
 *          description: Primary home telephone number.
 *        telHome2:
 *          type: string
 *          description: Secondary home telephone number.
 *        workHome1:
 *          type: string
 *          description: Primary work telephone number.
 *        workHome2:
 *          type: string
 *          description: Secondary work telephone number.
 *        indMain:
 *          type: boolean
 *          description: Indicates if this contact is the main contact.
 *        Note:
 *          type: string
 *          nullable: true
 *          description: Additional notes about the contact.
 *      required:
 *        - businessPartnersContactId
 *        - contactName
 *        - mail1
 *        - cel1
 *        - cel1w
 *        - cel2w
 *        - indMain
 * 
 *    BusinessPartnerData:
 *      type: object
 *      properties:
 *        businessPartnersId:
 *          type: number
 *          description: Unique identifier for the business partner.
 *        firstName:
 *          type: string
 *          description: First name of the business partner.
 *        secondName:
 *          type: string
 *          description: Second name of the business partner.
 *        lastName:
 *          type: string
 *          description: Last name of the business partner.
 *        sLastName:
 *          type: string
 *          description: Second last name of the business partner.
 *        dateOfBirth:
 *          type: string
 *          format: date
 *          description: Date of birth of the business partner.
 *        idType:
 *          type: number
 *          description: Identifier for the type of ID document.
 *        idNumber:
 *          type: string
 *          description: Number of the ID document.
 *        idGender:
 *          type: number
 *          description: Gender identifier of the business partner.
 *        genderCatalog:
 *          type: string
 *          format: uuid
 *          description: UUID of the gender in the catalog.
 *        idProfession:
 *          type: number
 *          description: Profession identifier of the business partner.
 *        idBloodType:
 *          type: number
 *          description: Blood type identifier of the business partner.
 *        weight:
 *          type: number
 *          description: Weight of the business partner in kilograms.
 *        height:
 *          type: number
 *          description: Height of the business partner in centimeters.
 *        note:
 *          type: string
 *          nullable: true
 *          description: Additional notes about the business partner.
 *        # Repeat for other properties...
 *        contacts:
 *          type: array
 *          items:
 *            $ref: '#/components/schemas/BusinessPartnersContact'
 *          description: List of contact information for the business partner.
 * 
 *    IBusinessPartnerResponsibleResponse:
 *      type: object
 *      properties:
 *        businessPartnersId:
 *          type: number
 *          description: Unique identifier for the business partner.
 *        businessPartnersResponsible:
 *          $ref: '#/components/schemas/BusinessPartnerData'
 *          description: Detailed information of the business partner responsible.
 *        indPayment:
 *          type: boolean
 *          description: Indicates if the business partner is responsible for payments.
 *        priority:
 *          type: object
 *          properties:
 *            priorityId:
 *              type: number
 *              description: Unique identifier for the priority.
 *            priorityName:
 *              type: string
 *              description: Name of the priority.
 *            colour:
 *              type: string
 *              description: Colour associated with the priority.
 *            indActive:
 *              type: boolean
 *              description: Indicates if the priority is active.
 *            note:
 *              type: string
 *              description: Additional notes about the priority.
 *        kinship:
 *          $ref: '#/components/schemas/ICatalogModel'
 *          description: Kinship relation of the business partner responsible.
 *        note:
 *          type: string
 *          nullable: true
 *          description: Additional notes about the business partner responsible.
*/