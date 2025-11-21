import { UUID } from 'crypto';

export interface IBusinessPartnerResponsibleRequest {
  businessPartnersId: number;
  businessPartnersIdResponsible: number;
  indPayment: boolean;
  indPriority: number;
  idKinship: UUID;
  note: string | null;
}

/**
 * @swagger
 * components:
 *   schemas:
 *     BusinessPartnerResponsibleRequest:
 *       type: object
 *       required:
 *         - businessPartnersId
 *         - businessPartnersIdResponsible
 *         - indPayment
 *         - indPriority
 *         - idKinship
 *         - note
 *       properties:
 *         businessPartnersId:
 *           type: integer
 *           description: Unique identifier of the business partner
 *         businessPartnersIdResponsible:
 *           type: integer
 *           description: Unique identifier of the responsible business partner
 *         indPayment:
 *           type: boolean
 *           description: Indicator of payment responsibility
 *         indPriority:
 *           type: integer
 *           description: Indicator of priority
 *         idKinship:
 *           type: string
 *           format: uuid
 *           description: UUID of the kinship identifier
 *         note:
 *           type: string
 *           nullable: true
 *           description: Optional note regarding the business partner responsible
 */
