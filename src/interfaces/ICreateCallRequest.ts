export interface ICreateCallRequest {
  createById: string;
  member: string;
}

export interface IUpdateCallMembersRequest {
  callId: string;
  newAgentId: string;
}


/**
 * @swagger
 * components:
 *   schemas:
 *     ICreateCallRequest:
 *       type: object
 *       properties:
 *         createById:
 *           type: string
 *           example: "user123"
 *           description: ID del usuario que crea la llamada.
 *         member:
 *           type: string
 *           example: "member456"
 *           description: ID del miembro de la llamada.
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     IUpdateCallMembersRequest:
 *       type: object
 *       properties:
 *         callId:
 *           type: string
 *           example: "call789"
 *           description: ID de la llamada que se actualizará.
 *         newAgentId:
 *           type: string
 *           example: "agent123"
 *           description: ID del nuevo agente asignado a la llamada.
 */
