import { IListPagedResponse } from "./IListPagedResponse.js";

export class ListPagedResponse<T> implements IListPagedResponse<T>{
    items: T[];
    totalItems: number;
    totalPages: number;
    currentPage: number;
    itemsPerPage: number;

    constructor(
      items: T[],
      totalItems: number,
      currentPage: number,
      itemsPerPage: number
    ) {
      this.items = items;
      this.totalItems = totalItems;
      this.currentPage = currentPage;
      this.itemsPerPage = itemsPerPage;
      this.totalPages = Math.ceil(totalItems / itemsPerPage);
    }
  }

  /**
 * @swagger
 * components:
 *   schemas:
 *     ListPagedResponse:
 *       type: object
 *       properties:
 *         items:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/IClientsResponsePaginated'
 *         totalItems:
 *           type: number
 *           example: 100
 *         totalPages:
 *           type: number
 *           example: 10
 *         currentPage:
 *           type: number
 *           example: 1
 *         itemsPerPage:
 *           type: number
 *           example: 10
 *       required:
 *         - items
 *         - totalItems
 *         - totalPages
 *         - currentPage
 *         - itemsPerPage
 *       description: Respuesta paginada que contiene una lista de elementos, el número total de elementos, el número total de páginas, la página actual y el número de elementos por página.
 */
