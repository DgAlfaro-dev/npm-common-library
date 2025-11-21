export interface IMeasureResponse {
    measureId: number;
    measureName: string;
    measureAbbr: string;
    description: string;
    indActive: boolean;
}

/**
 * @swagger
 * components:
 *   schemas:
 *     IMeasureResponse:
 *       type: object
 *       properties:
 *         measureId:
 *           type: number
 *           description: El ID único de la medición
 *         measureName:
 *           type: string
 *           description: El nombre completo de la medición
 *         measureAbbr:
 *           type: string
 *           description: La abreviatura del nombre de la medición
 *         description:
 *           type: string
 *           description: Una descripción detallada de la medición
 *         indActive:
 *           type: boolean
 *           description: Indica si la medición está activa (true) o inactiva (false)
 *       required:
 *         - measureId
 *         - measureName
 *         - measureAbbr
 *         - indActive
 *       example:
 *         measureId: 123
 *         measureName: "Temperatura Ambiente"
 *         measureAbbr: "Temp"
 *         description: "Mide la temperatura en grados Celsius en el ambiente."
 *         indActive: true
 */