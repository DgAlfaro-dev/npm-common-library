import { ICatalogModel } from "./ICatalogModel.js";

export interface IMedicalReportResponse {
  medicalRptId: number;
  medicalRptType: string;
  appointmentDateTime: Date;
  nextAppointmentDateTime: Date;
  doctorId: number;
  doctorName: string;
  weight: number;
  height: number;
  temperature: number;
  bloodPressureSystolic: number;
  bloodPressureDiastolic: number;
  pulse: number;
  visionAcuityLeft: number;
  visionAcuityRight: number;
  physicalExamNote: string;
  indStatus: ICatalogModel,
  note: string;
  comments: string;
  healthCondition: ICatalogModel,
  recipes: IMedicalReportRecipeInMedicalReport[]; // Array of MedicalReportRecipeDTO
}

 export interface IMedicalReportRecipeInMedicalReport {
  dosisQuantity: number;
  dosisMeasure: number;
  dosisFrequency: number;
  dosisFrequencyMeasure: string;
  dosisTime: number;
  dosisTimeMeasure: string;
  dosisMode: string;
  dosisNote: string;
  startDateTime: Date;
  endDateTime: Date;
  medicineName?: string;
  medicineGenericName?: string;
  medicinePresentationName?: string;
  abbreviation?: string;
}

/**
 * @swagger
 * components:
 *   schemas:
 *     IMedicalReportResponse:
 *       type: object
 *       properties:
 *         medicalRptId:
 *           type: number
 *           example: 1
 *         medicalRptType:
 *           type: string
 *           example: "Type"
 *         appointmentDateTime:
 *           type: string
 *           format: date-time
 *           example: "2024-02-16T12:00:00Z"
 *         doctorId:
 *           type: number
 *           example: 1
 *         doctorName:
 *           type: string
 *           example: "Dr. Smith"
 *         weight:
 *           type: number
 *           example: 70
 *         height:
 *           type: number
 *           example: 170
 *         temperature:
 *           type: number
 *           example: 36.5
 *         bloodPressureSystolic:
 *           type: number
 *           example: 120
 *         bloodPressureDiastolic:
 *           type: number
 *           example: 80
 *         pulse:
 *           type: number
 *           example: 75
 *         visionAcuityLeft:
 *           type: number
 *           example: 20
 *         visionAcuityRight:
 *           type: number
 *           example: 20
 *         physicalExamNote:
 *           type: string
 *           example: "Physical exam note"
 *         indStatus:
 *           $ref: '#/components/schemas/ICatalogModel'
 *         note:
 *           type: string
 *           example: "Note"
 *         comments:
 *           type: string
 *           example: "Comments"
 *         healthCondition:
 *           $ref: '#/components/schemas/ICatalogModel'
 *         recipes:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/IMedicalReportRecipe'
 *       required:
 *         - medicalRptId
 *         - medicalRptType
 *         - appointmentDateTime
 *         - doctorId
 *         - doctorName
 *         - weight
 *         - height
 *         - temperature
 *         - bloodPressureSystolic
 *         - bloodPressureDiastolic
 *         - pulse
 *         - visionAcuityLeft
 *         - visionAcuityRight
 *         - physicalExamNote
 *         - indStatus
 *         - note
 *         - comments
 *         - healthCondition
 *         - recipes
 *
 *
 *     IMedicalReportRecipe:
 *       type: object
 *       properties:
 *         dosisQuantity:
 *           type: number
 *           example: 1
 *         dosisMeasure:
 *           type: number
 *           example: 10
 *         dosisFrequency:
 *           type: number
 *           example: 3
 *         dosisFrequencyMeasure:
 *           type: string
 *           example: "daily"
 *         dosisTime:
 *           type: number
 *           example: 8
 *         dosisTimeMeasure:
 *           type: string
 *           example: "hours"
 *         dosisMode:
 *           type: string
 *           example: "Mode"
 *         dosisNote:
 *           type: string
 *           example: "Note"
 *         startDateTime:
 *           type: string
 *           format: date-time
 *           example: "2024-02-16T12:00:00Z"
 *         endDateTime:
 *           type: string
 *           format: date-time
 *           example: "2024-02-16T12:00:00Z"
 *         medicineName:
 *           type: string
 *           example: "Medicine name"
 *         medicineGenericName:
 *           type: string
 *           example: "Generic name"
 *         medicinePresentationName:
 *           type: string
 *           example: "Presentation name"
 *         abbreviation:
 *           type: string
 *           example: "Abbreviation"
 *       required:
 *         - dosisQuantity
 *         - dosisMeasure
 *         - dosisFrequency
 *         - dosisFrequencyMeasure
 *         - dosisTime
 *         - dosisTimeMeasure
 *         - dosisMode
 *         - dosisNote
 *         - startDateTime
 *         - endDateTime
 */
