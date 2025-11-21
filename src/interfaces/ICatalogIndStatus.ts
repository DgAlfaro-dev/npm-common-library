export interface ICatalogIndStatus {
    catalogName: string;
    catalogId: string;
    catalogDescription: string;
    catalogCode: string;
    // reasonRequired: string;
}


/**
 * @swagger
 * components:
 *  schemas:
 *    ICatalogIndStatus:
 *      type: object
 *      properties:
 *        catalogName:
 *          type: string
 *          description: The name of the catalog.
 *        catalogId:
 *          type: string
 *          description: The unique identifier of the catalog.
 *        catalogDescription:
 *          type: string
 *          description: A description of the catalog.
 *        catalogCode:
 *          type: string
 *          description: The code associated with the catalog.
 *        reasonRequired:
 *          type: string
 *          description: Specifies if a reason is required for the catalog item.
 *      required:
 *        - catalogName
 *        - catalogId
 *        - catalogDescription
 *        - catalogCode
 *        - reasonRequired
*/