export interface ICatalogModel {
  catalogId: number;
  catalogCode: string;
  catalogDescription: string;
}

/**
 * @swagger
 * components:
 *   schemas:
 *     ICatalogModel:
 *       type: object
 *       properties:
 *         catalogId:
 *           type: integer
 *           example: 1
 *         catalogCode:
 *           type: string
 *           example: '1'
 *         catalogDescription:
 *           type: string
 *           example: 'Option A'
 *       required:
 *         - catalogId
 *         - catalogCode
 *         - catalogDescription
 */

