export interface IWorkFlowReasonsResponse {
    id: number,
    reason: string,
}

/**
 * @swagger
 * components:
 *   schemas:
 *     WorkFlowReasonsResponse:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: The ID of the reason
 *         reason:
 *           type: string
 *           description: The reason text
 */