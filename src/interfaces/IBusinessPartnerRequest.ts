import { UUID } from 'crypto';
import { IBusinessPartnerContactRequest } from './IBusinessPartnerContactRequest.js';

export interface IBusinessPartnerRequest {
  firstName: string;
  secondName: string;
  lastName: string;
  sLastName: string;
  businessPartnersTypeId: UUID;
  dateOfBirth: Date;
  idType: number;
  idNumber: string;
  idGender: number;
  genderCatalog: UUID,
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
  maritalStatus: UUID,
  businessPartnerGroupId?: number;
  businessPartnersIdResponsible: string;
  contacts: IBusinessPartnerContactRequest[];
}


/**
 * @swagger
 * components:
 *  schemas:
 *    IBusinessPartnerRequest:
 *      type: object
 *      properties:
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
 *        businessPartnersTypeId:
 *          type: string
 *          format: uuid
 *          description: UUID identifying the type of business partner.
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
 *        basePlanId:
 *          type: number
 *          nullable: true
 *          description: Base plan identifier for the business partner.
 *        countryId:
 *          type: number
 *          nullable: true
 *          description: Country identifier for the business partner.
 *        stateId:
 *          type: number
 *          nullable: true
 *          description: State identifier for the business partner.
 *        cityId:
 *          type: number
 *          nullable: true
 *          description: City identifier for the business partner.
 *        mail1:
 *          type: string
 *          description: Primary email address.
 *        mail2:
 *          type: string
 *          nullable: true
 *          description: Secondary email address.
 *        cel1:
 *          type: string
 *          description: Primary cell phone number.
 *        cel2:
 *          type: string
 *          nullable: true
 *          description: Secondary cell phone number.
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
 *          nullable: true
 *          description: Secondary home telephone number.
 *        workHome1:
 *          type: string
 *          description: Primary work telephone number.
 *        workHome2:
 *          type: string
 *          nullable: true
 *          description: Secondary work telephone number.
 *        indStatusId:
 *          type: string
 *          format: uuid
 *          description: UUID indicating the status of the business partner.
 *        indPriority:
 *          type: number
 *          nullable: true
 *          description: Priority indicator for the business partner.
 *        indBlocked:
 *          type: boolean
 *          description: Indicates if the business partner is blocked.
 *        idBlockedReason:
 *          type: number
 *          nullable: true
 *          description: Reason for blocking the business partner.
 *        indActive:
 *          type: boolean
 *          description: Indicates if the business partner is active.
 *        indArchive:
 *          type: boolean
 *          description: Indicates if the business partner is archived.
 *        avatarSrc:
 *          type: string
 *          description: Source URL of the business partner's avatar.
 *        medicalRptId:
 *          type: number
 *          nullable: true
 *          description: Medical report identifier for the business partner.
 *        maritalStatus:
 *          type: string
 *          format: uuid
 *          description: UUID indicating the marital status of the business partner.
 *        businessPartnerGroupId:
 *          type: number
 *          nullable: true
 *          description: Group identifier for the business partner.
 *        businessPartnersIdResponsible:
 *          type: string
 *          description: Identifier of the responsible business partner.
 *        contacts:
 *          type: array
 *          items:
 *            $ref: '#/components/schemas/IBusinessPartnerContactRequest'
 *          description: List of contact information for the business partner.
 *      required:
 *        - firstName
 *        - lastName
 *        - businessPartnersTypeId
 *        - dateOfBirth
 *        - idType
 *        - idNumber
 *        - idGender
 *        - genderCatalog
 *        - idProfession
 *        - idBloodType
 *        - weight
 *        - height
 *        - mail1
 *        - cel1
 *        - cel1w
 *        - cel2w
 *        - indStatusId
 *        - indBlocked
 *        - indActive
 *        - indArchive
 *        - avatarSrc
 *        - maritalStatus
 *        - businessPartnersIdResponsible
 *        - contacts
 */
