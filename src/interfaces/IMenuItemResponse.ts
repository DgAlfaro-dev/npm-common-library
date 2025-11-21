export interface IMenuItemResponse {
    id: string,
    requiredPermission: string,
}

/**
 * @swagger
 * components:
 *   schemas:
 *     IMenuItemResponse:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           example: "1"
 *         requiredPermission:
 *           type: string
 *           example: "admin"
 *       required:
 *         - id
 *         - requiredPermission
 *       description: Respuesta del elemento del menú
 */