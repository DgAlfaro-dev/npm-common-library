export interface ISupplierProductResponse {
    supplierProductId: number,
    productName: string,
    productId: number,
    productQuantity: number,
    productPrice: number,
}

/**
 * @swagger
 * components:
 *   schemas:
 *     ISupplierProductResponse:
 *       type: object
 *       properties:
 *         supplierProductId:
 *           type: integer
 *           description: The unique identifier of the supplier product.
 *         productName:
 *           type: string
 *           description: The name of the product provided by the supplier.
 *         productId:
 *           type: integer
 *           description: The unique identifier of the product.
 *         productQuantity:
 *           type: integer
 *           description: The quantity of the product available from the supplier.
 *         productPrice:
 *           type: number
 *           format: float
 *           description: The price of the product provided by the supplier.
 *       required:
 *         - supplierProductId
 *         - productName
 *         - productId
 *         - productQuantity
 *         - productPrice
 */