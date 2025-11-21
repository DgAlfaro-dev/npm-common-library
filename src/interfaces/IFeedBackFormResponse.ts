import { ICatalogModel } from "./ICatalogModel.js";

export interface IFeedBackFormResponse {
    formId: number,
    centroId: number,
    codigoCentro: string,
    nombreCentro: string,
    languageId: number,
    languageDescription: string,
    question1Text: string,
    question1LowestText: string,
    question1HighestText: string,
    question2Text: string,
    question2LowestText: string,
    question2HighestText: string,
    question3Text: string,
    question3LowestText: string,
    question3HighestText: string,
}


/**
 * @swagger
 * components:
 *   schemas:
 *     IFeedBackFormResponse:
 *       type: object
 *       properties:
 *         formId:
 *           type: integer
 *           example: 1
 *           description: ID del formulario de retroalimentación.
 *         centroId:
 *           type: integer
 *           example: 10
 *           description: ID del centro al que pertenece el formulario.
 *         codigoCentro:
 *           type: string
 *           example: "CENTRO123"
 *           description: Código del centro.
 *         nombreCentro:
 *           type: string
 *           example: "Centro de Atención"
 *           description: Nombre del centro.
 *         languageId:
 *           type: integer
 *           example: 1
 *           description: ID del idioma del formulario.
 *         languageDescription:
 *           type: string
 *           example: "Español"
 *           description: Descripción del idioma del formulario.
 *         question1Text:
 *           type: string
 *           example: "¿Cómo calificaría el servicio?"
 *           description: Texto de la primera pregunta.
 *         question1LowestText:
 *           type: string
 *           example: "Muy mal"
 *           description: Texto que describe la calificación más baja de la primera pregunta.
 *         question1HighestText:
 *           type: string
 *           example: "Excelente"
 *           description: Texto que describe la calificación más alta de la primera pregunta.
 *         question2Text:
 *           type: string
 *           example: "¿Recomendaría nuestro servicio?"
 *           description: Texto de la segunda pregunta.
 *         question2LowestText:
 *           type: string
 *           example: "Definitivamente no"
 *           description: Texto que describe la calificación más baja de la segunda pregunta.
 *         question2HighestText:
 *           type: string
 *           example: "Definitivamente sí"
 *           description: Texto que describe la calificación más alta de la segunda pregunta.
 *         question3Text:
 *           type: string
 *           example: "¿Algún comentario adicional?"
 *           description: Texto de la tercera pregunta.
 *         question3LowestText:
 *           type: string
 *           example: "Sin comentarios"
 *           description: Texto que describe la calificación más baja de la tercera pregunta.
 *         question3HighestText:
 *           type: string
 *           example: "Comentario"
 *           description: Texto que describe la calificación más alta de la tercera pregunta.
 *       required:
 *         - formId
 *         - centroId
 *         - codigoCentro
 *         - nombreCentro
 *         - languageId
 *         - languageDescription
 *         - question1Text
 *         - question2Text
 *         - question3Text
 *       description: Respuesta con la información del formulario de retroalimentación para un centro específico.
 */
