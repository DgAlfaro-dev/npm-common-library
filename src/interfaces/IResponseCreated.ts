export interface IResponseCreated {
    id: number;
}

/**
 * @swagger
 * components:
 *   schemas:
 *     IResponseCreated:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: El ID del elemento creado.
 *       required:
 *         - id
 *       description: Respuesta que contiene el ID del elemento recién creado.
 */