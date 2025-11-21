export interface ISupplierServiceAreaResponse {
    country: string,
    state: string,
    city: string,
    area: string,
    exclude: boolean
}

/**
 * @swagger
 * components:
 *   schemas:
 *     ISupplierServiceAreaResponse:
 *       type: object
 *       properties:
 *         country:
 *           type: string
 *           description: The country of the service area.
 *         state:
 *           type: string
 *           description: The state of the service area.
 *         city:
 *           type: string
 *           description: The city of the service area.
 *         area:
 *           type: string
 *           description: The specific area within the city where the supplier operates.
 *         exclude:
 *           type: boolean
 *           description: Indicates whether the area is excluded from the service.
 *       required:
 *         - country
 *         - state
 *         - city
 *         - area
 *         - exclude
 */