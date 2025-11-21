export interface ISmsTextRequest {
    smsText: string,
    phoneNumber: string
}



/**
 * @swagger
 * components:
 *   schemas:
 *     ISmsTextRequest:
 *       type: object
 *       properties:
 *         smsText:
 *           type: string
 *           description: The text of the SMS message to be sent.
 *         phoneNumber:
 *           type: string
 *           description: The phone number to send the SMS message to.
 *       required:
 *         - smsText
 *         - phoneNumber
 */