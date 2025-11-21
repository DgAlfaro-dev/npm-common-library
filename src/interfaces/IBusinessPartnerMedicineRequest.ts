import { UUID } from "crypto";

export interface IBusinessPartnerMedicineRequest {
  medicineId: number;
  medicineName: string;
  medicineGenericName: string;
  medicinePresentationId: number;
  dosisQuantity: number;
  measureId: number;
  dosisFrequency: number;
  dosisFrequencyMeasure: UUID;
  dosisTime: number;
  dosisTimeMeasure: UUID;
  dosisModeId: UUID;
  dosisNote?: string;
  startDateTime: Date;
  endDateTime?: Date;
  medicalRptRecipeId: number;
}

/**
 * @swagger
 * components:
 *   schemas:
 *     IBusinessPartnerMedicineRequest:
 *       type: object
 *       properties:
 *         medicineId:
 *           type: number
 *           example: 1
 *         medicineName:
 *           type: string
 *           example: Paracetamol
 *         medicineGenericName:
 *           type: string
 *           example: Acetaminophen
 *         medicinePresentationId:
 *           type: number
 *           example: 2
 *         dosisQuantity:
 *           type: number
 *           example: 500
 *         measureId:
 *           type: number
 *           example: 1
 *         dosisFrequency:
 *           type: number
 *           example: 3
 *         dosisFrequencyMeasure:
 *           type: string
 *           example: times a day
 *         dosisTime:
 *           type: number
 *           example: 8
 *         dosisTimeMeasure:
 *           type: string
 *           example: AM
 *         dosisModeId:
 *           type: string
 *           example: oral
 *         dosisNote:
 *           type: string
 *           example: Take with food
 *         startDateTime:
 *           type: string
 *           format: date-time
 *           example: "2024-02-16T12:00:00Z"
 *         endDateTime:
 *           type: string
 *           format: date-time
 *           example: "2024-02-20T12:00:00Z"
 *         medicalRptRecipeId:
 *           type: number
 *           example: 1
 *         indSuspended:
 *           type: boolean
 *           example: false
 *         suspensionNote:
 *           type: string
 *           example: Stop if rash appears
 *       required:
 *         - medicineId
 *         - medicineName
 *         - medicineGenericName
 *         - medicinePresentationId
 *         - dosisQuantity
 *         - measureId
 *         - dosisFrequency
 *         - dosisFrequencyMeasure
 *         - dosisTime
 *         - dosisTimeMeasure
 *         - dosisModeId
 *         - startDateTime
 *         - medicalRptRecipeId
 *         - indSuspended
 */
