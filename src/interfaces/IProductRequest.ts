export interface IProductRequest {
    productCode: string,
    name: string,
    productPhotoUrl: string,
    detail: string,
    note: string,
    subCategoryId: number,
    indActive: boolean,
    indArchived: boolean,
    inactivationUser: number,
    inactivationDate: Date,
    activationUser: number,
    activationDate: Date,
    termsAndConditionsLink: string,
    contractMonths: number,
    priceInvoiceFrequencyMonths: number,
    taxRequired: number,
    responsibleApprovalRequired: boolean,
    supervisorApprovalRequired: boolean,
    payRequired: boolean,
    dueDate: Date,
    indPack: boolean
}


/**
 * @swagger
 * components:
 *   schemas:
 *     IProductRequest:
 *       type: object
 *       properties:
 *         productCode:
 *           type: string
 *           example: "P001"
 *           description: Código del producto.
 *         name:
 *           type: string
 *           example: "Producto A"
 *           description: Nombre del producto.
 *         productPhotoUrl:
 *           type: string
 *           example: "https://example.com/product.jpg"
 *           description: URL de la foto del producto.
 *         detail:
 *           type: string
 *           example: "Detalle del producto"
 *           description: Detalle del producto.
 *         note:
 *           type: string
 *           example: "Nota adicional del producto"
 *           description: Nota adicional sobre el producto.
 *         subCategoryId:
 *           type: integer
 *           example: 1
 *           description: ID de la subcategoría a la que pertenece el producto.
 *         indActive:
 *           type: boolean
 *           example: true
 *           description: Indica si el producto está activo.
 *         indArchived:
 *           type: boolean
 *           example: false
 *           description: Indica si el producto está archivado.
 *         inactivationUser:
 *           type: integer
 *           example: 123
 *           description: ID del usuario que inactivó el producto.
 *         inactivationDate:
 *           type: string
 *           format: date-time
 *           example: "2024-09-01T00:00:00Z"
 *           description: Fecha de inactivación del producto.
 *         activationUser:
 *           type: integer
 *           example: 124
 *           description: ID del usuario que activó el producto.
 *         activationDate:
 *           type: string
 *           format: date-time
 *           example: "2024-01-01T00:00:00Z"
 *           description: Fecha de activación del producto.
 *         termsAndConditionsLink:
 *           type: string
 *           example: "https://example.com/terms"
 *           description: Enlace a los términos y condiciones del producto.
 *         contractMonths:
 *           type: integer
 *           example: 12
 *           description: Meses de contrato del producto.
 *         priceInvoiceFrequencyMonths:
 *           type: integer
 *           example: 6
 *           description: Frecuencia de facturación del producto en meses.
 *         taxRequired:
 *           type: number
 *           format: float
 *           example: 18.0
 *           description: Porcentaje de impuesto requerido para el producto.
 *         responsibleApprovalRequired:
 *           type: boolean
 *           example: true
 *           description: Indica si se requiere aprobación del responsable.
 *         supervisorApprovalRequired:
 *           type: boolean
 *           example: true
 *           description: Indica si se requiere aprobación del supervisor.
 *         payRequired:
 *           type: boolean
 *           example: true
 *           description: Indica si se requiere pago para el producto.
 *         dueDate:
 *           type: string
 *           format: date-time
 *           example: "2024-09-30T00:00:00Z"
 *           description: Fecha de vencimiento del pago.
 *         indPack:
 *           type: boolean
 *           example: false
 *           description: Indica si el producto es parte de un paquete.
 *       required:
 *         - productCode
 *         - name
 *         - subCategoryId
 *         - indActive
 *         - indArchived
 *         - contractMonths
 *         - priceInvoiceFrequencyMonths
 *         - taxRequired
 *         - responsibleApprovalRequired
 *         - supervisorApprovalRequired
 *         - payRequired
 *         - indPack
 *       description: Modelo de solicitud para crear un nuevo producto.
 */
