export interface ICategoryListResponse {
    productCategoryId: number,
    productClassId: number,
    ProductClassname: string,
    ProductClassdetail: string,
    IsProductClassActive: boolean
    name: string,
    detail: string,
    indActive: boolean,
    order: number,
    productSubCategory: IProductSubCategoryList[]
}

export interface IProductSubCategoryList {
    productSubCategoryId: number,
    productCategoryId: number,
    name: string,
    detail: string,
    indActive: boolean
}


/**
 * @swagger
 * components:
 *   schemas:
 *     ICategoryListResponse:
 *       type: object
 *       properties:
 *         productCategoryId:
 *           type: number
 *           example: 1
 *         productClassId:
 *           type: number
 *           example: 2
 *         ProductClassname:
 *           type: string
 *           example: "Electrónica"
 *         ProductClassdetail:
 *           type: string
 *           example: "Productos electrónicos y gadgets."
 *         IsProductClassActive:
 *           type: boolean
 *           example: true
 *         name:
 *           type: string
 *           example: "Televisores"
 *         detail:
 *           type: string
 *           example: "Todo tipo de televisores."
 *         indActive:
 *           type: boolean
 *           example: true
 *         order:
 *           type: number
 *           example: 1
 *         productSubCategory:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/IProductSubCategoryList'
 *       required:
 *         - productCategoryId
 *         - productClassId
 *         - ProductClassname
 *         - name
 *         - detail
 *         - indActive
 *         - order
 *       description: Respuesta con la lista de categorías de productos.
 *
 *     IProductSubCategoryList:
 *       type: object
 *       properties:
 *         productSubCategoryId:
 *           type: number
 *           example: 10
 *         productCategoryId:
 *           type: number
 *           example: 1
 *         name:
 *           type: string
 *           example: "Smart TV"
 *         detail:
 *           type: string
 *           example: "Televisores inteligentes con acceso a internet."
 *         indActive:
 *           type: boolean
 *           example: true
 *       required:
 *         - productSubCategoryId
 *         - productCategoryId
 *         - name
 *         - detail
 *         - indActive
 *       description: Respuesta con la lista de subcategorías de productos.
 */


/**
 * @swagger
 * components:
 *   schemas:
 *     IListPagedResponse_ICategoryListResponse:
 *       type: object
 *       properties:
 *         items:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/ICategoryListResponse'
 *         totalItems:
 *           type: integer
 *           example: 100
 *         totalPages:
 *           type: integer
 *           example: 10
 *         currentPage:
 *           type: integer
 *           example: 1
 *       required:
 *         - items
 *         - totalItems
 *         - totalPages
 *         - currentPage
 *       description: Estructura de respuesta para listas paginadas de categorías.
 */
