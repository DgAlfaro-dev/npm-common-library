import { UUID } from 'crypto';

export interface IBusinessPartnerUpdateRequest {
  usuarioId?: number;
  firstName?: string;
  secondName?: string;
  lastName?: string;
  sLastName?: string;
  dateOfBirth?: Date;
  idType?: number;
  idNumber?: string;
  idGender?: number;
  genderCatalog?: UUID;
  idProfession?: number;
  idBloodType?: number;
  weight?: number;
  height?: number;
  note?: string;
  basePlanId?: number;
  countryId?: number;
  stateId?: number;
  cityId?: number;
  mail1?: string;
  mail2?: string;
  cel1?: string;
  cel2?: string;
  cel1w?: boolean;
  cel2w?: boolean;
  telHome1?: string;
  telHome2?: string;
  workHome1?: string;
  workHome2?: string;
  indPriority?: number;
  indBlocked?: boolean;
  idBlockedReason?: number;
  indActive?: boolean;
  indArchive?: boolean;
  avatarSrc?: string;
  medicalRptId?: number;
  centerId?: number;
  businessPartnerGroupId?: number;
  businessPartnerTypeId?: UUID;
  indStatusId?: UUID;
  maritalStatus?: UUID;
}

/**
 * @swagger
 * components:
 *  schemas:
 *    IBusinessPartnerUpdateRequest:
 *      type: object
 *      properties:
 *        usuarioId:
 *          type: number
 *          nullable: true
 *          description: Unique identifier for the user associated with the business partner.
 *        firstName:
 *          type: string
 *          nullable: true
 *          description: First name of the business partner.
 *        secondName:
 *          type: string
 *          nullable: true
 *          description: Middle name of the business partner.
 *        lastName:
 *          type: string
 *          nullable: true
 *          description: Last name of the business partner.
 *        sLastName:
 *          type: string
 *          nullable: true
 *          description: Second last name of the business partner.
 *        dateOfBirth:
 *          type: string
 *          format: date
 *          nullable: true
 *          description: Date of birth of the business partner.
 *        idType:
 *          type: number
 *          nullable: true
 *          description: Identifier for the type of ID document.
 *        idNumber:
 *          type: string
 *          nullable: true
 *          description: Number of the ID document.
 *        idGender:
 *          type: number
 *          nullable: true
 *          description: Gender identifier of the business partner.
 *        genderCatalog:
 *          type: string
 *          format: uuid
 *          nullable: true
 *          description: UUID of the gender in the catalog.
 *        idProfession:
 *          type: number
 *          nullable: true
 *          description: Profession identifier of the business partner.
 *        idBloodType:
 *          type: number
 *          nullable: true
 *          description: Blood type identifier of the business partner.
 *        weight:
 *          type: number
 *          nullable: true
 *          description: Weight of the business partner in kilograms.
 *        height:
 *          type: number
 *          nullable: true
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
 *          nullable: true
 *          description: Primary email address.
 *        mail2:
 *          type: string
 *          nullable: true
 *          description: Secondary email address.
 *        cel1:
 *          type: string
 *          nullable: true
 *          description: Primary cell phone number.
 *        cel2:
 *          type: string
 *          nullable: true
 *          description: Secondary cell phone number.
 *        cel1w:
 *          type: boolean
 *          nullable: true
 *          description: Indicates if the primary cell phone number is WhatsApp enabled.
 *        cel2w:
 *          type: boolean
 *          nullable: true
 *          description: Indicates if the secondary cell phone number is WhatsApp enabled.
 *        telHome1:
 *          type: string
 *          nullable: true
 *          description: Primary home telephone number.
 *        telHome2:
 *          type: string
 *          nullable: true
 *          description: Secondary home telephone number.
 *        workHome1:
 *          type: string
 *          nullable: true
 *          description: Primary work telephone number.
 *        workHome2:
 *          type: string
 *          nullable: true
 *          description: Secondary work telephone number.
 *        indPriority:
 *          type: number
 *          nullable: true
 *          description: Indicator of the priority.
 *        indBlocked:
 *          type: boolean
 *          nullable: true
 *          description: Indicates if the business partner is blocked.
 *        idBlockedReason:
 *          type: number
 *          nullable: true
 *          description: Reason for blocking the business partner.
 *        indActive:
 *          type: boolean
 *          nullable: true
 *          description: Indicates if the business partner is active.
 *        indArchive:
 *          type: boolean
 *          nullable: true
 *          description: Indicates if the business partner is archived.
 *        avatarSrc:
 *          type: string
 *          nullable: true
 *          description: Source URL of the business partner's avatar.
 *        medicalRptId:
 *          type: number
 *          nullable: true
 *          description: Medical report identifier for the business partner.
 *        businessPartnerGroupId:
 *          type: number
 *          nullable: true
 *          description: Group identifier for the business partner.
 *        businessPartnerTypeId:
 *          type: string
 *          format: uuid
 *          nullable: true
 *          description: UUID identifying the type of business partner.
 *        indStatusId:
 *          type: string
 *          format: uuid
 *          nullable: true
 *          description: UUID indicating the status of the business partner.
 *        maritalStatus:
 *          type: string
 *          format: uuid
 *          nullable: true
 *          description: UUID indicating the marital status of the business partner.
 */
