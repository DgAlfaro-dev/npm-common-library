import { IRegisteredBy } from './IAlertResponse.js';
import { ICatalogModel } from './ICatalogModel.js';

export interface IMedicalReportResponseOneGet {
  medicalRptId: number;
  medicalRptType: ICatalogModel;
  businessPartners: IBusinessPartner;
  appointmentDateTime: Date;
  nextAppointmentDateTime: Date;
  doctor: Idoctor;
  weight: number;
  height: number;
  temperature: number;
  bloodPressureSystolic: number;
  bloodPressureDiastolic: number;
  pulse: number;
  visionAcuityLeft: number;
  visionAcuityRight: number;
  physicalExamNote: string;
  indStatus: ICatalogModel;
  healthCondition: ICatalogModel;
  registerDate: Date;
  registeredBy: IRegisteredBy;
  updatedBy: IRegisteredBy;
  updatedDate: Date;
  endedBy: IRegisteredBy;
  endDate: Date;
  note: string;
  comments: string;
  indActive: boolean;
  inactivationNote: string;
  medicalRptSymptoms: IMedicalRptSymptoms;
  recipes: IMedicalReportRecipeInMedicalReportOneGet[];
}

interface IMedicalRptSymptoms {
  medicalRptSymptomsId: number;
  detail: string;
  startDateTime: Date;
}

// interface IBusinessPartnerMedFamilyEventHistory {
//   businessPartnerMedFamilyEventHistoryId: number;
//   medicalEventType: IMedicalEventType;
//   name: string;
//   note: string;
// }

// interface IMedicalEventType {
//   medicalEventTypeId: number;
//   name: string;
//   note: string;
// }

// interface IMedicalActivity {
//   medicalActivityId: number;
//   name: string;
//   note: string;
// }

// interface IBusinessPartnerCondition {
//   businessPartnerConditionId: number;
//   condition: ICondition;
//   diagnosticDate: Date;
//   note: string;
// }

// interface ICondition {
//   conditionId: number;
//   conditionType: IConditionType;
//   name: string;
//   note: string;
// }

// interface IConditionType {
//   conditionTypeId: number;
//   name: string;
//   indRemark: boolean;
//   indChronicDisease: boolean;
//   indAccessibilityDisease: boolean;
//   indAllergy: boolean;
//   note: string;
// }

 export interface IMedicalReportRecipeInMedicalReportOneGet {
  medicalReportRecipeId: number;
  medicine: IMedicine;
  dosisQuantity: number;
  dosisMeasure: IMeasure;
  dosisFrequency: number;
  dosisFrequencyMeasure: ICatalogModel;
  dosisTime: number;
  dosisTimeMeasure: ICatalogModel;
  dosisMode: ICatalogModel;
  dosisNote: string;
  startDateTime: Date;
  endDateTime: Date;
}

interface IMeasure {
  measureId: number;
  measureName: string;
  measureAbbr: string;
  description: string;
}

interface IMedicine {
  medicineId: number;
  medicineName: string;
  medicineGenericName: string;
}

interface IBusinessPartner {
  businessPartnersId: number;
  firstName: string;
  secondName: string;
  lastName: string;
  sLastName: string;
  dateOfBirth: Date;
  center: ICentro;
}

interface ICentro {
  unitHeight: string;
  unitWeight: string;
}

interface Idoctor {
  doctorId: number;
  doctorName: string;
  medSpecialityId: IMedSpeciality;
  licenseNumber: string;
}

interface IMedSpeciality {
  medSpecialityId: number;
  medSpecialityName: string;
}

/**
 * @swagger
 * components:
 *   schemas:
 *     IMedicalReportResponseOneGet:
 *       type: object
 *       properties:
 *         medicalRptId:
 *           type: number
 *           description: The unique identifier of the medical report.
 *         medicalRptType:
 *           type: string
 *           description: The type of medical report.
 *         businessPartners:
 *           $ref: '#/components/schemas/IBusinessPartner'
 *         appointmentDateTime:
 *           type: string
 *           format: date-time
 *           description: The date and time of the appointment.
 *         doctor:
 *           $ref: '#/components/schemas/Idoctor'
 *         weight:
 *           type: number
 *           description: Weight of the patient recorded in the report.
 *         height:
 *           type: number
 *           description: Height of the patient recorded in the report.
 *         temperature:
 *           type: number
 *           description: Body temperature of the patient recorded in the report.
 *         bloodPressureSystolic:
 *           type: number
 *           description: Systolic blood pressure reading of the patient.
 *         bloodPressureDiastolic:
 *           type: number
 *           description: Diastolic blood pressure reading of the patient.
 *         pulse:
 *           type: number
 *           description: Pulse rate of the patient.
 *         visionAcuityLeft:
 *           type: number
 *           description: Vision acuity measurement.
 *         visionAcuityRight:
 *           type: number
 *           description: Vision acuity measurement.
 *         physicalExamNote:
 *           type: string
 *           description: Notes from the physical examination.
 *         indStatus:
 *           $ref: '#/components/schemas/ICatalogModel'
 *         healthCondition:
 *           $ref: '#/components/schemas/ICatalogModel'
 *         registerDate:
 *           type: string
 *           format: date-time
 *           description: The date when the medical report was registered.
 *         updatedBy:
 *           $ref: '#/components/schemas/IRegisteredBy'
 *         updatedDate:
 *           type: string
 *           format: date-time
 *           description: The date when the medical report was last updated.
 *         endedBy:
 *           $ref: '#/components/schemas/IRegisteredBy'
 *         endDate:
 *           type: string
 *           format: date-time
 *           description: The date when the medical report was closed.
 *         note:
 *           type: string
 *           description: Additional notes regarding the medical report.
 *         comments:
 *           type: string
 *           description: Comments about the medical report.
 *         businessPartnerCondition:
 *           $ref: '#/components/schemas/IBusinessPartnerCondition'
 *         businessPartnerMedActivity:
 *           $ref: '#/components/schemas/IBusinessPartnerMedActivity'
 *         businessPartnerMedAllergy:
 *           $ref: '#/components/schemas/IBusinessPartnerMedAllergy'
 *         businessPartnerMedEventHistory:
 *           $ref: '#/components/schemas/IBusinessPartnerMedEventHistory'
 *         businessPartnerMedFamilyEventHistory:
 *           $ref: '#/components/schemas/IBusinessPartnerMedFamilyEventHistory'
 *         medicalRptSymptoms:
 *           $ref: '#/components/schemas/IMedicalRptSymptoms'
 *         recipes:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/IMedicalReportRecipe'
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     IMedicalRptSymptoms:
 *       type: object
 *       properties:
 *         medicalRptSymptomsId:
 *           type: number
 *           description: Unique identifier for the symptoms record.
 *         detail:
 *           type: string
 *           description: Detailed description of the symptoms.
 *         startDateTime:
 *           type: string
 *           format: date-time
 *           description: The date and time when the symptoms were first observed.
 *
 *     IBusinessPartnerMedFamilyEventHistory:
 *       type: object
 *       properties:
 *         businessPartnerMedFamilyEventHistoryId:
 *           type: number
 *           description: Unique identifier for the family medical event history record.
 *         medicalEventType:
 *           $ref: '#/components/schemas/IMedicalEventType'
 *         name:
 *           type: string
 *           description: Name of the medical event.
 *         note:
 *           type: string
 *           description: Additional notes about the medical event.
 *
 *     IBusinessPartnerMedEventHistory:
 *       type: object
 *       properties:
 *         businessPartnerMedEventHistoryId:
 *           type: number
 *           description: Unique identifier for the medical event history record.
 *         medicalEventType:
 *           $ref: '#/components/schemas/IMedicalEventType'
 *         name:
 *           type: string
 *           description: Name of the medical event.
 *         diagnosticDate:
 *           type: string
 *           format: date-time
 *           description: Date when the event was diagnosed.
 *         note:
 *           type: string
 *           description: Additional notes about the medical event.
 *
 *     IMedicalEventType:
 *       type: object
 *       properties:
 *         medicalEventTypeId:
 *           type: number
 *           description: Unique identifier for the medical event type.
 *         name:
 *           type: string
 *           description: Name of the medical event type.
 *         note:
 *           type: string
 *           description: Additional notes or details about the event type.
 *
 *     IBusinessPartnerMedAllergy:
 *       type: object
 *       properties:
 *         businessPartnerMedAllergyId:
 *           type: number
 *           description: Unique identifier for the allergy record.
 *         medicine:
 *           $ref: '#/components/schemas/IMedicine'
 *         diagnosticDate:
 *           type: string
 *           format: date-time
 *           description: Date when the allergy was diagnosed.
 *         note:
 *           type: string
 *           description: Additional notes about the allergy.
 *
 *     IBusinessPartnerMedActivity:
 *       type: object
 *       properties:
 *         businessPartnerMedActivityId:
 *           type: number
 *           description: Unique identifier for the medical activity record.
 *         activity:
 *           $ref: '#/components/schemas/IMedicalActivity'
 *         diagnosticDate:
 *           type: string
 *           format: date-time
 *           description: Date when the activity was recorded or diagnosed.
 *         note:
 *           type: string
 *           description: Additional notes about the activity.
 *         activityFrequency:
 *           type: number
 *           description: Frequency of the activity.
 *         activityFrequencyMeasure:
 *           $ref: '#/components/schemas/ICatalogModel'
 *         activityTime:
 *           type: number
 *           description: Time duration of the activity.
 *         activityTimeMeasure:
 *           $ref: '#/components/schemas/ICatalogModel'
 *         activityTimeHour:
 *           type: number
 *           description: Specific hour of the day when the activity is performed.
 *
 *     IMedicalActivity:
 *       type: object
 *       properties:
 *         medicalActivityId:
 *           type: number
 *           description: Unique identifier for the medical activity.
 *         name:
 *           type: string
 *           description: Name of the activity.
 *         note:
 *           type: string
 *           description: Additional notes or details about the activity.
 *
 *     IBusinessPartnerCondition:
 *       type: object
 *       properties:
 *         businessPartnerConditionId:
 *           type: number
 *           description: Unique identifier for the condition record.
 *         condition:
 *           $ref: '#/components/schemas/ICondition'
 *         diagnosticDate:
 *           type: string
 *           format: date-time
 *           description: Date when the condition was diagnosed.
 *         note:
 *           type: string
 *           description: Additional notes or comments about the condition.
 *
 *     ICondition:
 *       type: object
 *       properties:
 *         conditionId:
 *           type: number
 *           description: Unique identifier for the health condition.
 *         conditionType:
 *           $ref: '#/components/schemas/IConditionType'
 *         name:
 *           type: string
 *           description: Name of the health condition.
 *         note:
 *           type: string
 *           description: Additional notes or details about the health condition.
 *
 *     IConditionType:
 *       type: object
 *       properties:
 *         conditionTypeId:
 *           type: number
 *           description: Unique identifier for the condition type.
 *         name:
 *           type: string
 *           description: Name of the condition type.
 *         indRemark:
 *           type: boolean
 *           description: Indicates if there are any important remarks associated with this condition type.
 *         indChronicDisease:
 *           type: boolean
 *           description: Indicates if the condition is a chronic disease.
 *         indAccessibilityDisease:
 *           type: boolean
 *           description: Indicates if the disease affects accessibility.
 *         indAllergy:
 *           type: boolean
 *           description: Indicates if the condition is an allergy.
 *         note:
 *           type: string
 *           description: Additional notes about the condition type.
 */
