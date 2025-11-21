import { IRegisteredBy } from "./IAlertResponse.js";
import { ICatalogModel } from "./ICatalogModel.js";

export interface IMedicalReportResponseToGet {
    medicalRptId: number,
    medicalRptType: ICatalogModel,
    businessPartners: IBusinessPartner,
    appointmentDateTime: Date,
    nextAppointmentDateTime: Date,
    doctor: Idoctor,
    weight: number,
    height: number,
    temperature: number,
    bloodPressureSystolic: number,
    bloodPressureDiastolic: number,
    pulse: number,
    visionAcuityLeft: number,
    visionAcuityRight: number,
    physicalExamNote: string,
    indStatus: ICatalogModel,
    healthCondition: ICatalogModel,
    registerDate: Date,
    registeredBy: IRegisteredBy,
    updatedBy: IRegisteredBy,
    updatedDate: Date,
    endedBy: IRegisteredBy,
    endDate: Date,
    note: string,
    comments: string,
    indActive: boolean,
    inactivationNote: string,
}

interface IBusinessPartner{
    businessPartnersId: number,
    firstName: string,
    secondName: string,
    lastName: string,
    sLastName: string,
}

interface Idoctor {
    doctorId: number,
    doctorName: string,
    medSpecialityId: IMedSpeciality
}

interface IMedSpeciality {
    medSpecialityId: number,
    medSpecialityName: string
}



/**
 * @swagger
 * components:
 *   schemas:
 *     IMedicalReportResponseToGet:
 *       type: object
 *       properties:
 *         medicalRptId:
 *           type: number
 *           description: Identificador único del reporte médico.
 *         medicalRptType:
 *           type: string
 *           description: Tipo de reporte médico.
 *         businessPartnersId:
 *           type: number
 *           description: Identificador del socio comercial asociado al reporte médico.
 *         appointmentDateTime:
 *           type: string
 *           format: date-time
 *           description: Fecha y hora de la cita médica.
 *         clientId:
 *           type: number
 *           description: Identificador del cliente.
 *         doctor:
 *           $ref: '#/components/schemas/Idoctor'
 *           description: Información del doctor que emite el reporte.
 *         weight:
 *           type: number
 *           description: Peso del paciente registrado en el reporte.
 *         height:
 *           type: number
 *           description: Altura del paciente registrada en el reporte.
 *         temperature:
 *           type: number
 *           description: Temperatura del paciente registrada en el reporte.
 *         bloodPressureSystolic:
 *           type: number
 *           description: Presión arterial sistólica del paciente.
 *         bloodPressureDiastolic:
 *           type: number
 *           description: Presión arterial diastólica del paciente.
 *         pulse:
 *           type: number
 *           description: Pulso del paciente.
 *         visionAcuityLeft:
 *           type: number
 *           description: Agudeza visual del paciente.
 *         visionAcuityRight:
 *           type: number
 *           description: Agudeza visual del paciente.
 *         physicalExamNote:
 *           type: string
 *           description: Notas del examen físico.
 *         indStatus:
 *           $ref: '#/components/schemas/ICatalogModel'
 *           description: Estado indicativo del reporte, referenciado desde un catálogo.
 *         healthCondition:
 *           $ref: '#/components/schemas/ICatalogModel'
 *           description: Condición de salud del paciente, referenciada desde un catálogo.
 *         note:
 *           type: string
 *           description: Notas adicionales del reporte médico.
 *         comments:
 *           type: string
 *           description: Comentarios adicionales del reporte médico.
 *     Idoctor:
 *       type: object
 *       properties:
 *         doctorId:
 *           type: number
 *           description: Identificador único del doctor.
 *         doctorName:
 *           type: string
 *           description: Nombre del doctor.
 *         medSpecialityId:
 *           $ref: '#/components/schemas/IMedSpeciality'
 *           description: Especialidad médica del doctor.
 *     IMedSpeciality:
 *       type: object
 *       properties:
 *         medSpecialityId:
 *           type: number
 *           description: Identificador único de la especialidad médica.
 *         medSpecialityName:
 *           type: string
 *           description: Nombre de la especialidad médica.
*/