
export interface IContactByVirtualAgentResponse {
    cel1: string,
    cel2: string,
    telHome1: string,
    telHome2: string,
    workHome1: string,
    workHome2: string,
    hasActiveDevice: boolean,
}






/**
 * @swagger
 * components:
 *   schemas:
 *     IContactByVirtualAgentResponse:
 *       type: object
 *       properties:
 *         cel1:
 *           type: string
 *           description: Número de celular principal
 *           example: "+1234567890"
 *         cel2:
 *           type: string
 *           description: Número de celular secundario
 *           example: "+0987654321"
 *         telHome1:
 *           type: string
 *           description: Número de teléfono de casa principal
 *           example: "+1122334455"
 *         telHome2:
 *           type: string
 *           description: Número de teléfono de casa secundario
 *           example: "+5566778899"
 *         workHome1:
 *           type: string
 *           description: Número de teléfono del trabajo principal
 *           example: "+1231231234"
 *         workHome2:
 *           type: string
 *           description: Número de teléfono del trabajo secundario
 *           example: "+3213214321"
 *         hasActiveDevice:
 *           type: boolean
 *           description: Indicador de si tiene un dispositivo activo
 *           example: true
 */