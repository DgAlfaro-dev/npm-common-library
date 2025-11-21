export interface ISupplierRequest {
    name: string,
    serviceClass: number,
    serviceCatagory: number,
    serviceSubCategory: number,
    contactName: string,
    contactMail: string,
    contactPhone: string,
    contactCelPhone: string,
    taxIdentityNumber: string,
    paymentTermsDay: number,
    paymentTermCurrency: number,
    paymentTermMediaType: string,
    paymentTermBankId: number,
    paymentTermBankAccountNum: string,
    contractInitialDate: Date,
    contractEndDate: Date,
    countryId: number,
    stateId: number,
    cityId: number,
    dirLine1: string,
    dirLine2: string,
    zipCode: string,
    indActive: boolean,
    note: string,
    photoURL: string,
}

/**
 * @swagger
 * components:
 *   schemas:
 *     ISupplierRequest:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: The name of the supplier.
 *         serviceClass:
 *           type: integer
 *           description: The ID of the service class associated with the supplier.
 *         serviceCatagory:
 *           type: integer
 *           description: The ID of the service category associated with the supplier.
 *         serviceSubCategory:
 *           type: integer
 *           description: The ID of the service subcategory associated with the supplier.
 *         contactName:
 *           type: string
 *           description: The contact name for the supplier.
 *         contactMail:
 *           type: string
 *           description: The contact email for the supplier.
 *         contactPhone:
 *           type: string
 *           description: The contact phone number for the supplier.
 *         contactCelPhone:
 *           type: string
 *           description: The contact cell phone number for the supplier.
 *         taxIdentityNumber:
 *           type: string
 *           description: The tax identity number of the supplier.
 *         paymentTermsDay:
 *           type: integer
 *           description: The number of days for payment terms.
 *         paymentTermCurrency:
 *           type: integer
 *           description: The ID of the currency used for payment terms.
 *         paymentTermMediaType:
 *           type: string
 *           description: The media type for payment terms (e.g., Bank Transfer, Credit Card).
 *         paymentTermBankId:
 *           type: integer
 *           description: The ID of the bank associated with the supplier's payment terms.
 *         paymentTermBankAccountNum:
 *           type: string
 *           description: The bank account number for payment terms.
 *         contractInitialDate:
 *           type: string
 *           format: date-time
 *           description: The initial date of the supplier's contract.
 *         contractEndDate:
 *           type: string
 *           format: date-time
 *           description: The end date of the supplier's contract.
 *         countryId:
 *           type: integer
 *           description: The ID of the country where the supplier is located.
 *         stateId:
 *           type: integer
 *           description: The ID of the state where the supplier is located.
 *         cityId:
 *           type: integer
 *           description: The ID of the city where the supplier is located.
 *         dirLine1:
 *           type: string
 *           description: The first line of the supplier's address.
 *         dirLine2:
 *           type: string
 *           description: The second line of the supplier's address.
 *         zipCode:
 *           type: string
 *           description: The postal code of the supplier's address.
 *         indActive:
 *           type: boolean
 *           description: Indicates whether the supplier is active.
 *         note:
 *           type: string
 *           description: Additional notes about the supplier.
 *         photoURL:
 *           type: string
 *           description: The URL of the supplier's photo.
 *       required:
 *         - name
 *         - serviceClass
 *         - serviceCatagory
 *         - serviceSubCategory
 *         - contactName
 *         - contactMail
 *         - contactPhone
 *         - taxIdentityNumber
 *         - paymentTermsDay
 *         - paymentTermCurrency
 *         - paymentTermBankId
 *         - contractInitialDate
 *         - contractEndDate
 *         - countryId
 *         - stateId
 *         - cityId
 *         - dirLine1
 *         - indActive
 */
