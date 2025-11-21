export interface IBusinessPartnerAttachmentModel {
  businessPartnerAttachmentsId: number;
  businessPartnersId: number;
  idOrigin: number;
  fileName: string;
  idFileType: {
    catalogId: string;
    catalogCode: string;
    catalogDescription: string;
  };
  fileInternalNote: string;
  cratedBy: number;
  createdDateTime: string;
  url: string;
  businessPartnerHistoryId: number | null;
}

/**
 * @swagger
 * components:
 *  schemas:
 *    IBusinessPartnerAttachmentModel:
 *      type: object
 *      properties:
 *        businessPartnerAttachmentsId:
 *          type: number
 *          description: Unique identifier for the business partner attachment.
 *        businessPartnersId:
 *          type: number
 *          description: Identifier for the associated business partner.
 *        idOrigin:
 *          type: number
 *          description: Origin identifier for the attachment.
 *        fileName:
 *          type: string
 *          description: Name of the file attached.
 *        idFileType:
 *          type: object
 *          description: Type of the file based on a catalog.
 *          properties:
 *            catalogId:
 *              type: string
 *              description: Catalog identifier for the file type.
 *            catalogCode:
 *              type: string
 *              description: Code representing the file type in the catalog.
 *            catalogDescription:
 *              type: string
 *              description: Description of the file type.
 *        fileInternalNote:
 *          type: string
 *          description: Internal note associated with the file.
 *        cratedBy:
 *          type: number
 *          description: Identifier of the user who created the attachment.
 *        createdDateTime:
 *          type: string
 *          format: date-time
 *          description: The date and time when the attachment was created.
 *        url:
 *          type: string
 *          description: URL where the attached file is stored.
 *        businessPartnerHistoryId:
 *          type: number
 *          nullable: true
 *          description: Identifier for the associated business partner history record, if applicable.
 *      required:
 *        - businessPartnerAttachmentsId
 *        - businessPartnersId
 *        - idOrigin
 *        - fileName
 *        - idFileType
 *        - cratedBy
 *        - createdDateTime
 *        - url
 */
