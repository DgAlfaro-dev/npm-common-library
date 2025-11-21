export interface IGeneralCatalogModel {
    id: string; 
    code: string;
    description: string;
}

/**
 * @swagger
 * components:
 *   schemas:
 *     IGeneralCatalogModel:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           example: "1"
 *         code:
 *           type: string
 *           example: "ABC"
 *         description:
 *           type: string
 *           example: "Description"
 *       required:
 *         - id
 *         - code
 *         - description
 */
