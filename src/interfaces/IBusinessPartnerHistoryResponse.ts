import { UUID } from "crypto";

export interface IBusinessPartnerHistoryResponse {
  businessPartnerHistoryId: number;
  businessPartnerId: number;
  historyEventType: UUID;
  indStatusChgReason: number;
  indStatusOrigin: UUID;
  indStatusTarget: UUID;
  referenceId: string;
  indArchived: boolean;
  note: string | null;
}

/**
 * @swagger
 * components:
 *  schemas:
 *    IBusinessPartnerHistoryResponse:
 *      type: object
 *      properties:
 *        businessPartnerHistoryId:
 *          type: number
 *          description: Unique identifier for the business partner history record.
 *        businessPartnerId:
 *          type: number
 *          description: Identifier for the associated business partner.
 *        historyEventType:
 *          type: string
 *          format: uuid
 *          description: UUID of the history event type.
 *        indStatusChgReason:
 *          type: number
 *          description: Indicator of the reason for the status change.
 *        indStatusOrigin:
 *          type: string
 *          format: uuid
 *          description: UUID of the original status.
 *        indStatusTarget:
 *          type: string
 *          format: uuid
 *          description: UUID of the target status.
 *        referenceId:
 *          type: string
 *          description: Reference ID related to the history record.
 *        indArchived:
 *          type: boolean
 *          description: Indicates whether the history record is archived.
 *        note:
 *          type: string
 *          nullable: true
 *          description: Optional note associated with the history record.
 *      required:
 *        - businessPartnerHistoryId
 *        - businessPartnerId
 *        - historyEventType
 *        - indStatusChgReason
 *        - indStatusOrigin
 *        - indStatusTarget
 *        - referenceId
 *        - indArchived
 */
