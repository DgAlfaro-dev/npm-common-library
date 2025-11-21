export interface IMedicalRptSymptoms {
    medicalRptSymptomsId: number,
    medicalRptId: number,
    detail: string,
    startDateTime: Date,
}

/**
 * @swagger
 * components:
 *   schemas:
 *     IMedicalRptSymptoms:
 *       type: object
 *       properties:
 *         medicalRptSymptomsId:
 *           type: number
 *           description: The unique identifier for the medical report symptoms record.
 *         medicalRptId:
 *           type: number
 *           description: The identifier of the medical report to which these symptoms are linked.
 *         detail:
 *           type: string
 *           description: Detailed description of the symptoms reported.
 *         startDateTime:
 *           type: string
 *           format: date-time
 *           description: The date and time when the symptoms started.
 *       required:
 *         - medicalRptSymptomsId
 *         - medicalRptId
 *         - detail
 *         - startDateTime
 *       example:
 *         medicalRptSymptomsId: 123
 *         medicalRptId: 456
 *         detail: "Patient reports a severe headache with dizziness."
 *         startDateTime: "2023-04-15T07:30:00Z"
 */
