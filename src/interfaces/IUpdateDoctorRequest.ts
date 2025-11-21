export interface IUpdateDoctorRequest {
    doctorName: string,
    avatarSrc: string,
    idType: number,
    idNumber: string,
    medSpecialityId: number,
    licenseNumber: string,
    hireDate: Date,
    finishHireDate: Date,
    dateOfBirth: Date,
    countryId: number,
    stateId: number,
    cityId: number,
    officeDir: string,
    averageRate: number,
    averageScore: number,
    mail: string,
    celPhone: string,
    officePhone: string,
    indActive: boolean,
    note: string,
    headDoctor: boolean,
    externalService: boolean
}


/**
 * @swagger
 * components:
 *   schemas:
 *     IUpdateDoctorRequest:
 *       type: object
 *       properties:
 *         doctorName:
 *           type: string
 *           description: Full name of the doctor.
 *         avatarSrc:
 *           type: string
 *           description: URL of the doctor's avatar image.
 *         idType:
 *           type: integer
 *           description: Identifier for the type of ID the doctor uses.
 *         idNumber:
 *           type: string
 *           description: The doctor's identification number.
 *         medSpecialityId:
 *           type: integer
 *           description: Identifier for the doctor's medical specialty.
 *         licenseNumber:
 *           type: string
 *           description: The doctor's medical license number.
 *         hireDate:
 *           type: string
 *           format: date
 *           description: The date the doctor was hired.
 *         finishHireDate:
 *           type: string
 *           format: date
 *           description: The date the doctor's employment is scheduled to end.
 *         dateOfBirth:
 *           type: string
 *           format: date
 *           description: The doctor's date of birth.
 *         countryId:
 *           type: integer
 *           description: Identifier for the country where the doctor practices.
 *         stateId:
 *           type: integer
 *           description: Identifier for the state where the doctor practices.
 *         cityId:
 *           type: integer
 *           description: Identifier for the city where the doctor practices.
 *         officeDir:
 *           type: string
 *           description: The doctor's office address.
 *         averageRate:
 *           type: number
 *           format: float
 *           description: The average rate charged by the doctor.
 *         averageScore:
 *           type: number
 *           format: float
 *           description: The average score received by the doctor.
 *         mail:
 *           type: string
 *           description: The doctor's email address.
 *         celPhone:
 *           type: string
 *           description: The doctor's cell phone number.
 *         officePhone:
 *           type: string
 *           description: The doctor's office phone number.
 *         headDoctor:
 *           type: boolean
 *           description: Indica si es doctor de cabecera.
 *         externalService:
 *           type: boolean
 *           description: Indica si el doctor es de servicio externo.
 *         indActive:
 *           type: boolean
 *           description: Indicates whether the doctor is currently active.
 *         note:
 *           type: string
 *           description: Additional notes about the doctor.
 *       required:
 *         - doctorName
 *         - idType
 *         - idNumber
 *         - medSpecialityId
 *         - licenseNumber
 *         - hireDate
 *         - finishHireDate
 *         - dateOfBirth
 *         - countryId
 *         - stateId
 *         - cityId
 *         - officeDir
 *         - averageRate
 *         - averageScore
 *         - mail
 *         - celPhone
 *         - officePhone
 *         - indActive
 *       description: Data required to update an existing doctor profile.
 */