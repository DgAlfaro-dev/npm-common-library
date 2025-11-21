export interface IStateResponse {
    stateId: number,
    stateName: string,
    countryId: number,
    indActive: boolean,
    note: string | null,
}


/**
 * @swagger
 * components:
 *   schemas:
 *     IStateResponse:
 *       type: object
 *       properties:
 *         stateId:
 *           type: number
 *           description: El ID único del estado
 *         stateName:
 *           type: string
 *           description: El nombre del estado
 *         countryId:
 *           type: number
 *           description: El ID del país al que pertenece el estado
 *         indActive:
 *           type: boolean
 *           description: Indica si el estado está activo
 *         note:
 *           type: string
 *           nullable: true
 *           description: Nota adicional sobre el estado, puede ser nulo
 *       required:
 *         - stateId
 *         - stateName
 *         - countryId
 *         - indActive
 *       example:
 *         stateId: 1
 *         stateName: "Jalisco"
 *         countryId: 1
 *         indActive: true
 *         note: "Nota sobre el estado de Jalisco"
 */
