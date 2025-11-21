export interface IMedSpecialityResponse {
    medSpecialityId: number,
    medSpecialityName: string,
    indActive: boolean,
    note: string,
}

/**
 * @swagger
 * components:
 *   schemas:
 *     IMedSpecialityResponse:
 *       type: object
 *       properties:
 *         medSpecialityId:
 *           type: number
 *           description: El ID único de la especialidad médica.
 *         medSpecialityName:
 *           type: string
 *           description: El nombre de la especialidad médica.
 *         indActive:
 *           type: boolean
 *           description: Indica si la especialidad médica está activa o inactiva en el sistema.
 *         note:
 *           type: string
 *           description: Notas adicionales relevantes sobre la especialidad médica.
 *       required:
 *         - medSpecialityId
 *         - medSpecialityName
 *         - indActive
 *         - note
 *       example:
 *         medSpecialityId: 101
 *         medSpecialityName: "Cardiología"
 *         indActive: true
 *         note: "Especialidad enfocada en el diagnóstico y tratamiento de enfermedades del corazón y los vasos sanguíneos."
*/