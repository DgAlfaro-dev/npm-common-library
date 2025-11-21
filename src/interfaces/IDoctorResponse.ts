import { IIdTypeCatalogListModel } from "./IIdTypeCatalogListModel.js";

export interface IDoctorResponse{
    doctorId: number;
    doctorName: string;
    avatarSrc: string,
    idType: IIdTypeCatalogListModel,
    idNumber: string,
    medSpeciality: IMedSpeciality;
    licenseNumber: string,
    hireDate: Date,
    finishHireDate: Date,
    dateOfBirth: Date;
    country: ICountry;
    state: IState;
    city: ICity;
    officeDir: string;
    averageRate: number;
    averageScore: number;
    mail: string;
    celPhone: string;
    officePhone: string;
    headDoctor: boolean,
    externalService: boolean,
    indActive: boolean;
    note: string;
}

interface IMedSpeciality {
    medSpecialityId: number,
    medSpecialityName: string,
    note: string
}

interface ICountry {
    countryId: number,
    countryName: string,
    note: string
}

interface IState {
    stateId: number,
    stateName: string,
    note: string
}

interface ICity {
    cityId: number,
    cityName: string,
    note: string
}

/**
 * @swagger
 * components:
 *   schemas:
 *     IDoctorResponse:
 *       type: object
 *       properties:
 *         doctorId:
 *           type: integer
 *           description: Identificador único del doctor.
 *         doctorName:
 *           type: string
 *           description: Nombre completo del doctor.
 *         avatarSrc:
 *           type: string
 *           description: URL del avatar del doctor.
 *         idType:
 *           $ref: '#/components/schemas/IIdTypeCatalogListModel'
 *         idNumber:
 *           type: string
 *           description: Número de identificación del doctor.
 *         medSpeciality:
 *           $ref: '#/components/schemas/IMedSpeciality'
 *         licenseNumber:
 *           type: string
 *           description: Número de licencia médica del doctor.
 *         hireDate:
 *           type: string
 *           format: date
 *           description: Fecha de contratación del doctor.
 *         finifhHireDate:
 *           type: string
 *           format: date
 *           description: Fecha de finalización del contrato del doctor.
 *         dateOfBirth:
 *           type: string
 *           format: date
 *           description: Fecha de nacimiento del doctor.
 *         country:
 *           $ref: '#/components/schemas/ICountry'
 *         state:
 *           $ref: '#/components/schemas/IState'
 *         city:
 *           $ref: '#/components/schemas/ICity'
 *         officeDir:
 *           type: string
 *           description: Dirección de la oficina del doctor.
 *         averageRate:
 *           type: number
 *           format: float
 *           description: Tarifa promedio cobrada por el doctor.
 *         averageScore:
 *           type: number
 *           format: float
 *           description: Puntuación promedio recibida por el doctor.
 *         mail:
 *           type: string
 *           description: Correo electrónico del doctor.
 *         celPhone:
 *           type: string
 *           description: Número de teléfono celular del doctor.
 *         officePhone:
 *           type: string
 *           description: Número de teléfono de la oficina del doctor.
 *         indActive:
 *           type: boolean
 *           description: Indica si el doctor está activo.
 *         headDoctor:
 *           type: boolean
 *           description: Indica si es doctor de cabecera.
 *         externalService:
 *           type: boolean
 *           description: Indica si el doctor es de servicio externo.
 *         note:
 *           type: string
 *           description: Notas adicionales sobre el doctor.
 *     IMedSpeciality:
 *       type: object
 *       properties:
 *         medSpecialityId:
 *           type: integer
 *           description: ID de la especialidad médica.
 *         medSpecialityName:
 *           type: string
 *           description: Nombre de la especialidad médica.
 *         note:
 *           type: string
 *           description: Notas adicionales sobre la especialidad médica.
 *     ICountry:
 *       type: object
 *       properties:
 *         countryId:
 *           type: integer
 *           description: ID del país.
 *         countryName:
 *           type: string
 *           description: Nombre del país.
 *         note:
 *           type: string
 *           description: Notas adicionales sobre el país.
 *     IState:
 *       type: object
 *       properties:
 *         stateId:
 *           type: integer
 *           description: ID del estado.
 *         stateName:
 *           type: string
 *           description: Nombre del estado.
 *         note:
 *           type: string
 *           description: Notas adicionales sobre el estado.
 *     ICity:
 *       type: object
 *       properties:
 *         cityId:
 *           type: integer
 *           description: ID de la ciudad.
 *         cityName:
 *           type: string
 *           description: Nombre de la ciudad.
 *         note:
 *           type: string
 *           description: Notas adicionales sobre la ciudad.
 */