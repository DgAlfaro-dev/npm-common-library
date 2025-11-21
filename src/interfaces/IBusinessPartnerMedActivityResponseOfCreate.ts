import { UUID } from "crypto";

export interface IBusinessPartnerMedActivityResponseOfCreate {
  businessPartnerMedActivityId: number;
  businessPartnersId: number;
  activityId: number;
  diagnosticDate: Date;
  medicalRptId: number | null;
  note: string | null;
  activityFrequency: number;
  activityFrequencyMeasureId: UUID | null;
  activityTime: number | null;
  activityTimeMeasureId: UUID | null;
  activityTimeHour: number | null;
  registerDate: Date;
  registeredBy: number;
  endDate: Date | null;
  endedBy: number | null;
  indActive: boolean;
  inactivationNote: string | null;
  finishDateTime: Date,
  startDateTime: Date,
  endDateTime: Date,
}

/**
 * @swagger
 * components:
 *   schemas:
 *     IBusinessPartnerMedActivityResponseOfCreate:
 *       type: object
 *       properties:
 *         businessPartnerMedActivityId:
 *           type: number
 *           description: Unique identifier of the medical activity record for the business partner.
 *         businessPartnersId:
 *           type: number
 *           description: Unique identifier of the business partner associated with the medical activity.
 *         activityId:
 *           type: number
 *           description: Unique identifier of the activity.
 *         diagnosticDate:
 *           type: string
 *           format: date-time
 *           description: Date of the diagnosis associated with the medical activity.
 *         medicalRptId:
 *           type: number
 *           nullable: true
 *           description: Optional identifier of the medical report associated with the activity.
 *         note:
 *           type: string
 *           nullable: true
 *           description: Additional note about the medical activity.
 *         activityFrequency:
 *           type: number
 *           description: Frequency at which the activity should be performed.
 *         activityFrequencyMeasure:
 *           type: string
 *           description: Unit of measure for the activity frequency (e.g., days, weeks).
 *         activityFrequencyMeasureId:
 *           type: string
 *           format: uuid
 *           nullable: true
 *           description: Unique identifier of the frequency measure, if applicable.
 *         activityTime:
 *           type: number
 *           nullable: true
 *           description: Duration of the activity, if applicable.
 *         activityTimeMeasure:
 *           type: string
 *           description: Unit of measure for the activity time (e.g., minutes, hours).
 *         activityTimeMeasureId:
 *           type: string
 *           format: uuid
 *           nullable: true
 *           description: Unique identifier of the time measure, if applicable.
 *         activityTimeHour:
 *           type: number
 *           nullable: true
 *           description: Recommended hour of the day for performing the activity, if applicable.
 *         registerDate:
 *           type: string
 *           format: date-time
 *           description: Date the medical activity was registered in the system.
 *         registeredBy:
 *           type: number
 *           description: Identifier of the user who registered the medical activity.
 *         endDate:
 *           type: string
 *           format: date-time
 *           nullable: true
 *           description: Date the medical activity was marked as inactive, if applicable.
 *         endedBy:
 *           type: number
 *           nullable: true
 *           description: Identifier of the user who marked the medical activity as inactive, if applicable.
 *         indActive:
 *           type: boolean
 *           description: Indicates whether the medical activity is active.
 *         inactivationNote:
 *           type: string
 *           nullable: true
 *           description: Note about the inactivation of the medical activity, if applicable.
*/
