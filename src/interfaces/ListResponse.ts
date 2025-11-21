export class ListResponse<T> {
  items: T[];
  totalItems: number;

  constructor(items: T[], totalItems: number) {
    this.items = items;
    this.totalItems = totalItems;
  }

  /**
   * @swagger
   * components:
   *   schemas:
   *     ListResponse:
   *       type: object
   *       properties:
   *         items:
   *           type: array
   *           items:
   *             type: object  
   *         totalItems:
   *           type: number
   *       required:
   *         - items
   *         - totalItems
   *       description: Respuesta que contiene una lista de elementos y el número total de elementos.
   */
}
