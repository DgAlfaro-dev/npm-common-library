import { ICatalogModel } from "./ICatalogModel.js";

export interface IMedicalRptRecipeResponse{
    medicalRptRecipeId: number,
    medicalRptId: number,
    medicine: IMedicine,
    dosisQantity: number,
    dosisMeasure: IMeasure,
    dosisFrequency: number,
    dosisFrequencyMeasure: ICatalogModel,
    dosisTime: number,
    dosisTimeMeasure: ICatalogModel,
    dosisMode: ICatalogModel,
    dosisNote: string,
    startDateTime: Date,
    endDateTime: Date,
}

interface IMedicine {
    medicineId: number,
    medicineName: string,
    medicineGenericName: string,
    medicinePresentation: IMedicinePresentation
}

interface IMedicinePresentation {
    medicinePresentationId: number,
    medicinePresentationName: string,
    abbreviation: string,
    indActive: boolean,
    note: string,
}

interface IMeasure{
    measureId: number,
    measureName: string,
    measureAbbr: string,
    description: string,
    indActive: boolean,
}

/**
 * @swagger
 * components:
 *   schemas:
 *     IMedicalRptRecipeResponse:
 *       type: object
 *       properties:
 *         medicalRptRecipeId:
 *           type: number
 *           description: The unique identifier for the medical report recipe.
 *         medicalRptId:
 *           type: number
 *           description: The identifier of the medical report to which this recipe belongs.
 *         medicine:
 *           $ref: '#/components/schemas/IMedicine'
 *           description: Details about the medicine prescribed in the recipe.
 *         dosisQuantity:
 *           type: number
 *           description: The prescribed quantity of the medicine.
 *         dosisMeasure:
 *           $ref: '#/components/schemas/IMeasure'
 *           description: The measure unit for the dosage of the medicine.
 *         dosisFrequency:
 *           type: number
 *           description: How frequently the medicine is to be taken.
 *         dosisFrequencyMeasure:
 *           $ref: '#/components/schemas/ICatalogModel'
 *           description: The unit of measurement for the dosage frequency.
 *         dosisTime:
 *           type: number
 *           description: The specific time(s) at which the medicine should be taken.
 *         dosisTimeMeasure:
 *           $ref: '#/components/schemas/ICatalogModel'
 *           description: The unit of measurement for the dosis time.
 *         dosisMode:
 *           $ref: '#/components/schemas/ICatalogModel'
 *           description: The mode or method of administering the medicine.
 *         dosisNote:
 *           type: string
 *           description: Additional notes or instructions regarding the dosage.
 *         startDateTime:
 *           type: string
 *           format: date-time
 *           description: The start date and time for the medication schedule.
 *         endDateTime:
 *           type: string
 *           format: date-time
 *           description: The end date and time for the medication schedule.
 *       required:
 *         - medicalRptRecipeId
 *         - medicalRptId
 *         - medicine
 *         - dosisQuantity
 *         - dosisMeasure
 *         - dosisFrequency
 *         - dosisFrequencyMeasure
 *         - dosisTime
 *         - dosisTimeMeasure
 *         - dosisMode
 *         - startDateTime
 *         - endDateTime
 *     IMedicine:
 *       type: object
 *       properties:
 *         medicineId:
 *           type: number
 *           description: Unique identifier of the medicine.
 *         medicineName:
 *           type: string
 *           description: The commercial name of the medicine.
 *         medicineGenericName:
 *           type: string
 *           description: The generic name of the medicine.
 *       required:
 *         - medicineId
 *         - medicineName
 *         - medicineGenericName
 *     IMeasure:
 *       type: object
 *       properties:
 *         measureId:
 *           type: number
 *           description: Unique identifier for the measurement unit.
 *         measureName:
 *           type: string
 *           description: The name of the measurement unit.
 *         measureAbbr:
 *           type: string
 *           description: The abbreviation of the measurement unit.
 *         description:
 *           type: string
 *           description: A detailed description of the measurement unit.
 *         indActive:
 *           type: boolean
 *           description: Indicates whether the measurement unit is active or inactive.
 *       required:
 *         - measureId
 *         - measureName
 *         - measureAbbr
 *         - indActive
 */
