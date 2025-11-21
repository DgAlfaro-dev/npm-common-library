export interface IBusinessPartnerContactRequest {
  contactName: string;
  mail1: string;
  mail2: string;
  cel1: string;
  cel2: string;
  cel1w: boolean;
  cel2w: boolean;
  telHome1: string;
  telHome2: string;
  workHome1: string;
  workHome2: string;
  indMain: boolean;
  Note: string;
}

/**
 * @swagger
 * components:
 *  schemas:
 *    IBusinessPartnerContactRequest:
 *      type: object
 *      properties:
 *        contactName:
 *          type: string
 *          description: Name of the contact person.
 *        mail1:
 *          type: string
 *          description: Primary email address of the contact.
 *        mail2:
 *          type: string
 *          description: Secondary email address of the contact (optional).
 *        cel1:
 *          type: string
 *          description: Primary cell phone number of the contact.
 *        cel2:
 *          type: string
 *          description: Secondary cell phone number of the contact (optional).
 *        cel1w:
 *          type: boolean
 *          description: Indicates whether the primary cell phone number is WhatsApp enabled.
 *        cel2w:
 *          type: boolean
 *          description: Indicates whether the secondary cell phone number is WhatsApp enabled (optional).
 *        telHome1:
 *          type: string
 *          description: Primary home telephone number of the contact.
 *        telHome2:
 *          type: string
 *          description: Secondary home telephone number of the contact (optional).
 *        workHome1:
 *          type: string
 *          description: Primary work telephone number of the contact.
 *        workHome2:
 *          type: string
 *          description: Secondary work telephone number of the contact (optional).
 *        indMain:
 *          type: boolean
 *          description: Indicates whether this contact is the main contact for the business partner.
 *        Note:
 *          type: string
 *          description: Additional notes about the contact.
 *      required:
 *        - contactName
 *        - mail1
 *        - cel1
 *        - cel1w
 *        - cel2w
 *        - indMain
 *        - Note
 */
