export interface IFindProvidersAndProducts {
    id: number,
    name: string,
    detail: string,
    type: string,
}

/**
 * @swagger
 * components:
 *   schemas:
 *     IFindProvidersAndProducts:
 *       type: object
 *       properties:
 *         id:
 *           type: number
 *           description: Unique identifier for the provider or product.
 *         name:
 *           type: string
 *           description: Name of the provider or product.
 *         detail:
 *           type: string
 *           description: Detailed description of the provider or product.
 *         type:
 *           type: string
 *           description: Specifies whether the item is a provider or a product.
 */