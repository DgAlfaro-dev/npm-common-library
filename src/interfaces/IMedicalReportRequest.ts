import { UUID } from "crypto";

export interface IMedicalReportRequest {
    medicalRptType?: string;
    medicalRptTypeId: UUID,
    businessPartnersId?: number;
    appointmentDateTime?: Date;
    nextAppointmentDateTime?: Date;
    clientId?: number;
    doctorId?: number;
    weight?: number;
    height?: number;
    temperature?: number;
    bloodPressureSystolic?: number;
    bloodPressureDiastolic?: number;
    pulse?: number;
    visionAcuityLeft?: number;
    visionAcuityRight?: number;
    physicalExamNote?: string;
    indStatus?: string;
    indStatusId?: UUID;
    healthCondition?: UUID;
    note?: string;
    comments?: string;
  }

  /**
 * @swagger
 * components:
 *   schemas:
 *     IMedicalReportRequest:
 *       type: object
 *       properties:
 *         medicalRptType:
 *           type: string
 *           description: Optional. Type of the medical report.
 *         businessPartnersId:
 *           type: number
 *           description: Optional. Identifier of the business partner associated with the medical report.
 *         appointmentDateTime:
 *           type: string
 *           format: date-time
 *           description: Optional. Scheduled date and time of the medical appointment.
 *         clientId:
 *           type: number
 *           description: Optional. Identifier of the client for whom the medical report is prepared.
 *         doctorId:
 *           type: number
 *           description: Optional. Identifier of the doctor responsible for the report.
 *         weight:
 *           type: number
 *           format: float
 *           description: Optional. Patient's weight in kilograms.
 *         height:
 *           type: number
 *           format: float
 *           description: Optional. Patient's height in centimeters.
 *         temperature:
 *           type: number
 *           format: float
 *           description: Optional. Patient's body temperature in degrees Celsius.
 *         bloodPressureSystolic:
 *           type: number
 *           description: Optional. Systolic blood pressure measurement.
 *         bloodPressureDiastolic:
 *           type: number
 *           description: Optional. Diastolic blood pressure measurement.
 *         pulse:
 *           type: number
 *           description: Optional. Patient's pulse rate per minute.
 *         visionAcuityLeft:
 *           type: number
 *           description: Optional. Measurement of the patient's vision acuity.
 *         visionAcuityRight:
 *           type: number
 *           description: Optional. Measurement of the patient's vision acuity.
 *         physicalExamNote:
 *           type: string
 *           description: Optional. Notes from the physical examination.
 *         indStatus:
 *           type: string
 *           description: Optional. Indicator of the status of the report (e.g., urgent, follow-up).
 *         indStatusId:
 *           type: string
 *           format: uuid
 *           description: Optional. UUID identifier for the status indicator.
 *         healthCondition:
 *           type: string
 *           format: uuid
 *           description: Optional. UUID of the diagnosed health condition.
 *         note:
 *           type: string
 *           description: Optional. Additional notes pertaining to the medical report.
 *         comments:
 *           type: string
 *           description: Optional. Comments related to the medical report.
 *       example:
 *         medicalRptType: "Annual Checkup"
 *         businessPartnersId: 1234
 *         appointmentDateTime: "2024-03-15T09:00:00Z"
 *         clientId: 5678
 *         doctorId: 1122
 *         weight: 70
 *         height: 175
 *         temperature: 36.6
 *         bloodPressureSystolic: 120
 *         bloodPressureDiastolic: 80
 *         pulse: 72
 *         visionAcuityLeft: 1.0
 *         visionAcuityRight: 1.0
 *         physicalExamNote: "Patient is in overall good health."
 *         indStatus: "Completed"
 *         indStatusId: "f47ac10b-58cc-4372-a567-0e02b2c3d479"
 *         healthCondition: "d3b07384-d113-4ec8-98e2-417cbbf44eba"
 *         note: "Next appointment scheduled for six months later."
 *         comments: "Patient should continue with the current medication."
 */
