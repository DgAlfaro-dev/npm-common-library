import { UUID } from "crypto";

export interface IBusinessPartnerResponsibleUpdateRequest{
    indPayment: boolean,
    indPriorityId: number,
    idKinship: UUID,
    note: string | null,
}

/**
 * @swagger
 * components:
 *  schemas:
 *    IBusinessPartnerResponsibleUpdateRequest:
 *      type: object
 *      properties:
 *        indPayment:
 *          type: boolean
 *          description: Indicates if the business partner is responsible for payments.
 *        indPriority:
 *          type: number
 *          description: Indicator of the priority level.
 *        indPriorityId:
 *          type: number
 *          description: Unique identifier for the priority.
 *        idKinship:
 *          type: string
 *          format: uuid
 *          description: UUID identifying the kinship relationship.
 *        note:
 *          type: string
 *          nullable: true
 *          description: Additional notes regarding the business partner responsible.
 *      required:
 *        - indPayment
 *        - indPriority
 *        - indPriorityId
 *        - idKinship
 */
