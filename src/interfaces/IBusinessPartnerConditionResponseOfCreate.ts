export interface IBusinessPartnerConditionResponseOfCreate {
  businessPartnerConditionId: number;
  businessPartnersId: number;
  conditionId: number;
  diagnosticDate: Date;
  medicalRptId: number | null;
  note: string | null;
  registerDate: Date;
  registeredBy: number;
  endDate: Date | null;
  endedBy: number | null;
  indActive: boolean;
  inactivationNote: string | null;
}

/**
 * @swagger
 * components:
 *   schemas:
 *     IBusinessPartnerConditionResponseOfCreate:
 *       type: object
 *       properties:
 *         businessPartnerConditionId:
 *           type: number
 *           description: Unique identifier of the business partner condition record.
 *         businessPartnersId:
 *           type: number
 *           description: Unique identifier of the business partner associated with the condition.
 *         conditionId:
 *           type: number
 *           description: Unique identifier of the condition.
 *         diagnosticDate:
 *           type: string
 *           format: date-time
 *           description: Date of the diagnosis associated with the condition.
 *         medicalRptId:
 *           type: number
 *           nullable: true
 *           description: Optional identifier of the medical report associated with the condition.
 *         note:
 *           type: string
 *           nullable: true
 *           description: Additional note about the condition.
 *         registerDate:
 *           type: string
 *           format: date-time
 *           description: Date the condition was registered in the system.
 *         registeredBy:
 *           type: number
 *           description: Identifier of the user who registered the condition.
 *         endDate:
 *           type: string
 *           format: date-time
 *           nullable: true
 *           description: Date the condition was marked as inactive, if applicable.
 *         endedBy:
 *           type: number
 *           nullable: true
 *           description: Identifier of the user who marked the condition as inactive, if applicable.
 *         indActive:
 *           type: boolean
 *           description: Indicates whether the condition is active.
 *         inactivationNote:
 *           type: string
 *           nullable: true
 *           description: Note about the inactivation of the condition, if applicable.
*/