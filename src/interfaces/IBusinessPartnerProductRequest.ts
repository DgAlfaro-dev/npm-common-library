export interface IBusinessPartnerProductRequest {
    productId: number,
    quantity: number,
    unitPrice: number,
    subtotal: number,
    indBasePlan: boolean,
    indAutomaticPayment: boolean,
    businessPartnerPaymentMediaId: number,
    indActive: boolean,
    inactivationNote: string,
    inactivationDate: Date,
    inactivatedBy: number,
}

/**
 * @swagger
 * components:
 *   schemas:
 *     IBusinessPartnerProductRequest:
 *       type: object
 *       properties:
 *         productId:
 *           type: number
 *           example: 101
 *         quantity:
 *           type: number
 *           example: 2
 *         unitPrice:
 *           type: number
 *           format: float
 *           example: 50.0
 *         subtotal:
 *           type: number
 *           format: float
 *           example: 100.0
 *         indBasePlan:
 *           type: boolean
 *           example: true
 *         indAutomaticPayment:
 *           type: boolean
 *           example: false
 *         businessPartnerPaymentMediaId:
 *           type: number
 *           example: 2001
 *         indActive:
 *           type: boolean
 *           example: true
 *         inactivationNote:
 *           type: string
 *           example: "Inactivado por solicitud del cliente."
 *         inactivationDate:
 *           type: string
 *           format: date
 *           example: "2024-09-01"
 *         inactivatedBy:
 *           type: number
 *           example: 1234
 *       required:
 *         - productId
 *         - quantity
 *         - unitPrice
 *         - subtotal
 *         - indBasePlan
 *         - indAutomaticPayment
 *         - businessPartnerPaymentMediaId
 *         - indActive
 *       description: Datos necesarios para crear un nuevo producto asociado a un Socio de Negocios.
 */
