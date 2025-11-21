export interface IFeedBackRequest {
    formId: number,
    answer1: number,
    answer2: number,
    answer3: string,
    answer4: boolean,
}

/**
 * @swagger
 * components:
 *   schemas:
 *     IFeedBackRequest:
 *       type: object
 *       properties:
 *         formId:
 *           type: number
 *           example: 1
 *           description: ID del formulario al que pertenece la retroalimentación.
 *         answer1:
 *           type: number
 *           example: 5
 *           description: Respuesta a la primera pregunta, valor numérico.
 *         answer2:
 *           type: number
 *           example: 4
 *           description: Respuesta a la segunda pregunta, valor numérico.
 *         answer3:
 *           type: string
 *           example: "Muy satisfecho con el servicio."
 *           description: Respuesta a la tercera pregunta, texto libre.
 *         answer4:
 *           type: boolean
 *           example: true
 *           description: Respuesta a la cuarta pregunta, valor booleano.
 *       required:
 *         - formId
 *         - answer1
 *         - answer2
 *         - answer3
 *         - answer4
 *       description: Datos necesarios para crear un registro de retroalimentación.
 */
