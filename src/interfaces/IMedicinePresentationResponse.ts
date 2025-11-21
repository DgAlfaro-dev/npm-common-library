export interface IMedicinePresentationResponse {
    medicinePresentationId: number;
    medicinePresentationName: string;
    abbreviation: string;
    indActive: boolean;
    note: string;
}

/**
 * @swagger
 * components:
 *   schemas:
 *     IMedicinePresentationResponse:
 *       type: object
 *       properties:
 *         medicinePresentationId:
 *           type: number
 *           description: El ID único de la presentación de la medicina.
 *         medicinePresentationName:
 *           type: string
 *           description: El nombre de la presentación de la medicina.
 *         abbreviation:
 *           type: string
 *           description: La abreviatura del nombre de la presentación de la medicina.
 *         indActive:
 *           type: boolean
 *           description: Indica si la presentación de la medicina está activa o inactiva en el sistema.
 *         note:
 *           type: string
 *           description: Nota adicional o comentario relevante sobre la presentación de la medicina.
 *       required:
 *         - medicinePresentationId
 *         - medicinePresentationName
 *         - abbreviation
 *         - indActive
 *         - note
 *       example:
 *         medicinePresentationId: 101
 *         medicinePresentationName: "Tabletas Efervescentes"
 *         abbreviation: "Tab.Eferv"
 *         indActive: true
 *         note: "Preferida para rápida absorción del medicamento en el sistema."
*/