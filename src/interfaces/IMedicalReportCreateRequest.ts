import { UUID } from "crypto";

export interface IMedicalReportCreateRequest {
  medicalRptTypeId: UUID;
  businessPartnersId?: number;
  appointmentDateTime?: Date;
  nextAppointmentDateTime?: Date;
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
  indStatusId?: UUID;
  healthCondition?: UUID;
  note?: string;
  comments?: string;
  medicalRptSymptoms: IMedicalRptSymtpoms[],
  businessPartnerCondition: IBusinessPartnerCondition[],
  businessPartnerMedActivity: IBusinessPartnerMedActivity[],
  businessPartnerMedAllergy: IBusinessPartnerMedAllergy[],
  businessPartnerMedEventHistory: IBusinessPartnerMedEventHistory[],
  businessPartnerMedFamilyEventHistory: IBusinessPartnerMedFamilyEventHistory[],
  recipes: IMedicalReportRecipe[],
}

export interface IMedicalReportRecipe {
  medicineId: number,
  dosisQuantity: number,
  dosisMeasure: number,
  dosisFrequency: number,
  dosisFrequencyMeasure: UUID,
  dosisTime: number,
  dosisTimeMeasure: UUID,
  dosisMode: UUID,
  dosisNote: string,
}

export interface IBusinessPartnerMedFamilyEventHistory{
  medicalEventTypeId: number,
  name: string,
  note: string,
}

 interface IBusinessPartnerMedEventHistory {
  medicalEventTypeId: number,
  name: string,
  diagnosticDate: Date,
  note: string,
}

 interface IBusinessPartnerMedAllergy {
  medicineId: number,
  diagnosticDate: Date,
  note: string,
}

export interface IMedicalRptSymtpoms {
  detail: string,
  startDateTIme: Date,
}

export interface IBusinessPartnerCondition {
  conditionId: number,
  diagnosticDate: Date,
  note: string,
}

 interface IBusinessPartnerMedActivity {
  activityId: number,
  diagnosticDate: Date,
  note: string,
  activityFrequency: number,
  activityFrequencyMeasureId: UUID,
  activityTime: number,
  activityTimeMeasureId: UUID,
  activityTimeHour: number,
}



/**
 * @swagger
 * components:
 *   schemas:
 *     IMedicalReportCreateRequest:
 *       type: object
 *       properties:
 *         medicalRptType:
 *           type: string
 *           description: Tipo de informe médico.
 *         businessPartnersId:
 *           type: number
 *           description: Identificador del socio comercial.
 *         appointmentDateTime:
 *           type: string
 *           format: date-time
 *           description: Fecha y hora de la cita médica.
 *         doctorId:
 *           type: number
 *           description: Identificador del médico que atiende.
 *         weight:
 *           type: number
 *           description: Peso del paciente en kilogramos.
 *         height:
 *           type: number
 *           description: Altura del paciente en centímetros.
 *         temperature:
 *           type: number
 *           description: Temperatura del paciente en grados Celsius.
 *         bloodPressureSystolic:
 *           type: number
 *           description: Medida de la presión arterial sistólica.
 *         bloodPressureDiastolic:
 *           type: number
 *           description: Medida de la presión arterial diastólica.
 *         pulse:
 *           type: number
 *           description: Frecuencia del pulso en latidos por minuto.
 *         visionAcuityLeft:
 *           type: number
 *           description: Medición de la agudeza visual.
 *         visionAcuityRight:
 *           type: number
 *           description: Medición de la agudeza visual.
 *         physicalExamNote:
 *           type: string
 *           description: Notas del examen físico realizado.
 *         indStatus:
 *           type: string
 *           description: Estado indicativo del reporte, podría ser urgente, normal, etc.
 *         indStatusId:
 *           type: string
 *           format: uuid
 *           description: UUID asociado con el estado indicativo.
 *         healthCondition:
 *           type: string
 *           format: uuid
 *           description: UUID identificando una condición de salud específica.
 *         note:
 *           type: string
 *           description: Nota general relacionada con el informe médico.
 *         comments:
 *           type: string
 *           description: Comentarios adicionales.
 *         medicalRptSymptoms:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/IMedicalRptSymptoms'
 *           description: Lista de síntomas reportados.
 *         businessPartnerCondition:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/IBusinessPartnerCondition'
 *           description: Condiciones asociadas al socio comercial.
 *         businessPartnerMedActivity:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/IBusinessPartnerMedActivity'
 *           description: Actividades médicas relacionadas con el socio comercial.
 *         businessPartnerMedAllergy:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/IBusinessPartnerMedAllergy'
 *           description: Alergias asociadas con el socio comercial.
 *         businessPartnerMedEventHistory:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/IBusinessPartnerMedEventHistory'
 *           description: Historial de eventos médicos.
 *         businessPartnerMedFamilyEventHistory:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/IBusinessPartnerMedFamilyEventHistory'
 *           description: Historial de eventos médicos familiares.
 *         recipes:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/IMedicalReportRecipe'
 *           description: Recetas incluidas en el informe médico.
 *       required:
 *         - medicalRptSymptoms
 *         - businessPartnerCondition
 *         - businessPartnerMedActivity
 *         - businessPartnerMedAllergy
 *         - businessPartnerMedEventHistory
 *         - businessPartnerMedFamilyEventHistory
 *         - recipes
 *       example:
 *         medicalRptType: "General Consultation"
 *         businessPartnersId: 2001
 *         appointmentDateTime: "2023-10-15T14:30:00Z"
 *         doctorId: 150
 *         weight: 70
 *         height: 175
 *         temperature: 36.5
 *         bloodPressureSystolic: 120
 *         bloodPressureDiastolic: 80
 *         pulse: 72
 *         visionAcuityLeft: 1.0
 *         visionAcuityRight: 1.0
 *         physicalExamNote: "No significant findings."
 *         indStatus: "Urgent"
 *         indStatusId: "123e4567-e89b-12d3-a456-426614174000"
 *         healthCondition: "123e4567-e89b-12d3-a456-426614174000"
 *         note: "Patient complains of occasional headaches."
 *         comments: "Follow-up in 3 months."
 *         medicalRptSymptoms: [ { detail: "Headache", startDateTIme: "2023-10-10T09:00:00Z" } ]
 *         businessPartnerCondition: [ { conditionId: 300, diagnosticDate: "2023-01-01T00:00:00Z", note: "Chronic" } ]
 *         businessPartnerMedActivity: [ { activityId: 450, diagnosticDate: "2023-01-01T00:00:00Z", note: "Weekly Yoga", activityFrequency: 1, activityFrequencyMeasureId: "123e4567-e89b-12d3-a456-426614174000", activityTime: 60, activityTimeMeasureId: "123e4567-e89b-12d3-a456-426614174000", activityTimeHour: 17 } ]
 *         businessPartnerMedAllergy: [ { medicineId: 500, diagnosticDate: "2023-01-01T00:00:00Z", note: "Penicillin Allergy" } ]
 *         businessPartnerMedEventHistory: [ { medicalEventTypeId: 600, name: "Surgery", diagnosticDate: "2022-12-01T00:00:00Z", note: "Appendectomy" } ]
 *         businessPartnerMedFamilyEventHistory: [ { medicalEventTypeId: 700, name: "Diabetes", note: "Father has Type 2 diabetes" } ]
 *         recipes: [ { medicineId: 800, dosisQuantity: 2, dosisMeasure: 500, dosisFrequency: 3, dosisFrequencyMeasure: "123e4567-e89b-12d3-a456-426614174000", dosisTime: 8, dosisTimeMeasure: "123e4567-e89b-12d3-a456-426614174000", dosisMode: "123e4567-e89b-12d3-a456-426614174000", dosisNote: "Take after meals" } ]
*/

// Additional interfaces can be documented in a similar fashion.
