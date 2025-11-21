import { ICatalogListModel } from "./ICatalogListModel.js";

export interface ICatalogIdType extends ICatalogListModel {
  dataMask: string;
}


/**
 * @swagger
 * components:
 *  schemas:
 *    ICatalogIdType:
 *      allOf:
 *        - $ref: '#/components/schemas/ICatalogListModel'
 *        - type: object
 *          properties:
 *            dataMask:
 *              type: string
 *              description: A string representing the data mask pattern for the ID type.
 *          required:
 *            - dataMask
 *      description: Extends ICatalogListModel with a data mask for ID types.
 */
