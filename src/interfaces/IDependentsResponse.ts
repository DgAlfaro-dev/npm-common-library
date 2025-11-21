import { ICatalogModel } from "./ICatalogModel.js";

export interface IDependentsResponse {
  businessPartnersId: number;
  firstName: string;
  secondName: string;
  lastName: string;
  sLastName: string;
  mail1: string;
  mail2: string;
  cel1: string;
  cel2: string;
  cel1w: boolean;
  cel2w: boolean;
  telHome1: string;
  telHome2: string;
  avatarSrc: string;
  usuarioId: number;
  virtualAgentId: number,
  getStreamId: string,
  kinship: ICatalogModel,
  basePlan: string,
  indStatus: string
}

/**
 * @swagger
 * components:
 *   schemas:
 *     IDependentsResponse:
 *       type: object
 *       properties:
 *         businessPartnersId:
 *           type: number
 *           example: 1
 *         firstName:
 *           type: string
 *           example: John
 *         secondName:
 *           type: string
 *           example: Doe
 *         lastName:
 *           type: string
 *           example: Smith
 *         sLastName:
 *           type: string
 *           example: 
 *         mail1:
 *           type: string
 *           example: john.doe@example.com
 *         mail2:
 *           type: string
 *           example: jane.smith@example.com
 *         cel1:
 *           type: string
 *           example: 123456789
 *         cel2:
 *           type: string
 *           example: 987654321
 *         cel1w:
 *           type: boolean
 *           example: true
 *         cel2w:
 *           type: boolean
 *           example: false
 *         telHome1:
 *           type: string
 *           example: 987654321
 *         telHome2:
 *           type: string
 *           example: 123456789
 *         avatarSrc:
 *           type: string
 *           example: /path/to/avatar.jpg
 *         usuarioId:
 *           type: number
 *           example: 1
 *       required:
 *         - businessPartnersId
 *         - firstName
 *         - secondName
 *         - lastName
 *         - mail1
 *         - cel1
 *         - cel1w
 *         - telHome1
 *         - avatarSrc
 *         - usuarioId
 *       description: Respuesta de dependientes
 */