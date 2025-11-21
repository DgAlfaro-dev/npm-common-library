export interface IProductClassResponse {
    productClassId: number,
    name: string,
    detail: string,
    description: string,
    imageURL: string,
    indActive: boolean,
    order: number,
    productCategories: IProductCategory[]
}

export interface IProductCategory {
    productCategoryId: number,
    name: string,
    detail: string,
    description: string,
    imageURL: string,
    productSubCategories: IProductSubCategory[]
}

export interface IProductSubCategory {
    productSubCategoryId: number,
    name: string,
    detail: string,
    description: string,
    imageURL: string,
}


/**
 * @swagger
 * components:
 *   schemas:
 *     IProductClassResponse:
 *       type: object
 *       properties:
 *         productClassId:
 *           type: integer
 *           example: 1
 *           description: ID de la clase de producto.
 *         name:
 *           type: string
 *           example: "Electrónica"
 *           description: Nombre de la clase de producto.
 *         detail:
 *           type: string
 *           example: "Productos electrónicos y gadgets"
 *           description: Detalle de la clase de producto.
 *         description:
 *           type: string
 *           example: "Incluye todos los productos electrónicos disponibles."
 *           description: Descripción de la clase de producto.
 *         imageURL:
 *           type: string
 *           example: "https://example.com/images/electronics.png"
 *           description: URL de la imagen representativa de la clase de producto.
 *         indActive:
 *           type: boolean
 *           example: true
 *           description: Indica si la clase de producto está activa.
 *         order:
 *           type: integer
 *           example: 1
 *           description: Orden de la clase de producto en la lista.
 *         productCategories:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/IProductCategory'
 *       required:
 *         - productClassId
 *         - name
 *         - indActive
 *         - order
 *       description: Información detallada de una clase de producto.
 */


/**
 * @swagger
 * components:
 *   schemas:
 *     IProductCategory:
 *       type: object
 *       properties:
 *         productCategoryId:
 *           type: integer
 *           example: 1
 *           description: ID de la categoría de producto.
 *         name:
 *           type: string
 *           example: "Smartphones"
 *           description: Nombre de la categoría de producto.
 *         detail:
 *           type: string
 *           example: "Dispositivos móviles inteligentes"
 *           description: Detalle de la categoría de producto.
 *         description:
 *           type: string
 *           example: "Incluye todos los smartphones disponibles."
 *           description: Descripción de la categoría de producto.
 *         imageURL:
 *           type: string
 *           example: "https://example.com/images/smartphones.png"
 *           description: URL de la imagen representativa de la categoría de producto.
 *         productSubCategories:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/IProductSubCategory'
 *       required:
 *         - productCategoryId
 *         - name
 *       description: Información detallada de una categoría de producto.
 *     IProductSubCategory:
 *       type: object
 *       properties:
 *         productSubCategoryId:
 *           type: integer
 *           example: 1
 *           description: ID de la subcategoría de producto.
 *         name:
 *           type: string
 *           example: "Accesorios"
 *           description: Nombre de la subcategoría de producto.
 *         detail:
 *           type: string
 *           example: "Cargadores, fundas y otros accesorios"
 *           description: Detalle de la subcategoría de producto.
 *         description:
 *           type: string
 *           example: "Incluye accesorios para smartphones y tablets."
 *           description: Descripción de la subcategoría de producto.
 *         imageURL:
 *           type: string
 *           example: "https://example.com/images/accessories.png"
 *           description: URL de la imagen representativa de la subcategoría de producto.
 *       required:
 *         - productSubCategoryId
 *         - name
 *       description: Información detallada de una subcategoría de producto.
 */
