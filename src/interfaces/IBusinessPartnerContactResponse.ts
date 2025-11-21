export interface IBusinessPartnerContactResponse {
    businessPartnersContactId: number;
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
    Note?: string;
  }
  

  /**
 * @swagger
 * components:
 *  schemas:
 *    IBusinessPartnerContactResponse:
 *      type: object
 *      properties:
 *        businessPartnersContactId:
 *          type: number
 *          description: Unique identifier for the business partner contact.
 *        contactName:
 *          type: string
 *          description: Name of the contact.
 *        mail1:
 *          type: string
 *          description: Primary email address of the contact.
 *        mail2:
 *          type: string
 *          description: Secondary email address of the contact.
 *        cel1:
 *          type: string
 *          description: Primary cell phone number of the contact.
 *        cel2:
 *          type: string
 *          description: Secondary cell phone number of the contact.
 *        cel1w:
 *          type: boolean
 *          description: Indicates whether the primary cell phone is WhatsApp enabled.
 *        cel2w:
 *          type: boolean
 *          description: Indicates whether the secondary cell phone is WhatsApp enabled.
 *        telHome1:
 *          type: string
 *          description: Primary home telephone number of the contact.
 *        telHome2:
 *          type: string
 *          description: Secondary home telephone number of the contact.
 *        workHome1:
 *          type: string
 *          description: Primary work telephone number of the contact.
 *        workHome2:
 *          type: string
 *          description: Secondary work telephone number of the contact.
 *        indMain:
 *          type: boolean
 *          description: Indicates whether this contact is the main contact.
 *        Note:
 *          type: string
 *          nullable: true
 *          description: Additional notes about the contact.
 *      required:
 *        - businessPartnersContactId
 *        - contactName
 *        - mail1
 *        - cel1
 *        - cel1w
 *        - cel2w
 *        - indMain
 */
