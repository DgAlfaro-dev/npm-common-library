export interface IGPSclientResponse {
    usuarioId: number,
    GPSPhoneNumber: string,
    businessPartnerId: number
}

/**
 * @swagger
 * components:
 *   schemas:
*     IGPSclientResponse:
 *       type: object
 *       properties:
 *         usuarioId:
 *           type: number
 *           description: The unique identifier of the user.
 *         GPSPhoneNumber:
 *           type: string
 *           description: The phone number associated with the GPS client.
 *         businessPartnerId:
 *           type: number
 *           description: The unique identifier of the associated business partner.
 *       required:
 *         - usuarioId
 *         - GPSPhoneNumber
 *         - businessPartnerId
 */