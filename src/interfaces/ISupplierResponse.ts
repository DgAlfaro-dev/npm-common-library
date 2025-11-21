export interface ISupplierResponse {
    supplierId: number,
    name: string,
    supplierClassName: string,
    supplierCategoryName: string,
    supplierSubCategoryName: string,
    serviceClass: IProductClass,
    serviceCategory: IProductCategory,
    serviceSubCategory: IProductSubCategory,
    contactName: string,
    contactMail: string,
    contactPhone: string,
    contactCelPhone: string,
    taxIdentityNumber: string;
    paymentTermDays: number,
    paymentTermCurrency: ICurrency,
    paymentTermMediaType: string,
    paymentTermBank: IBank,
    paymentTermBankAccountNum: string,
    contractInitialDate: Date,
    contractEndDate: Date,
    country: ICountry,
    state: IState,
    city: ICity,
    dirLine1: string,
    dirLine2: string,
    zipCode: string,
    dirMoreDetail: string,
    indActive: boolean,
    note: string,
    photoUrl: string,
}

interface IProductClass {
    productClassId: number,
    name: string,
    detail: string,
}

interface IProductCategory {
    productCategoryId: number,
    productClassId: number,
    name: string,
    detail: string,
}

interface IProductSubCategory {
    productSubCategoryId: number,
    productCategoryId: number,
    name: string,
    detail: string,
}

interface ICountry {
    countryId: number,
    countryName: string,
    indActive: boolean,
    note: string
}

interface IState {
    stateId: number,
    stateName: string,
    indActive: boolean,
    note: string,
}

interface ICity {
    cityId: number, 
    cityName: string,
    indActive: boolean,
    note: string,
}

interface IBank {
    bankId: number,
    name: string,
    indActive: boolean,
}

interface ICurrency {
    currencyId: number,
    ISO2Code: string,
    ISO3Code: string,
    symbol: string,
    name: string,
    indActive: boolean
}

/**
 * @swagger
 * components:
 *   schemas:
 *     ISupplierResponse:
 *       type: object
 *       properties:
 *         supplierId:
 *           type: integer
 *           description: The unique identifier of the supplier.
 *         name:
 *           type: string
 *           description: The name of the supplier.
 *         supplierClassName:
 *           type: string
 *           description: The class name of the supplier.
 *         supplierCategoryName:
 *           type: string
 *           description: The category name of the supplier.
 *         supplierSubCategoryName:
 *           type: string
 *           description: The subcategory name of the supplier.
 *         serviceClass:
 *           $ref: '#/components/schemas/IProductClass'
 *         serviceCategory:
 *           $ref: '#/components/schemas/IProductCategory'
 *         serviceSubCategory:
 *           $ref: '#/components/schemas/IProductSubCategory'
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
 *           description: The tax identity number for the supplier.
 *         paymentTermDays:
 *           type: integer
 *           description: The number of payment term days.
 *         paymentTermCurrency:
 *           $ref: '#/components/schemas/ICurrency'
 *         paymentTermMediaType:
 *           type: string
 *           description: The media type for payment terms.
 *         paymentTermBank:
 *           $ref: '#/components/schemas/IBank'
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
 *         country:
 *           $ref: '#/components/schemas/ICountry'
 *         state:
 *           $ref: '#/components/schemas/IState'
 *         city:
 *           $ref: '#/components/schemas/ICity'
 *         dirLine1:
 *           type: string
 *           description: The first line of the supplier's address.
 *         dirLine2:
 *           type: string
 *           description: The second line of the supplier's address.
 *         zipCode:
 *           type: string
 *           description: The zip code of the supplier's address.
 *         dirMoreDetail:
 *           type: string
 *           description: Additional details about the supplier's address.
 *         indActive:
 *           type: boolean
 *           description: Indicator if the supplier is active.
 *         note:
 *           type: string
 *           description: Additional notes about the supplier.
 *         photoUrl:
 *           type: string
 *           description: The URL to the supplier's photo.
 *       required:
 *         - supplierId
 *         - name
 *         - indActive
 *
 *     ISupplierRequest:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: The name of the supplier.
 *         supplierClassName:
 *           type: string
 *           description: The class name of the supplier.
 *         supplierCategoryName:
 *           type: string
 *           description: The category name of the supplier.
 *         supplierSubCategoryName:
 *           type: string
 *           description: The subcategory name of the supplier.
 *         serviceClass:
 *           $ref: '#/components/schemas/IProductClass'
 *         serviceCategory:
 *           $ref: '#/components/schemas/IProductCategory'
 *         serviceSubCategory:
 *           $ref: '#/components/schemas/IProductSubCategory'
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
 *           description: The tax identity number for the supplier.
 *         paymentTermDays:
 *           type: integer
 *           description: The number of payment term days.
 *         paymentTermCurrency:
 *           $ref: '#/components/schemas/ICurrency'
 *         paymentTermMediaType:
 *           type: string
 *           description: The media type for payment terms.
 *         paymentTermBank:
 *           $ref: '#/components/schemas/IBank'
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
 *           type: number
 *           description: The ID of the country where the supplier is located.
 *         stateId:
 *           type: number
 *           description: The ID of the state where the supplier is located.
 *         cityId:
 *           type: number
 *           description: The ID of the city where the supplier is located.
 *         dirLine1:
 *           type: string
 *           description: The first line of the supplier's address.
 *         dirLine2:
 *           type: string
 *           description: The second line of the supplier's address.
 *         zipCode:
 *           type: string
 *           description: The zip code of the supplier's address.
 *         dirMoreDetail:
 *           type: string
 *           description: Additional details about the supplier's address.
 *         indActive:
 *           type: boolean
 *           description: Indicator if the supplier is active.
 *         note:
 *           type: string
 *           description: Additional notes about the supplier.
 *         photoUrl:
 *           type: string
 *           description: The URL to the supplier's photo.
 *       required:
 *         - name
 *         - supplierClassName
 *         - supplierCategoryName
 *         - supplierSubCategoryName
 *         - contactName
 *         - contactMail
 *         - contactPhone
 *         - taxIdentityNumber
 *         - paymentTermDays
 *         - paymentTermCurrency
 *         - countryId
 *         - stateId
 *         - cityId
 *         - indActive
 *
 *     IProductClass:
 *       type: object
 *       properties:
 *         productClassId:
 *           type: integer
 *           description: The unique identifier of the product class.
 *         name:
 *           type: string
 *           description: The name of the product class.
 *         detail:
 *           type: string
 *           description: The details of the product class.
 *       required:
 *         - productClassId
 *         - name
 *
 *     IProductCategory:
 *       type: object
 *       properties:
 *         productCategoryId:
 *           type: integer
 *           description: The unique identifier of the product category.
 *         productClassId:
 *           type: integer
 *           description: The unique identifier of the associated product class.
 *         name:
 *           type: string
 *           description: The name of the product category.
 *         detail:
 *           type: string
 *           description: The details of the product category.
 *       required:
 *         - productCategoryId
 *         - name
 *         - productClassId
 *
 *     IProductSubCategory:
 *       type: object
 *       properties:
 *         productSubCategoryId:
 *           type: integer
 *           description: The unique identifier of the product subcategory.
 *         productCategoryId:
 *           type: integer
 *           description: The unique identifier of the associated product category.
 *         name:
 *           type: string
 *           description: The name of the product subcategory.
 *         detail:
 *           type: string
 *           description: The details of the product subcategory.
 *       required:
 *         - productSubCategoryId
 *         - name
 *         - productCategoryId
 *
 *     ICountry:
 *       type: object
 *       properties:
 *         countryId:
 *           type: integer
 *           description: The unique identifier of the country.
 *         countryName:
 *           type: string
 *           description: The name of the country.
 *         indActive:
 *           type: boolean
 *           description: Indicator if the country is active.
 *         note:
 *           type: string
 *           description: Additional notes about the country.
 *       required:
 *         - countryId
 *         - countryName
 *
 *     IState:
 *       type: object
 *       properties:
 *         stateId:
 *           type: integer
 *           description: The unique identifier of the state.
 *         stateName:
 *           type: string
 *           description: The name of the state.
 *         indActive:
 *           type: boolean
 *           description: Indicator if the state is active.
 *         note:
 *           type: string
 *           description: Additional notes about the state.
 *       required:
 *         - stateId
 *         - stateName
 *
 *     ICity:
 *       type: object
 *       properties:
 *         cityId:
 *           type: integer
 *           description: The unique identifier of the city.
 *         cityName:
 *           type: string
 *           description: The name of the city.
 *         indActive:
 *           type: boolean
 *           description: Indicator if the city is active.
 *         note:
 *           type: string
 *           description: Additional notes about the city.
 *       required:
 *         - cityId
 *         - cityName
 *
 *     IBank:
 *       type: object
 *       properties:
 *         bankId:
 *           type: integer
 *           description: The unique identifier of the bank.
 *         name:
 *           type: string
 *           description: The name of the bank.
 *         indActive:
 *           type: boolean
 *           description: Indicator if the bank is active.
 *       required:
 *         - bankId
 *         - name
 *
 *     ICurrency:
 *       type: object
 *       properties:
 *         currencyId:
 *           type: integer
 *           description: The unique identifier of the currency.
 *         ISO2Code:
 *           type: string
 *           description: The 2-letter ISO code for the currency.
 *         ISO3Code:
 *           type: string
 *           description: The 3-letter ISO code for the currency.
 *         symbol:
 *           type: string
 *           description: The symbol for the currency.
 *         name:
 *           type: string
 *           description: The name of the currency.
 *         indActive:
 *           type: boolean
 *           description: Indicator if the currency is active.
 *       required:
 *         - currencyId
 *         - ISO2Code
 *         - ISO3Code
 *         - name
 */