export interface ICityResponse {
    cityId: number,
    cityName: string,
    stateId: number,
    indActive: boolean,
    note: string,
}


/**
 * @swagger
 * components:
 *   schemas:
 *     ICityResponse:
 *       type: object
 *       properties:
 *         cityId:
 *           type: number
 *           description: El ID único de la ciudad
 *         cityName:
 *           type: string
 *           description: El nombre de la ciudad
 *         stateId:
 *           type: number
 *           description: El ID del estado al que pertenece la ciudad
 *         indActive:
 *           type: boolean
 *           description: Indica si la ciudad está activa
 *         note:
 *           type: string
 *           description: Nota adicional sobre la ciudad
 *       required:
 *         - cityId
 *         - cityName
 *         - stateId
 *         - indActive
 *       example:
 *         cityId: 101
 *         cityName: "Guadalajara"
 *         stateId: 1
 *         indActive: true
 *         note: "Una de las ciudades más importantes de México."
 */
